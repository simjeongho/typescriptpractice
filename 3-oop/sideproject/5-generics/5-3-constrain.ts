{
    interface Employee {
        pay() : void;

    }

    class FullTimeEmployee implements Employee
    {
        pay()
        {
            console.log('full time!');
        }
        workFullTime()
        {

        }
    }

    class partTimeEmployee implements Employee
    {
        pay()
        {
            console.log('part Time!!');
        }
        workPartTime()
        {

        }
    }
    //세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 좋지 않다.
    function payBad(employee : Employee) : Employee
    {
        employee.pay();
        return employee;
    }

    function pay<T extends Employee>(employee : T) : T{
        employee.pay();
        return employee;
    }
    const jeongho = new FullTimeEmployee();
    const minyeong = new partTimeEmployee();
    jeongho.workFullTime();
    minyeong.workPartTime();

    const jeonghoafterPay = payBad(jeongho); // Employee를 리턴하기 때문에 interface에 존재 하지 않는 workFullTime함수는 사라지게 된다. 
    const minyeongafterpay = payBad(minyeong);// 세부 클래스의 정보를 잃어버리게 된다. as 키워드를 사용하면 가능하긴 하나 권장하지 않는다. 
}