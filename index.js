const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes.js');

function questions() {
    inquirer.prompt([
        {
            message: 'What do you want your logo to say?',
            name: 'logoText',
            validate: function(logoText){
                if (logoText.length < 4) {
                    return true;
                } else {
                    return 'Error: Logo cannot be more than 3 characters.';
                }
            }
        },
        {
            message: 'What shape do you want the logo to be?',
            type: 'list',
            choices: ['circle', 'square', 'triangle'],
            name: 'shape'
        },
        {
            message: 'What color do you want the text to be?',
            name: 'textColor'
        },
        {
            message: 'What color do you want the logo to be?',
            name: 'shapeColor'
        }
    ]).then((response) => {
        const logo = generateLogo(response);
        const logoString = logo.toString();
        fs.writeFile('logo.svg', logoString, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Logo created!');
            }
        });
    });
}
questions();


function generateLogo(response) {
    let shape;
    if (response.shape === 'circle') {
        shape = new Circle(response);
    } else if (response.shape === 'square') {
        shape = new Square(response);
    } else if (response.shape === 'triangle') {
        shape = new Triangle(response);
    }
    console.log(shape);
    return shape;
}