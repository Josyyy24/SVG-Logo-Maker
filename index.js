const inquirer = require('inquirer');
const fs = require('fs');
const colorNames = require('color-names');

// shapes
const { Circle } = require('./lib/shapes');
const { Square } = require('./lib/shapes');
const { Triangle } = require('./lib/shapes');

// Colors
const validateColor = (input) => {
    let hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (input.match(hexRegex) || colorNames.includes(input.toLowerCase())){
        return true;
    } else {
        return 'Invalid color';
    }
};

const validateInitials = (input) => {    
    if (input.length !== 3) {
        return true;
    } else {
        return 'Initials must be 3 characters long';
    }
};

// Questions

const questions = [
    {
        type: 'input',
        name: 'initials',
        message: 'Enter your initials (3 characters)',
        validate: validateInitials
    },
    {
        type: 'input',
        name: 'backgroundColor',
        message: 'Enter a color for the background',
        validate: validateColor
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for the text',
        validate: validateColor
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape',
        choices: ['Circle', 'Square', 'Triangle']
    }
];

// function to generate answers
function generateLogo(answers) {
if (answers.logoshape == 'Circle') {
    const circle = new Circle(answers);
    const svgString = circle.render(answers);
    fs.writeFileSync('logo.svg', svgString, ()=> console.log('Generated logo.svg'));
}

if (answers.logoshape == 'Square') {
    const square = new Square(answers);
    const svgString = square.render(answers);
    fs.writeFileSync('logo.svg', svgString, ()=> console.log('Generated logo.svg'));
}

if (answers.logoshape == 'Triangle') {
    const triangle = new Triangle(answers);
    const svgString = triangle.render(answers);
    fs.writeFileSync('logo.svg', svgString, ()=> console.log('Generated logo.svg'));
}

function init() {
    inquirer.prompt(questions).then(answers => {
        generateLogo(answers);
        console.log('Generating logo...');
    })
    }
};

init();