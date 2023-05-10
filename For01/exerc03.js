const prompt = require('prompt-sync')();

const num1 = Number(prompt('Escolha o primeiro número: '));
const num2 = Number(prompt('Escolha o segundo número: '));

console.log(`Do número ${num1} até o número ${num2} fica assim:`);

const dif = num2 - num1;

for (let i = 1; i <= dif; i++) {
  console.log(`${num1 + i}`);
}
