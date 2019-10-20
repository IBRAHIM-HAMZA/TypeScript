import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';

var numbercollection = new NumberCollection([1, -3, 4, 0, -23, 3, -6, 0.9]);
var sorter = new Sorter(numbercollection);
sorter.sort();

console.log(sorter.collection);

// document.getElementById('sorter').innerHTML = sorter.collection.toString();
