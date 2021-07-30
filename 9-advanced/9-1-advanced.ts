{
    type PositionType = {
        x:number;
        y : number;
    };

    interface PositionInterface {
        x: number;
        y: number;
    }

    //object

    const obj1 : PositionType = {
        x: 1,
        y : 1,
    };

    const obj2 : PositionInterface = {
        x:1, 
        y:1,
    };

    //class 
    class pos1 implements PositionType{
        x : number;
        y : number;
    }

    class pos2 implements PositionInterface{
        x: number;
        y: number;
    }


    //Extends 
    interface ZPositionInterface extends PositionInterface
    {
        z: number;
    }

    type ZPositionType = PositionType & {z: number};

    //only interface can merge

    //type PositionType{} type은 중복되는 것이 안됨

    //Type aliases can computed properties
    type Person = {
        name:string,
        age: number,
    }

    type Name = Person[`name`]; // string type
    type NumberType = number;
    type direction = 'up' | 'down' // union type only can construct on type not in interface

}