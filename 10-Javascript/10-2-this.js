console.log(this); //window가 출력됨

function simpleFunc()
{
    console.log(this);
}
simpleFunc(); // 글로벌 함수이기 때문에 window가 출력됨

class Counter{
    count = 0;
    increase = function()
    {
        console.log(this);
    } // arrow function을 이용하면 bind를 사용하지 않아도 연결이 되어있음 
}
const counter= new Counter;
counter.increase(); //여기서는 class안에 있으므로 counter가 출력됨
//const caller = counter.increase;
const caller = counter.increase.bind(counter); // this의 주체를 binding한다.
caller(); // undefined로 출력됨 원래는 increase의 this counter가 나와야하나 변수에 할당을 하여 this의 정보를 잃어버리게 되었다.
//let과 const로 선언한 변수는 window에 등록되어 있지 않으므로 undefined로 표시된다.
//var로 선언하면 window에 등록이 된다. 재정의 hoisting이 된다. 

class Bob {

}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob자체가 출력됨 이 함수를 Bob이 불렀기 때문이다. 

