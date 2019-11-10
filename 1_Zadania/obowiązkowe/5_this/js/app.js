const Car = {
    brand : 'BMW',
    color : 'Silver',
    numberOfKilometers : 0,

    printCarInfo: function() {
        return this.color+' '+this.brand+', '+this.numberOfKilometers+'km';
    },

    drive: function(km) {
        if (km > 0)
            this.numberOfKilometers += km;
    }
}

console.log(Car.printCarInfo());
Car.drive(20);
console.log(Car.printCarInfo());

//// zadanie 1
Car.list = [
    '2016.05.05',
    '2017.04.02',
    '2018.04.05'
];

Car.appendList = function(date) {
    this.list.push(date);
}

Car.allList = function() {
    return this.list;
}

Car.appendList('2019.05.06');
console.log(Car.allList());

//// zadanie 3
const Stairs = {
    step : 0,

    up: function() {
        this.step++;
    },

    down: function() {
        this.step--;
    },

    printStep: function() {
        console.log(this.step);
    }
}

Stairs.up();
Stairs.up();
Stairs.up();
Stairs.down();
Stairs.printStep();