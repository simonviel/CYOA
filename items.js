var none = {
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
}

var longsword = {
  name: "épée longue",
  type: "melee",
  french: {
    un_une: "une",
    le_la: "l'",
    son_sa: "son"
  },
  stat: {
    melee: 1,
    range: 0,
    armor: 0
  }
}

var saber = {
  name: "sabre",
  type: "melee",
  french: {
    un_une: "un",
    le_la: "le",
    son_sa: "son"
  },
  stat: {
    melee: 1,
    range: 0,
    armor: 0
  }
}

var shortbow = {
  name: "arc court",
  type: "range",
  french: {
    un_une: "un",
    le_la: "l'",
    son_sa: "son"
  },
  stat: {
    melee: 0,
    range: 1,
    armor: 0
  }
}

var scale_armor = {
  name: "armure d'écailles",
  type: "armor",
  armor_type: "medium",
  french: {
    un_une: "une",
    le_la: "l'",
    son_sa: "son"
  },
  stat: {
    melee: 0,
    range: 0,
    armor: 2
  }
}

var buckler = {
  name: "bocle",
  type: "shield",
  french: {
    un_une: "un",
    le_la: "le",
    son_sa: "son"
  },
  stat: {
    melee: 0,
    range: 0,
    armor: 1
  }
}

function assign_equipment(character,item,category) {
  switch (item.type) {
    case "melee":
      character.equipment.melee_weapon = item
      character.combat_mod.melee += item.stat.melee
      character.combat_mod.range += item.stat.range
      character.combat_mod.armor += item.stat.armor
      break;
    case "range":
      character.equipment.range_weapon = item
      character.combat_mod.melee += item.stat.melee
      character.combat_mod.range += item.stat.range
      character.combat_mod.armor += item.stat.armor
      break;
    case "armor":
      character.equipment.armor = item
      character.combat_mod.melee += item.stat.melee
      character.combat_mod.range += item.stat.range
      character.combat_mod.armor += item.stat.armor
      break;
    case "shield":
      character.equipment.shield = item
      character.combat_mod.melee += item.stat.melee
      character.combat_mod.range += item.stat.range
      character.combat_mod.armor += item.stat.armor
      break;
    case "none":
      switch (category) {
        case "melee":
          if (character.equipment.melee_weapon.type != "none") {
            character.combat_mod.melee -= character.equipment.melee_weapon.stat.melee
          }else {
            character.combat_mod.melee += item.stat.melee
          }
          break;
        case "range":
          if (character.equipment.range_weapon.type != "none") {
            character.combat_mod.range -= character.equipment.range_weapon.stat.range
          }else {
            character.combat_mod.range += item.stat.range
          }
          break;
        case "armor":
          if (character.equipment.armor.type != "none") {
            character.combat_mod.armor -= character.equipment.armor.stat.armor
          }else {
            character.combat_mod.armor += item.stat.armor
          }
          break;
        case "shield":
          if (character.equipment.shield.type != "none") {
            alert("chu rentré")
            character.combat_mod.armor -= character.equipment.shield.stat.armor
          }else {
            character.combat_mod.armor += item.stat.armor
          }
          break;
      }
      character.equipment[category] = item
      break;
  }
}
