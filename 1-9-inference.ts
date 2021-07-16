/**
 * TYpe Inference
 */

let text = 'hello';
//text = 1; // 타입을 위에서 생략해도 유추해서 추론한다. 

function print(message: string)//만약 디폴트 파라미터를 설정한다면 기본 타입을 유추한다. 
{
    console.log(message);
}
//추론의 경우
function add(x:number, y:number) // 파라미터들이 모두 number type이므로 함수의 반환형도 number일 것이라고 추론
{
    return x+y;
}
const result = add(1,2); //number를 리턴하는 함수를 변수에 대입했으므로 result변수도 number일 것이라고 추론 