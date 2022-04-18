"use strict";
var elements = [
  ["Aluminum", "Al"],
  ["Barium", "Ba"],
  ["Cadmium", "Cd"],
  ["Fluorine", "F"],
  ["Helium", "He"],
  ["Iron", "Fe"],
  ["Magnesium", "Mg"],
  ["Nickel", "Ni"],
  ["Potassium", "K"],
  ["Sulfur", "S"],
  ["Argon", "Ar"],
  ["Boron", "B"],
  ["Carbon", "C"],
  ["Cobalt", "Co"],
  ["Copper", "Cu"],
  ["Lead", "Pb"],
  ["Manganese", "Mn"],
  ["Neon", "Ne"],
  ["Oxygen", "O"],
  ["Silicon", "Si"],
  ["Arsenic", "As"],
  ["Bromine", "Br"],
  ["Chlorine", "Cl"],
  ["Chromium", "Cr"],
  ["Gold", "Au"],
  ["Hydrogen", "H"],
  ["Iodine", "I"],
  ["Lithium", "Li"],
  ["Nitrogen", "N"],
  ["Phosphorus", "P"],
  ["Beryllium", "Be"],
  ["Calcium", "Ca"],
  ["Cesium", "Cs"],
  ["Mercury", "Hg"][("Platinum", "Pt")],
  ["Silver", "Ag"],
  ["Sodium", "Na"],
  ["Strontium", "Sr"],
  ["Tin", "Sn"],
  ["Zinc", "Zn"],
];
var ions = [
  ["Ammonium", "NH4 +1"],
  ["Acetate", "C2H3O2 -1"],
  ["Bicarbonate", "HCO3 -1"],
  ["Bromate", "BrO3 -1"],
  ["Chlorate", "ClO3 -1"],
  ["Cyanide", "CN -1"],
  ["Hydroxide", "OH -1"],
  ["Iodate", "IO3 -1"],
  ["Nitrate", "NO3 -1"],
  ["Permanganate", "MnO4 -1"],
  ["Carbonate", "CO3 -2"],
  ["Chromate", "CrO4 -2"],
  ["Dichromate", "Cr2O7 -2"],
  ["Oxalate", "C2O4 -2"],
  ["Sulfate", "SO4 -2"],
  ["Phosphate", "PO4 -3"],
];
const randomNum = function getRandomNum(max) {
  return Math.floor(Math.random() * max);
};
var startbutton = document.getElementById("startbutton");
var elementQuestions = document.getElementsByClassName("chemQuestions");
startbutton.addEventListener("click", function () {
  document.getElementById("mainFirst").style.display = "none";
  getRandomQuestions();
});
function getRandomQuestions() {
  //make sure elements[randomNum(40)] or ion is not undefined
  // elementQuestions[i].innerHTML need this later
  for (var i = 0; i < elementQuestions.length; i++) {
    var element = elements[randomNum(40)];
    var ion = ions[randomNum(16)];
    if (element !== undefined && ion !== undefined) {
      randomizeElementAndIons(element, ion, i);
    } else {
      checkQuestionsIfDefined(i);
    }
  }
}
function checkQuestionsIfDefined(index) {
  if (elementQuestions[index].innerHTML == "") {
    getRandomQuestions();
  }
}
function randomizeElementAndIons(element, ion, index) {
  if (index < 5) {
    elementQuestions[index].innerHTML = element[0];
  } else if (index >= 5 && index < 10) {
    elementQuestions[index].innerHTML = element[1];
  } else if (index === 10) {
    elementQuestions[index].innerHTML = ion[0];
  } else {
    elementQuestions[index].innerHTML = ion[1];
  }
}
function checkAnswers() {
  for (var i = 0; i < elementQuestions.length; i++) {
    if (i < 5) {
    } else if (i >= 5 && i < 10) {
    } else if (i === 10) {
    } else {
    }
  }
}
function compareAnswers(index, answer) {}
