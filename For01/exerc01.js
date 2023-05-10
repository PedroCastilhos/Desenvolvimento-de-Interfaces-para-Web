const prompt = require('prompt-sync')();

const produto = prompt('Nome do produto: ');
const price = Number(prompt('Valor do produto: '));

console.log(`As parcelas do(a) ${produto} ficará da seguinte forma:`);

for (let i = 1; i <= 10; i++) {
  console.log(`Parcela ${i}: ${(price / i).toFixed(2)}`);
}
