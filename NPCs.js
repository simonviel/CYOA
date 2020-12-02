var Majaïn = {
  name: "Majaïn",
  attributes: {
    intel: {
      current: 1,
      max: 1
    },
    mar: {
      current: 1,
      max: 1
    },
    soc: {
      current: 1,
      max: 1
    },
    inst: {
      current: 1,
      max: 1
    },
    cou: {
      current: 1,
      max: 1
    },
    vig: {
      current: 1,
      max: 1
    }
  },
  talent: {
    athleticism: 1,
    agility: 1,
    cunning: 1,
    leadership: 1,
    sorcery: 0
  },
  knowledge: {
    admin: 1,
    cult_race: 1,
    monst: 1,
    nobil: 1,
    sorc_mist: 1,
    wild_surv: 1
  },
  combat_mod: {
    melee: 0,
    range: 0,
    armor: 0
  },
  equipment: {
    melee_weapon: {
      name: "none",
      type: "none",
      french: {
        un_une: "",
        le_la: "",
        son_sa: ""
      },
      stat: {
        melee: 0,
        range: 0,
        armor: 0
      }
    },
    range_weapon: {
      name: "none",
      type: "none",
      french: {
        un_une: "",
        le_la: "",
        son_sa: ""
      },
      stat: {
        melee: 0,
        range: 0,
        armor: 0
      }
    },
    armor: {
      name: "none",
      type: "none",
      french: {
        un_une: "",
        le_la: "",
        son_sa: ""
      },
      stat: {
        melee: 0,
        range: 0,
        armor: 0
      }
    },
    shield: {
      name: "none",
      type: "none",
      french: {
        un_une: "",
        le_la: "",
        son_sa: ""
      },
      stat: {
        melee: 0,
        range: 0,
        armor: 0
      }
    },
    misc: {
      rope: 2,
      arrow: 10
    }
  },
  decisions: {},
  touch: 0
}

var milicia = {
  touch: 0,
  combat_mod: {
    melee: 1,
    range: 0,
    armor: 0
  }
}

var piodan = {
  touch: 0,
  combat_mod: {
    melee: 1,
    range: 1,
    armor: 2
  }
}

document.getElementById("nom_hero").innerHTML = Majaïn.name
assign_equipment(Majaïn, scale_armor)
assign_equipment(Majaïn, saber)
assign_equipment(Majaïn, shortbow)
console.log(Majaïn);
