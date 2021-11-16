const text = 'Whether its color or colour, it is all the same.The human eye can see a wide gamut of colours, which makes us unique as a species.';

const pattern = /colou?rs?/g;

console.log(pattern.exec(text)[0]);
console.log(pattern.exec(text)[0]);
console.log(pattern.exec(text)[0]);

let results;
while ((results = pattern.exec(text)) !== null)
{
 console.log(results[0]);
}

let pat = "Java";
let new_text = text.replace(pat, "JavaScript");
console.log(new_text);

// passing a regex as the first parameter
pat = /Java/;
new_text = text.replace(pat, "JavaScript");
console.log(new_text);

let languages = ["JavaScript", "Python", "C", "C++", "Java"];

// slicing the array (from start to end)
let new_arr = languages.slice();
console.log(new_arr); // [ 'JavaScript', 'Python', 'C', 'C++', 'Java' ]

// slicing from the third element
let new_arr1 = languages.slice(2);
console.log(new_arr1); // [ 'C', 'C++', 'Java' ]

// slicing from the second element to fourth element
let new_arr2 = languages.slice(1, 4);
console.log(new_arr2); // [ 'Python', 'C', 'C++' ]


