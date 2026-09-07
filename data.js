// CockpitFit data — every number below traces to a source_url a pilot can open and check.
// buttons/axes/hats = physical input slots on the controller.
// core_functions = essential bindable functions for that module, grouped by category,
// counted from the module's own official manual (Controls Stick & Throttles / HOTAS section),
// not from the full keybind list.

const CONTROLLERS = [
  {
    id: "t16000m-fcs",
    name: "Thrustmaster T.16000M FCS",
    note: "joystick only, no throttle",
    buttons: 16,
    axes: 4,
    hats: 1,
    sources: [
      { label: "Thrustmaster — T.16000M FCS product page", url: "https://www.thrustmaster.com/en-us/products/t-16000m-fcs/" }
    ]
  },
  {
    id: "t16000m-fcs-hotas",
    name: "Thrustmaster T.16000M FCS HOTAS",
    note: "joystick + TWCS Throttle bundle",
    buttons: 30,
    axes: 5,
    hats: 2,
    sources: [
      { label: "Thrustmaster — T.16000M FCS HOTAS product page", url: "https://www.thrustmaster.com/en-us/products/t-16000m-fcs-hotas/" }
    ]
  },
  {
    id: "hotas-warthog",
    name: "Thrustmaster HOTAS Warthog",
    note: "flight stick + dual throttle",
    buttons: 36,
    axes: 6,
    hats: 5,
    sources: [
      { label: "Thrustmaster — HOTAS Warthog Flight Stick product page", url: "https://www.thrustmaster.com/en-us/products/hotas-warthog-flight-stick/" },
      { label: "Thrustmaster — HOTAS Warthog Dual Throttle product page", url: "https://www.thrustmaster.com/en-us/products/hotas-warthog-dual-throttle/" }
    ]
  },
  {
    id: "t-flight-hotas-4",
    name: "Thrustmaster T-Flight HOTAS 4",
    note: "joystick + throttle, entry-level",
    buttons: 15,
    axes: 5,
    hats: 1,
    sources: [
      { label: "Thrustmaster — T-Flight HOTAS 4 product page", url: "https://www.thrustmaster.com/en-us/products/t-flight-hotas-4/" }
    ]
  }
];

const CATEGORY_PRIORITY = ["Flight Controls", "Weapons", "Trim", "Sensors/Radar", "Gear/Flaps", "Comms"];

const MODULES = [
  {
    id: "a10c2",
    name: "DCS: A-10C II Tank Killer",
    core_functions: [
      { category: "Flight Controls", count: 2 },
      { category: "Trim", count: 1 },
      { category: "Weapons", count: 4 },
      { category: "Sensors/Radar", count: 7 },
      { category: "Gear/Flaps", count: 2 },
      { category: "Comms", count: 1 }
    ],
    total_core_functions: 17,
    sources: [
      { label: "DCS A-10C II Flight Manual (Eagle Dynamics), Control Stick & Throttles, pp.107-114", url: "https://www.digitalcombatsimulator.com/upload/iblock/715/t05fb1h8itdhcvcf6fyi3h5944fvv4fx/DCS_A-10C_II_Flight_Manual_EN.pdf" }
    ]
  },
  {
    id: "fa18c",
    name: "DCS: F/A-18C Hornet",
    core_functions: [
      { category: "Flight Controls", count: 3 },
      { category: "Trim", count: 1 },
      { category: "Weapons", count: 4 },
      { category: "Sensors/Radar", count: 7 },
      { category: "Gear/Flaps", count: 2 },
      { category: "Comms", count: 1 }
    ],
    total_core_functions: 18,
    sources: [
      { label: "DCS F/A-18C Early Access Guide (Eagle Dynamics), Control Stick & Throttles, pp.71-79", url: "https://www.digitalcombatsimulator.com/upload/iblock/ea9/lxf69u2uk1fhqq7ndb55z9egzabe8hdg/DCS%20FA-18C%20Early%20Access%20Guide%20EN.pdf" }
    ]
  },
  {
    id: "f16c",
    name: "DCS: F-16C Viper",
    core_functions: [
      { category: "Flight Controls", count: 2 },
      { category: "Trim", count: 1 },
      { category: "Weapons", count: 5 },
      { category: "Sensors/Radar", count: 6 },
      { category: "Gear/Flaps", count: 1 },
      { category: "Comms", count: 1 }
    ],
    total_core_functions: 16,
    sources: [
      { label: "DCS F-16C Viper Early Access Guide (Eagle Dynamics), Hands-On Controls (HOTAS), pp.83-98", url: "https://www.digitalcombatsimulator.com/upload/iblock/e78/33zl8132hi71d3tv0194vvkzpzl3mrr6/DCS%20F-16C%20Early%20Access%20Guide%20EN.pdf" }
    ]
  },
  {
    id: "uh1h",
    name: "DCS: UH-1H Huey",
    core_functions: [
      { category: "Flight Controls", count: 5 },
      { category: "Trim", count: 1 },
      { category: "Weapons", count: 1 },
      { category: "Sensors/Radar", count: 0 },
      { category: "Gear/Flaps", count: 0 },
      { category: "Comms", count: 1 }
    ],
    total_core_functions: 8,
    sources: [
      { label: "DCS UH-1H Huey Flight Manual (Eagle Dynamics), Cyclic & Collective Control Stick, pp.37-39", url: "https://www.digitalcombatsimulator.com/upload/iblock/7c7/DCS%20UH-1H%20Flight%20Manual_EN.pdf" }
    ]
  }
];
