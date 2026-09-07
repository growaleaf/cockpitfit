function computeFit(controller, module) {
  const totalSlots = controller.buttons + controller.axes + controller.hats;
  let remaining = totalSlots;
  const rows = [];

  for (const wantedCategory of CATEGORY_PRIORITY) {
    const entry = module.core_functions.find(function (f) { return f.category === wantedCategory; });
    const need = entry ? entry.count : 0;
    if (need === 0) continue;
    const covered = Math.min(need, Math.max(remaining, 0));
    const short = need - covered;
    remaining -= covered;
    rows.push({ category: wantedCategory, need: need, covered: covered, short: short });
  }

  const totalCovered = Math.min(totalSlots, module.total_core_functions);
  const totalShort = module.total_core_functions - totalCovered;

  return { totalSlots: totalSlots, totalCovered: totalCovered, totalShort: totalShort, rows: rows };
}

function el(tag, className, text) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (text !== undefined) e.textContent = text;
  return e;
}

function renderSources(container, sources) {
  container.innerHTML = "";
  const label = el("span", "sources-label", "Sources: ");
  container.appendChild(label);
  sources.forEach(function (s, i) {
    const a = el("a", null, s.label);
    a.href = s.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    container.appendChild(a);
    if (i < sources.length - 1) container.appendChild(document.createTextNode(" · "));
  });
}

function renderResult(controller, module) {
  const fit = computeFit(controller, module);

  document.getElementById("result-heading").textContent =
    controller.name + " + " + module.name;

  document.getElementById("controller-slots").textContent =
    controller.buttons + " buttons, " + controller.axes + " axes, " + controller.hats + " hats (" +
    fit.totalSlots + " total input slots)";

  document.getElementById("module-needs").textContent =
    module.total_core_functions + " essential core functions";

  const summary = document.getElementById("fit-summary");
  summary.className = "fit-summary " + (fit.totalShort > 0 ? "fit-short" : "fit-full");
  summary.textContent = fit.totalShort > 0
    ? "Covers " + fit.totalCovered + " of " + module.total_core_functions + " core functions — " + fit.totalShort + " left over to push to keyboard or a second controller."
    : "Covers all " + module.total_core_functions + " core functions on this controller alone.";

  const tbody = document.getElementById("category-rows");
  tbody.innerHTML = "";
  fit.rows.forEach(function (row) {
    const tr = document.createElement("tr");
    const tdCat = el("td", null, row.category);
    const tdNeed = el("td", null, String(row.need));
    const tdCovered = el("td", null, String(row.covered));
    const tdShort = el("td", null, row.short > 0 ? String(row.short) : "-");
    if (row.short > 0) tdShort.className = "short-cell";
    tr.appendChild(tdCat);
    tr.appendChild(tdNeed);
    tr.appendChild(tdCovered);
    tr.appendChild(tdShort);
    tbody.appendChild(tr);
  });

  const noteLines = fit.rows.filter(function (r) { return r.short > 0; }).map(function (r) {
    return r.category + ": " + r.need + " functions, " + r.covered + " slots left after higher-priority categories — push " + r.short + " to keyboard or add a second controller.";
  });
  const noteBox = document.getElementById("shortfall-notes");
  noteBox.innerHTML = "";
  if (noteLines.length === 0) {
    noteBox.appendChild(el("p", null, "Every core function on this module has a physical slot on this controller."));
  } else {
    noteLines.forEach(function (line) {
      noteBox.appendChild(el("p", null, line));
    });
  }

  renderSources(document.getElementById("controller-sources"), controller.sources);
  renderSources(document.getElementById("module-sources"), module.sources);
}

function populateSelect(select, items) {
  items.forEach(function (item) {
    const opt = document.createElement("option");
    opt.value = item.id;
    opt.textContent = item.name;
    select.appendChild(opt);
  });
}

function init() {
  const controllerSelect = document.getElementById("controller-select");
  const moduleSelect = document.getElementById("module-select");

  populateSelect(controllerSelect, CONTROLLERS);
  populateSelect(moduleSelect, MODULES);

  const defaultControllerId = "t16000m-fcs";
  const defaultModuleId = "uh1h";
  controllerSelect.value = defaultControllerId;
  moduleSelect.value = defaultModuleId;

  function update() {
    const controller = CONTROLLERS.find(function (c) { return c.id === controllerSelect.value; });
    const module = MODULES.find(function (m) { return m.id === moduleSelect.value; });
    renderResult(controller, module);
  }

  controllerSelect.addEventListener("change", update);
  moduleSelect.addEventListener("change", update);

  update();
}

document.addEventListener("DOMContentLoaded", init);
