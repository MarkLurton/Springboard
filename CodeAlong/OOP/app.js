function getHypotneuse(a,b) {
    return Math.sqrt( a ** 2 + b ** 2);
}
function getArea(a, b) {
    return a * b / 2;
}

// const side1 = 4;
// const side2 = 3;
// const side3 = getHypotenuse(side1, side2);
// const area = getArea(side1, side2)

let rightTriangle = {
    a: 3,
    b: 4,
    getArea() {
        return (this.a * this.b) / 2;
    },
    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b **2);
    },
    printThis() {
        console.log(this);
    }
};


// function Triangle(a, b) {
//     this.a = a;
//     this.b = b;
// }
// Triangle.prototype.getArea = function() {
//     return this.a * this.b / 2;
// };
// Triangle.prototype.getHypotenuse = function() {
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
// };

// Triangle(3, 4); // Returns Undefined!
// const t1 = new Triangle(3,4)

// Array.prototype.push = function(val) {
//     console.log(`Oh? You want to add ${val}?`)
//     console.log("Nah. I don't really feeeeeel like it.")
// }

// ----------------------------------- //
//              Classes                //
// ----------------------------------- //

class Triangle{
    constructor(a, b, c) {
        for (let num of [a, b, c]) {
            if (!Number.isFinite(num) || num <= 0) {
                console.log('Invalid Side!');
                throw new Error('Sides must be positive numbers.')
            }
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    greet() {
        return 'Hello From Triangle!!!';
    }
    display() {
        return `Triangle with sides of ${this.a}, ${this.b}, and ${this.c}.`
    }
    getArea() {
        const { a, b, c } = this;
        const s = (a + b + c) / 2;
        return Math.sqrt(s * (s-a) * (s - b) * (s-c));
    }
    isBig() {
        return this.getArea() > 50;
    }
}

// ----------------------------------- //
//       Inheritance & Super           //
// ----------------------------------- //

class RightTriangle extends Triangle {
    constructor(a, b, c) {
        if (a * a + b * b !== c * c) {
            throw new Error('Invalid hypotenuse!');
        }
    super(a, b, c);
    this.hypot = c;
    }
    isRightTriangle() {
        return true;
    }
    display() {
        return 'Right ' + super.display();
    }
}