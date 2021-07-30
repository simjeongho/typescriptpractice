{
    Array : 
    [1,2].map;

    type Student = {
        passed : boolean;
    }

    const student: Student[] = [{passed : true} , {passed : true} , {passed : false}];

    student.every(student => student.passed); // 결과 false 모두가 true여야 true // every의 사용법

    class Animal {

    }

    class Cat extends Animal{
        isCat : boolean = true;
    }

    class Dog extends Animal{
        isDog : boolean = true;
    }
    
    const animals : Animal[] = [new Cat() , new Cat() , new Dog()];
    function isCat(animal:Animal): animal is Cat{
        return (animal as Cat).isCat !== undefined    };
    animals.every<Cat>(isCat);

    console.log(animals.every<Cat>(isCat));
}