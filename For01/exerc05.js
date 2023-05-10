const prompt = require('prompt-sync')();

const word = prompt('Palavra: ');
const num = Number(prompt('Número: '));

console.log(`Palavra: ${word}`);
console.log(`Número: ${num}`);

for (let i = 0; i < num; i++) {
  console.log(`*`);
  console.log(word);
}
