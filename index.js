const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo text:',
    validate: input => input.length <= 3 || 'Text must be up to 3 characters long.'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hexadecimal):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hexadecimal):',
  }
];

function generateSVG({ text, textColor, shape, shapeColor }) {
  let shapeElement;
  switch (shape) {
    case 'circle':
      shapeElement = new Circle();
      break;
    case 'triangle':
      shapeElement = new Triangle();
      break;
    case 'square':
      shapeElement = new Square();
      break;
  }
  shapeElement.setColor(shapeColor);

  const svg = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeElement.render()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
`;

  fs.writeFileSync('logo.svg', svg);
  console.log('Generated logo.svg');
}

inquirer.prompt(questions).then(answers => {
  generateSVG(answers);
});
