{
//Array
//두 가지의 방법 존재
    const fruit:string[] =['토마토' , '바나나'];
    const scores:Array<number> = [1,3,4];

//Tuple
//다른 타입의 자료형을 가질 수 있는 배열 -> interface, type alias, class로 대체 가능
    let student: [string, number];
    student = ['name' , 123];
    student[0] // name
    student[1] // 123
    const [name,age] = student; // 리액트에서 useState를 사용하면 tuple형태로 return 된다. 
}
