function $(x) { return document.getElementById(x); }

// select a random integer with a min and max included
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// select a random property from a Javascript object
var randomProperty = function (obj) {
  var keys = Object.keys(obj);
  return obj[keys[keys.length * Math.random() << 0]];
};

// Gets a random value from an array and returns it
var randomFromArray = function (array) {
  return array[Math.floor(array.length * Math.random())];
}

/* Roll some dice
number is the number of dice to roll
faces is the number of faces on each dice
ie: rollDice(2, 8) is equivalent to 2d8
*/
var rollDice = function (number, faces) {
  // Start with a result of 0
  var result = 0;
  // For each dice
  for (var i = 0; i < number; i++) {
    result += Math.ceil(Math.random() * faces);
  }
  return result
}

// Gets a random value from a hash and returns an array containing the key and value
var randomFromHash = function (hash) {
  // Get the list of keys
  var keys = Object.keys(hash);
  // Pick one at random
  var key = keys[Math.floor(keys.length * Math.random())];
  // Return the key and it's value
  return [key, hash[key]];
}

// Simple function to get the unique parts of an array.
var uniq = function (a) {
  var seen = {};
  return a.filter(function (item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}

var capitalize = function (string) {
  return string.replace(/^./, string[0].toUpperCase());
}

function replaceExpr(string) {
  var nb_expression_to_replace = 1;
  while (nb_expression_to_replace == 1) {
    if (string.search("##") == -1) {
      nb_expression_to_replace = 0;
    } else {
      var current_group = string.match(/##(.*?)##/);
      // console.log(current_group)
      var choices = current_group[1].match(/([^,]+)/g)
      // console.log(choices);
      var rand_value = randomFromArray(choices)
      // console.log(rand_value);
      string = string.replace(current_group[0], rand_value)
    };
  };
  return string;
};

function display_equipment() {
  if (document.getElementById("g_equipment").style.display == "block") {
    document.getElementById("g_equipment").style.display = "none";
    document.getElementById("g_main_attr").style.display = "block";
    document.getElementById("g_sec_attr").style.display = "block";
    document.getElementById("g_talent").style.display = "block";
    document.getElementById("g_knowledge").style.display = "block";
    document.getElementById("g_combat_stat").style.display = "block";
    document.getElementById("g_morality").style.display = "block";
  } else {
    document.getElementById("g_main_attr").style.display = "none";
    document.getElementById("g_sec_attr").style.display = "none";
    document.getElementById("g_talent").style.display = "none";
    document.getElementById("g_knowledge").style.display = "none";
    document.getElementById("g_combat_stat").style.display = "none";
    document.getElementById("g_morality").style.display = "none";
    document.getElementById("g_equipment").style.display = "block";
  }
}

function roll_check_dice() {
  const dice = [...document.querySelectorAll(".die-list")];
  dice.forEach(die => {
    toggleClasses(die);
    var rand_nb = randomIntFromInterval(1, 6);
    die.dataset.roll = rand_nb
  });
  return [dice[0].dataset.roll, dice[1].dataset.roll, dice[2].dataset.roll]
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeCheck(att_tal_CK, diff_check) {
  var x = document.getElementById("myAudio");
  x.play()
  var nb_rolled = roll_check_dice();
  var results = [];
  for (i = 0; i <= 2; i++) {
    if (nb_rolled[i] <= att_tal_CK[i]) {
      results.push(1);
    } else {
      results.push(0)
    }
  }
  if ((results[0] + results[1] + results[2]) >= diff_check) {
    return true
  } else {
    return false
  }
}

/* Code to test function with the associated button */

document.getElementById("roll-button").addEventListener("click", test_roll);

function test_roll() {
  makeCheck([1, 2, 3], 2)
}

