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

// ----------------------------------- //
//                This                 //
// ----------------------------------- //
const blue = {
    name  : 'Blue',
    breed: 'Scottish Fold',
    dance(dance) {
        console.log('THIS IS: ', this);
        console.log(`Meow, I am ${this.name} and I like to ${dance}`);
    },
    play(...toys) {
        for (let toy of toys) {
            console.log(`${this.name} plays with ${toy}`)
        }
    },
    greet() {
        alert(`${this.name} SAYS MEOW!`)
    }
}

// cat.dance('salsa')
// const bluesDance = cat.dance;
// bluesDance('salsa');

// function whatIsThis() {
//     console.log('this = ', this);
// }

// const myObj = {
//     func  : whatIsThis,
//     color : 'purplel'
// };

// class Cat {
//     constructor(name, breed) {
//         this.name = name;
//         this.breed = breed;
//     }
//     dance(danceType) {
//         console.log('THIS IS: ', this);
//         console.log(`Meow, I am a ${this.breed} and I like to ${danceType}`);
//     }
// }

// const rocket = new Cat('rocket', 'tabby');
// rocket.dance('tango');
// const rocketDance = rocket.dance;
// rocketDance('tango');

// ----------------------------------- //
//                Call                 //
// ----------------------------------- //

// const blueDance = blue.dance;
// // blueDance.call(cat, 'tango');

// const dog = {
//     breed : 'Black Lab',
//     name  : 'Elton'
// };

// blueDance.call(dog, 'hip hop dance');
// cat.play.call(dog, 'bone', 'my cat');

// ----------------------------------- //
//                Bind                 //
// ----------------------------------- //

// const rocket = {
//     name  : 'Rocket',
//     breed : 'Himalayan'
// };

// const bDance = blue.dance;
// let boundDance = bDance.bind(blue);

// const rocketDance = blue.dance.bind(rocket);

// const dog2 = {
//     name  : 'Tyson',
//     breed : 'Mini Aussie',
//     dance : rocketDance
// }

// ----------------------------------- //
//          Binding Arguments          //
// ----------------------------------- //

// const blueDisco = blue.dance.bind(blue, 'disco');
// const playsWithSocks = blue.play.bind(blue, 'left sock', 'right sock');

// function applySalesTax(taxRate, price) {
//     return price + price * taxRate;
// }

// const applyCATax = applySalesTax.bind(null, 0.0725);
// const applyTXTax = applySalesTax.bind(null, 0.0625);

// const bobsMembership = {
//     name  : 'Bob',
//     total : 250
// }

// const jillsMembership = {
//     name  : 'Jill',
//     total : 899
// }

// function collectMonthlyFee(fee) {
//     const remaining = this.total - fee;
//     this.total = remaining;
//     return this.name + ' remaining balance: ' + remaining;
// }


// const collectBobsFee = collectMonthlyFee.bind(bobsMembership, 5);
// const collectJillsFee = collectMonthlyFee.bind(jillsMembership, 35);

// ----------------------------------- //
//          Binding Callbacks          //
// ----------------------------------- //

// document.querySelector('#btn-1').addEventListener('click', blue.greet.bind(blue));


// const btnA = document.querySelector("#a");
// const btnB = document.querySelector("#b");
// const btnC = document.querySelector("#c");

// function popUp(msg) {
//     alert('Secret message is ' + msg);
// }

// btnA.addEventListener('click', popUp.bind(null, 'Button A Says Hi'));
// btnB.addEventListener('click', popUp.bind(null, 'Button B Says Hi'));
// btnC.addEventListener('click', popUp.bind(null, 'Button C Says Hi'));

// ----------------------------------- //
//        Arrow Functions & This       //
// ----------------------------------- //

const greeter = {
    msg : 'I like chickenz',
    sayHi : () => {
        alert(this.msg);
    },
    // waitAndGreet: function(delay) {
    //     setTimeout(
    //         function() {
    //             alert(this.msg);
    //         }.bind(this), 
    //         delay
    //     )
    // }
    waitAndGreet: function(delay) {
        setTimeout(() => {
                alert(this.msg);
            }, delay
        );
    }
};