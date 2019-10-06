function distFromAvarage(tab) {
    let avg = 0, sum = 0;
    for (let i = 0; i < tab.length; i++) {
        sum += tab[i];
    }
    avg = sum / tab.length;

    var t = [];
    for (let i = 0; i < tab.length; i++) {
        t.push(tab[i] - avg);
    }

    return t;
}

distFromAvarage([1, 2, 3, 4, 5, 6, 7]);

//--------------------------------------------
// task 2
var fruits = [
    'Banan',
    'Jabłko',
    'Gruszka',
    'Śliwka',
    'Borowka'
];

console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//--------------------------------------------
// task 3
function printTable(tab) {
    for (let i = 0; i < tab.length; i++) {
        console.log(tab[i]);
    }
}

printTable([1, 3, 5, 7, 9]);

//---------------------------------------------
// task 4
function multiply(tab) {
    var m = 1;
    for (let i = 0; i < tab.length; i++) {
        m *= tab[i];
    }
    return m;
}

multiply([1,2,3,4,5,6,7]);

function getEvenAvarage(tab) {
    var sum = 0, counter = 0;
    for (let i = 0; i < tab.length; i++) {
        if (!(tab[i] % 2)) {
            sum += tab[i];
            counter++;
        }
    }

    return counter > 0 ? sum/counter : null;
}
getEvenAvarage([1,1,1,1]);
