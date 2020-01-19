const Calculator = {
    tab : [],

    // konstruktor
    Calculator : function() {
        this.tab.clear();
    }
}

Calculator.prototype.add = function(num1, num2) {
    let res = num1 + num2;
    this.tab.push("added "+num1+" to "+num2+" got "+res);
    return res;
}

Calculator.prototype.multiply = function(num1, num2) {
    let res = num1*num2;
    this.tab.push("multiplied "+num1+" with "+num2+" got "+res);
    return res;
}

Calculator.prototype.subtract = function(num1, num2) {
    let res = num1-num2;
    this.tab.push("subtracted "+num1+" from "+num2+" got "+res);
    return res;
}

Calculator.prototype.divide = function(num1, num2) {
    let res = num1/num2;
    this.tab.push("divided "+num1+" by "+num2+" got "+res);
    return res;
}

Calculator.prototype.printOperations = function() {
    for (let i =0; i < this.tab.length; i++) {
        console.log(this.tab[i]);
    }
}

Calculator.prototype.clearOperations = function() {
    this.tab.clear();
}