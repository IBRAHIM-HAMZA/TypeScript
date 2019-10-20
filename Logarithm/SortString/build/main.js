"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumberCollection_1 = require("./NumberCollection");
var numbercollection = new NumberCollection_1.NumberCollection([1, -3, 4, 0, -23, 3, -6, 0.9]);
var sorter = new Sorter_1.Sorter(numbercollection);
sorter.sort();
console.log(sorter.collection);
// document.getElementById('sorter').innerHTML = sorter.collection.toString();
