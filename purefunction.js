//gaya imperatif
const names = ["harry", "potter", "benjamin"];

const newNamesWithExcMark = [];

for (i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);

// gaya deklaratif

const dekla = names.map((name) => `${name}!`);

console.log(dekla);
