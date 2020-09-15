'use strict'
//console.log('Here\'s a hidden message');
// This is a single-line comment

/* Here's a 
multi-line 
comment's goes at this position*/

console.log('Here\'s a hidden...');

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;

