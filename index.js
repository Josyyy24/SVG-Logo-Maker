const inquirer = require('inquirer');
const fs = require('fs');

// This is for the shapes
const { Circle } = require('./shapes/Circle');
const { Square } = require('./shapes/Square');
const { Triangle } = require('./shapes/Triangle');

// This is for the colors
const colorNames = require('color-names');

const validateColor = (input) => {
    if (!colorNames[input]) {
        return 'Color not found';
    }
    return true;
}

const validateInitials = (input) => {    
    if (input.length !== 3) {
        return 'Initials must be 3 characters long';
    }
    return true;
}

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
        name: 'color',
        message: 'Enter a color',
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
};

init();