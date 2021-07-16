{
    /**
     * Type Aliases
     * 새로운 타입을 내가 정의할 수 있다는 뜻
     */
    type text = string;
    const name :string = 'jeongho';
    const name2:text = 'sim';
    type Num = number;
    type Student = {
        name: string,
        age: number;
    };
    const student:Student = {
        name: '정호',
        age: 25,
    }

    /**
     * String Literal Types
     */
    type Name = 'name';
    let jeongName : Name;
    jeongName = 'name'; // name만 가능
    type JSON = 'json'
    const json:JSON = 'json' ;  // type을 지정해두면 그 문자열만 가능

    type Boal = true;
    const isCat:Boal = true;
}