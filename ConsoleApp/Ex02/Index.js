const prompt = require('prompt-sync')({ sigint: true });

const quiz = [
  { question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
  { question: 'How many continents are there on Earth?',              answer: '7'       },
  { question: 'What programming language is primarily used for styling web pages?', answer: 'CSS' },
];
let userCorretAnswers = 0;

for (let i = 0; i < quiz.length; i++) 
{
  const { question, answer } = quiz[i];
  const userAns = prompt(`${question} `);  
  
  if(userAns.trim().toLowerCase() === answer.toLowerCase())
  {
    userCorretAnswers ++;
  }
}

console.log(`Final score: ${userCorretAnswers}/${quiz.length} correct!`);