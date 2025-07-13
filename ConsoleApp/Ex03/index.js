// index.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(questionText) {
  return new Promise(resolve => {
    rl.question(questionText, answer => {
      resolve(answer.trim());
    });
  });
}

(async () => {
  console.log('=== User Registration ===\n');

  const name  = await ask('Name: ');
  const email = await ask('Email: ');
  const age   = await ask('Age: ');
  const color = await ask('Favorite Color: ');

  console.log('\nRegistration Summary:');
  console.log(`Name:           ${name}`);
  console.log(`Email:          ${email}`);
  console.log(`Age:            ${age}`);
  console.log(`Favorite Color: ${color}`);

  rl.close();
})();
