'use strict';

//Класс допы к гамбургеру: специи и ингридиенты
class Addition {
    constructor (name, price, cal) {
        this.name = name;
        this.price = price;
        this.cal = cal;
    }    
}

//Класс ингридиент, унаследованный от допов
class Ingridiet extends Addition{
    constructor (name, price = 0, cal = 0) {
        super(name, price, cal);
    }
}

//Класс специи, унаследованный от ингридиентов
class Spice extends Addition{
    constructor (name, price = 0, cal = 0) {
        super(name, price, cal);
    }
}

class SizeOfHamburger {
    constructor(name, price, cal) {
         this.name = name;
         this.price = price;
         this.cal = cal;
    }
}

class Hamburger {
    constructor(size, ingridiet) {
        this.ingridiet = ingridiet;
        this.size = size;
        this.spices = [];
        calculateAll();
    }

    calcPrice() {
        this.price = this.size.price + this.ingridiet.price;
        this.spices.forEach(item => this.price += item.price);
    }

    calcCal() {
        this.cal = this.size.cal + this.ingridiet.cal;
        this.spices.forEach(item => this.cal += item.cal);
    }

    calculateAll() {
        calcPrice();
        calcCal();        
    }

    addSpice(spice) {
        this.spices.push(spice);
        calculateAll();
    }

}

const cheese = new Ingridiet('Сыр', 10, 20);
const salad = new Ingridiet('Салат', 20, 5);
const potato = new Ingridiet('Картофель', 10, 20);

const smallSize = new SizeOfHamburger('Маленький', 50, 20);
const bigSize = new SizeOfHamburger('Большой', 100, 40);

const spice1 = new Spice("Специи", 15);
const mayonnaise = new Spice("Майонез", 20, 5);

myBurger = new Hamburger(bigSize, salad);
myBurger.addSpice()


