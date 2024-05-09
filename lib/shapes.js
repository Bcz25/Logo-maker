
class Circle {
    constructor(response){
        this.response = response
    } 
    toString(){
        return`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.response.shapeColor}" />
            <text x="150" y="125" font-size="30" text-anchor="middle" fill="${this.response.textColor}">${this.response.logoText}</text>
        </svg>
        `;
    }
}

class Triangle {
    constructor(response){
        this.response = response
    } 
    toString(){
        return`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,20 100,180 200,180" fill="${this.response.shapeColor}" />
            <text x="150" y="125" font-size="30" text-anchor="middle" fill="${this.response.textColor}">${this.response.logoText}</text>
        </svg>
        `;
    }
}

class Square {
    constructor(response){
        this.response = response
    } 
    toString(){
        return`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="200" height="100" fill="${this.response.shapeColor}" />
            <text x="150" y="125" font-size="30" text-anchor="middle" fill="${this.response.textColor}">${this.response.logoText}</text>
        </svg>
        `;
    }
}

module.exports = { Circle, Triangle, Square}