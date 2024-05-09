const { Circle, Square, Triangle } = require('./shapes.js');

describe('Shapes', () => {
    describe('Circle', () => {
        it('should return a string with the dimentions of the circle and selected color', () => {
            const circle = new Circle({ shapeColor: '' });
            circle.setColor('blue');
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
            console.log(circle.render());
        });
    });

    describe('Triangle', () => {
        it('should return a string with the dimentions of the triangle and selected color', () => {
            const triangle = new Triangle({ shapeColor: '' });
            triangle.setColor('blue');
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
            console.log(triangle.render());
        });
    });

    describe('Square', () => {
        it('should return a string with the dimentions of the square and selected color', () => {
            const square = new Square({ shapeColor: '' });
            square.setColor('blue');
            expect(square.render()).toEqual('<rect x="50" y="50" width="225" height="125" fill="blue"/>');
            console.log(square.render());
        });
    });
});