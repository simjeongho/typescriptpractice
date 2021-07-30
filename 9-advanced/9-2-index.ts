{
    const obj = {
        name : 'jeongho',

    }

    obj.name; // jeongho
    obj['name']; // jeongho

    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    }

    type Name = Animal['name']; // string
    const text: Name = 'hello';

    type Gender = Animal['gender']; // 'male | 'female

    type Keys = keyof Animal; // 모든 키의 타입을 할당 총 3가지 'name' , 'age' , 'gender'

    const key: Keys = 'gender';

    type Person = {
        name: string;
        gender : Animal['gender'];

    };
    const person: Person = {
        name : 'jeongho',
        gender: 'male',
    }
}