const prompt = require('prompt-sync')();

const num = Number(prompt('Escolha um número: '));

console.log('Os 10 números seguintes a ele são: ');

for (let i = 1; i <= 10; i++) {
  console.log(num + i);
}
