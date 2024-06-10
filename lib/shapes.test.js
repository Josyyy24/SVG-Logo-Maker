// This file is for the Jest tests for the shapes library
const { Circle, Square, Triangle } = require('./shapes.js');

const generateFunction = require('/index.js');

describe('Circle', () => {
    it('should return a string', () => {
        const backgroundColor = 'lightgrey';
        const initials = 'EJN';
        const textColor = 'green';
        const circle = new Circle(backgroundColor, textColor, initials);
        
        const expectedSVGString = `
        <svg version="1.1"
        height="100" width="100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="green" stroke-width="3" fill="lightgrey">
        </svg>
        `

        const actualSVGString = circle.render();

        expect(expectedSVGString).toEqual(actualSVGString);
    });
});

describe('Square', () => {
    it('should return a string', () => {
        const backgroundColor = 'lightgrey';
        const initials = 'EJN';
        const textColor = 'green';
        const square = new Square(backgroundColor, textColor, initials);
        
        const expectedSVGString = `
        <svg version="1.1"
        height="100" width="100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" stroke="green" stroke-width="3" fill="lightgrey">
        </svg>
        `

        const actualSVGString = square.render();

        expect(expectedSVGString).toEqual(actualSVGString);
    });
});

describe('Triangle', () => {
    it('should return a string', () => {
        const backgroundColor = 'lightgrey';
        const initials = 'EJN';
        const textColor = 'green';
        const triangle = new Triangle(backgroundColor, textColor, initials);
        
        const expectedSVGString = `
        <svg version="1.1"
        height="100" width="100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,0 100,100 0,100" stroke="green" stroke-width="3" fill="lightgrey">
        </svg>
        `

        const actualSVGString = triangle.render();

        expect(expectedSVGString).toEqual(actualSVGString);
    });
});