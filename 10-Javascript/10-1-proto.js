const x = {};
const y = {};
console.log(x);
console.log(y);

console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array); // Object라는 proto를 상속

function CoffeeMachine(beans) {
    this.beans = beans;
    //instance memver level
    // this.makeCoffee = (shots) =>{
    //     console.log('making ... ☕');
    // }

    this.fillCoffee = function fillCoffee (shot)
    {
        console.log(`fill coffee ☕`);
    }
}
CoffeeMachine.prototype.makeCoffee = (shots) =>
{
    console.log('making ... ☕');
}
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(10);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk)
{
    this.milk = milk;

}
latteMachine.prototype = Object.create(CoffeeMachine.prototype);//프로토 타입을 이용하여 자바스크립트에서도 상속을 할 수 있다.
const latteMachine = new LatteMachine(123);
console.log(latteMachine);