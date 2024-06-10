// This file is for exportingg all the shapes that are available in the library
class Shape {
    constructor(backgroundColor, textColor, initials) {
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
        this.initials = initials;
    }
};

class Circle extends Shape {
    constructor(backgroundColor, textColor, initials) {
        super(backgroundColor, textColor, initials)
    };
    render() {
        return `<svg height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="${this.textColor}" stroke-width="3" fill="${this.backgroundColor}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.initials}</text>
        </svg>`
    };
};

class Square extends Shape {
    constructor(backgroundColor, textColor, initials) {
        super(backgroundColor, textColor, initials)
    };
    render() {
        return `<svg height="100" width="100">
        <rect width="100" height="100" stroke="${this.textColor}" stroke-width="3" fill="${this.backgroundColor}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.initials}</text>
        </svg>`
    };
}

class Triangle extends Shape {
    constructor(backgroundColor, textColor, initials) {
        super(backgroundColor, textColor, initials)
    };
    render() {
        return `<svg height="100" width="100">
        <polygon points="50,0 100,100 0,100" stroke="${this.textColor}" stroke-width="3" fill="${this.backgroundColor}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.initials}</text>
        </svg>`
    };
};

module.exports = { Circle, Square, Triangle };