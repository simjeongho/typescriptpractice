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
    class CoffeeMachine implements CoffeeMaker {
      private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
      private coffeeBeans: number = 0; // instance (object) level
  
    constructor(coffeeBeans: number, private milk : milkFrother , private sugar : SugarProvider) {
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
        const coffee =this.extract(shots);
        const sugarAdded = this.sugar.addSugar(coffee);
        return this.milk.makeMilk(sugarAdded);
      }
    }



    //interface 상호작용 계약서 만들기
    interface milkFrother{
        makeMilk(cup : CoffeeCup) : CoffeeCup;
    }

    //interface 설탕 제공기
    interface SugarProvider
    {
        addSugar(cup: CoffeeCup) : CoffeeCup;
    }

    //싸구려 우유 스팀기
    class CheapMilkSteamer implements milkFrother
    {
        private steamMilk(): void {
            console.log(`steaming some mllk ...`)
        }

        makeMilk(cup : CoffeeCup) : CoffeeCup{
            this.steamMilk();
            return { 
                ...cup ,
                hasMilk : true,
            }
        }
    }

    //fanct milk steamer
    class FancyMilkSteamer implements milkFrother{
        private steamMilk(): void {
            console.log(` Fancy steaming some mllk ...`)
        }

        makeMilk(cup : CoffeeCup) : CoffeeCup{
            this.steamMilk();
            return { 
                ...cup ,
                hasMilk : true,
            }
        }
    }

    //ColdMilkSteamer
    class ColdMilkSteamer implements milkFrother{
        private steamMilk(): void {
            console.log(` Cold steaming some mllk ...`)
        }

        makeMilk(cup : CoffeeCup) : CoffeeCup{
            this.steamMilk();
            return { 
                ...cup ,
                hasMilk : true,
            }
        }
    }

    //no milk
    class NOMilk implements milkFrother {
        makeMilk(cup :CoffeeCup){
            return cup;
        }
    }

    //설탕 제조기
    class CandySugarMixer implements SugarProvider
    {
        private getSugar()
        {
            console.log(`Getting some sugar from 🍬`);
            return true;
        }
        addSugar(cup : CoffeeCup) : CoffeeCup
        {
            const sugar = this.getSugar();
            return{
                ...cup , 
                hasSugar : sugar,
            };
        }
    }
    //Sugar mixer
    class SugarMixer implements SugarProvider
    {
        private getSugar()
        {
            console.log(`Getting some sugar from jar 🍬`);
            return true;
        }
        addSugar(cup : CoffeeCup) : CoffeeCup
        {
            const sugar = this.getSugar();
            return{
                ...cup , 
                hasSugar : sugar,
            };
        }
    }

    //no sugar
    class NoSugar implements SugarProvider
    {
        addSugar(cup: CoffeeCup)
        {
            return cup;
        }
    }

    //Milk
    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    const noMilk = new NOMilk();

    //Sugar
    const candySugar = new CandySugarMixer();
    const sugar = new SugarMixer();
    const nosugar = new NoSugar();

    //machines
    const sweetMachine = new CoffeeMachine(12, noMilk , sugar);
    const sweetCandyMachine = new CoffeeMachine(12, noMilk , candySugar);

    const latteMachine = new CoffeeMachine(12, cheapMilkMaker , nosugar);
    const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker , nosugar);
    const sweetLatteMachine = new CoffeeMachine(12, fancyMilkMaker , sugar);
}