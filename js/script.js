"use strict";

function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
};
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
};
Phone.prototype.discount = function() {
    if (this.price > 2000) {
        this.price = 0.5 * this.price
        console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the discount price is " + this.price + ".");
    } else {
        this.printInfo();
    };
};
Phone.prototype.gratis = function() {
    switch (this.brand) {
        case 'Samsung':
            console.log("For Samsung phone you get gratis powerbank");
            break;
        case 'Apple':
            console.log("For Apple phone you get gratis headphones");
            break;
        default:
            break;
    }
};
Phone.prototype.sell = function(installmentNumber) {
    if (installmentNumber != undefined) {
        var installmentAmount = (this.price * 1.1) / installmentNumber;
        console.log("For " + installmentNumber + " instalments, instalment amount is " + installmentAmount);
    }
    this.gratis();
    this.discount();
}
var iPhone6S = new Phone("Apple", 2250, "silver");
var GalaxyS6 = new Phone("Samsung", 1578, "red");
var OnePlus = new Phone("One", 1475, "blue");
var GalaxyS5 = new Phone("Samsung", 2741, "black");
iPhone6S.sell(5);
OnePlus.sell(2);
GalaxyS5.sell();
GalaxyS6.sell();