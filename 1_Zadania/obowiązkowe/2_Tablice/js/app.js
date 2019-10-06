function distFromAvarage(tab) {
    let avg = 0, sum = 0;
    for (let i = 0; i < tab.length; i++) {
        sum += tab[i];
    }
    avg = sum / tab.length;

    var t = new Array();
    for (let i = 0; i < tab.length; i++) {
        t.push(tab[i] - avg);
    }

    return t;
}

distFromAvarage([1, 2, 3, 4, 5, 6, 7]);