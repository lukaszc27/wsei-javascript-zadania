
/*
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

*/
var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34]
];

function checkArray(tab) {
    var t = [];
    for (let i = 0; i < tab.length; i++) {
        t[i] = [];
    }

    for (let y = 0; y < tab.length; y++) {
        for (let x = 0; x < tab[y].length; x++) {
            if (!(tab[y][x] % 2)) {
                t[y][x] = true;
            }
            else t[y][x] = false;
        }
    }
    return t;
}

checkArray(arr);