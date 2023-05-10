const prompt = require('prompt-sync')();

const num = Number(prompt('Número: '));

console.log(`Número: ${num}.`);

if (num >= 5) {
  for (let i = 1; i <= num; i++) {
    console.log(`${i} x ${num} = ${i * 5}`);
  }
} else {
  console.log(`Ops... Número deve ser maior ou igual a 5.`);
}
