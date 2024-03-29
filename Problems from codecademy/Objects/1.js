/* let person = {
    firstName: 'John',
    lastName: 'Doe'
};

person.greet = function (){
    console.log('Hello');
}

person.greet(); */

/* let person = {
    firstName: 10,
    lastName: 20,
    greet: function () {
        console.log('Hello, World!');
    },
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person.getFullName()); */

// let spaceship = {
//     'Fuel Type': 'Turbo Fuel',
//     'Active Duty': true,
//     homePlanet: 'Earth',
//     numCrew: 5
// };

// console.log(spaceship["Fuel Type"]);
// console.log(spaceship.homePlanet);
// console.log(spaceship["Active Duty"]);

/* const alienShip = {
    invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
};

alienShip.invade(); */

/* const spaceship = {
    telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') }
        }
    },
    engine: {
        model: 'Nimbus2000'
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: 'HD'
        },
        'back-up': {
            battery: 'Lithium',
            terabytes: 50
        }
    }
}; 
console.log(spaceship.nanoelectronics.computer.terabytes);
console.log(spaceship.nanoelectronics['back-up'].terabytes); */

/* 
let spaceship = {
    homePlanet: 'Earth',
    color: 'red'
};
let tryReassignment = obj => {
    obj = {
        identified: false,
        'transport type': 'flying'
    }
    console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}

};
tryReassignment(spaceship) // The attempt at reassignment does not work.
spaceship // Still returns {homePlanet : 'Earth', color : 'red'};

spaceship = {
    identified: false,
    'transport type': 'flying'
}; // Regular reassignment still works. */


/* Looping through objects */
/* let spaceship = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() { console.log('You got this!') }
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() { console.log('I agree, captain!') }
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() { console.log(`Jets on!`) }
        },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() { console.log('The tank is full!') }
        }
    }
};

// for...in
for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
} */



/* let healthy = {
    _name: 'Halley',
    _behavior: 0,

    get Petname(){
        return this._name;
    },
    get behavior(){
        return this.behavior;
    },
    incrementBehavior(){
        this.behavior++;
    }
}

console.log(healthy.Petname); */


/* class Dog {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }
    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior++;
    }
}

const halley = new Dog('Halley');
const niloy = new Dog('Niloy');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console

console.log(niloy._name);
console.log(niloy._behavior); */



class Dog {
    constructor(name) {
        this.name = name;
        this.behavior = 0;
    }
}

const halley = new Dog('Halley'); // Create new Dog instance
console.log(halley.name)
console.log(halley.behavior)