function Basket() {
    this.products = [];
    this.sum = 0;
}

Basket.prototype.addProduct = function(productName, productPrice) {
    this.products.push({
        productName, productPrice
    });
    this.sum += productPrice;
}

Basket.prototype.showBasket = function() {
    for (let i = 0; i < this.products.length; i++) {
        console.log(this.products[i].productName+' - '+this.products[i].productPrice);
    }
    console.log('Do zapłaty: '+this.sum);
}




basket = new Basket();
basket.addProduct('Tatra mocna', 2.00);
basket.addProduct('Harnaś', 1.89);
basket.addProduct('Wojak', 1.79);
basket.showBasket();