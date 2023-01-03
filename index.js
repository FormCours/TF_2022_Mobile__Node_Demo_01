// Module externe -> Necessite "npm install ..."
const chalk = require('chalk');

// Module interne
const math = require('./modules/math');

// App
console.log('Rappel Node JS');
console.log(chalk.cyan('Pause de midi 🍔'));

const res1 = math.addition(1, '1');
console.log(`Resultat 1 : ${res1}`);

const res2 = math.addition(22, 20);
console.log(`Resultat 2 : ${res2}`);