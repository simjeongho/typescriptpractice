{
    type CoffeeCup = {
      shots: number;
      hasMilk ? : boolean;
      hasSugar ? : boolean;
    };

    interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    }

    /*class CaffeLatteMachine{
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0; // instance (object) level
  
        private constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans;
      }
  
        static makeMachine(coffeeBeans: number): CaffeLatteMachine {
        return new CaffeLatteMachine(coffeeBeans);
      }
  
        fillCoffeeBeans(beans: number) {
        if (beans < 0) {
            throw new Error('value for beans should be greater than 0');
        }
        this.coffeeBeans += beans;
      }
  
        clean() {
        console.log('cleaning the machine...🧼');
    }

        private grindBeans(shots: number) {
        console.log(`grinding beans for ${shots}`);
        if (this.coffeeBeans < shots * CaffeLatteMachine.BEANS_GRAMM_PER_SHOT) {
            throw new Error('Not enough coffee beans!');
        }
        this.coffeeBeans -= shots * CaffeLatteMachine.BEANS_GRAMM_PER_SHOT;
    }

        private preheat(): void {
        console.log('heating up... 🔥');
      }
  
      private extract(shots: number): CoffeeCup {
        console.log(`Pulling ${shots} shots... ☕️`);
        return {
          shots,
          hasMilk: false,
        };
    }

      makeCoffee(shots: number): CoffeeCup {
        this.grindBeans(shots);
        this.preheat();
        const coffee = this.extract(shots);
        return {...coffee , hasMilk : true};
      }
    } */

    //coffee Machine class
    abstract class CoffeeMachine implements CoffeeMaker {
      private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
      private coffeeBeans: number = 0; // instance (object) level
  
    constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans;
      }

      fillCoffeeBeans(beans: number) {
        if (beans < 0) {
          throw new Error('value for beans should be greater than 0');
        }
        this.coffeeBeans += beans;
      }
  
      clean() {
        console.log('cleaning the machine...🧼');
      }
  
      private grindBeans(shots: number) {
        console.log(`grinding beans for ${shots}`);
        if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
          throw new Error('Not enough coffee beans!');
        }
        this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      }
  
      private preheat(): void {
        console.log('heating up... 🔥');
      }
  
    protected abstract extract(shots: number): CoffeeCup;
      
  
      makeCoffee(shots: number): CoffeeCup {
        this.grindBeans(shots);
        this.preheat();
        return this.extract(shots) ; 
      }
    }

    class CaffeLatteMachine extends CoffeeMachine{
        constructor(beans : number , public readonly serialNumber : string)
        {
            super(beans);
        }
        private steamMilk(): void {
            console.log(`steaming some mllk ...`)
        }
        protected extract(shots : number) : CoffeeCup
        {
            this.steamMilk();
            return {
                shots , hasMilk : true,
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine{
        constructor(beans : number)
        {
            super(beans);
        }
        putSugar()
        {
            console.log(`Put Sugar ... `);
        }
        protected extract(shots : number) : CoffeeCup
        {
            this.putSugar();
            return{
                shots , hasSugar:true
            }
        }
    }
    const machines :CoffeeMachine[]= [  new CaffeLatteMachine(16 , '1') , new SweetCoffeeMaker(16) , 
                          new CaffeLatteMachine(16 , '2') , new SweetCoffeeMaker(16)];
    machines.forEach(machine => {console.log(`----------------------`);
                    machine.makeCoffee(1);})
    

}