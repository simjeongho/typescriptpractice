{
    type CoffeeCup = {
        shots:number;
        hasMilk: boolean;
    };
    interface coffeeMaker{
        makeCoffee(shots : number )  :CoffeeCup;
        //clean();
        fillCoffeeBeans(beans : number) : void;
        clean() : void;
        play():void
    }

    interface CommercialCoffeeMaker{
        makeCoffee(shouts:number) : CoffeeCup;
        fillCoffeeBeans(beans : number) : void;
        clean() : void;
        play():void
    }
    //public
    //private
    //protected
    class coffeeMachine implements coffeeMaker , CommercialCoffeeMaker
    {
        private static BEANS_GRAMM_PER_SHOT: number = 7;//클래스 내부에서 선언되면 메모리 낭비가 될 수 있음 =>Static사용
        private coffeeBeans: number = 0;
        constructor(coffeeBeans: number)
        {
            this.coffeeBeans = coffeeBeans;
        }
        clean() 
        {
            console.log(`cleaning ... `);
        }
        play()
        {
            console.log('playing ...');
        }
       static makeMachine(coffeeBeans:number): coffeeMaker{ // 클래스 레벨에서 활용하고 싶다면 static 키워드를 사용 오브젝트를 만들지 않아도 사용이 가능하다. 
            return new coffeeMachine(coffeeBeans);
        }
        fillCoffeeBeans(beans: number)
        {
            if(beans < 0)
            {
                throw new Error('value for beans should be greater than 0');
            }
            else{
                this.coffeeBeans += beans;
            }
        }
       
        private grindBeans(shots:number)
        {
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBeans < shots * coffeeMachine.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * coffeeMachine.BEANS_GRAMM_PER_SHOT;
        }
        private preheat()
        {
            console.log('heating up ....');
        }
        private extract(shots:number):CoffeeCup
        {
            console.log(`pulling ${shots}`);
            return {shots, hasMilk:false,};
        }
        makeCoffee(shots: number) : CoffeeCup
        {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
            /*if(this.coffeeBeans < shots * coffeeMaker.BEANS_GRAMM_PER_SHOT)
            {
                throw new Error('Not enough coffee beans!');
            }
        
            this.coffeeBeans -= shots * coffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots : shots,
                hasMilk : false,
            }
        }*/
    }
    }
    const maker : coffeeMaker = coffeeMachine.makeMachine(32);
    maker.makeCoffee(3);

    const maker2 : CommercialCoffeeMaker = coffeeMachine.makeMachine(32);
    maker2.fillCoffeeBeans(32);
}