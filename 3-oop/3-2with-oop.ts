{
    type CoffeeCup = {
        shots:number;
        hasMilk: boolean;
    }
    class coffeeMaker
    {
        static BEANS_GRAMM_PER_SHOT: number = 7;//클래스 내부에서 선언되면 메모리 낭비가 될 수 있음 =>Static사용
        coffeeBeans: number = 0;
        constructor(coffeeBeans: number)
        {
            this.coffeeBeans = coffeeBeans;
        }
       static makeMachine(coffeeBeans:number): coffeeMaker{ // 클래스 레벨에서 활용하고 싶다면 static 키워드를 사용 오브젝트를 만들지 않아도 사용이 가능하다. 
            return new coffeeMaker(coffeeBeans);
        }
        makeCoffee(shots: number) : CoffeeCup
        {
            if(this.coffeeBeans < shots * coffeeMaker.BEANS_GRAMM_PER_SHOT)
            {
                throw new Error('Not enough coffee beans!');
            }
        
            this.coffeeBeans -= shots * coffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots : shots,
                hasMilk : false,
            }
        }

    }

    const maker = new coffeeMaker(32);
    console.log(maker);
    const makema = coffeeMaker.makeMachine(12);
}