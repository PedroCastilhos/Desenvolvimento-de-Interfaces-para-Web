const prompt = require('prompt-sync')();

const num = Number(prompt('Escolha um número: '));

console.log(`Número: ${num}`);
console.log(`Contagem regressiva: `);

for (let i = 0; num > i; i++) {
  console.log(`${num - i}`);
}

console.log(`Fogo!!`);
