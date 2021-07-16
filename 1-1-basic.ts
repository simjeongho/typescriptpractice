{
    //JavaScript 
    //old : var 
    //let
    let name = 'hello';
    name ='hi'; 
    
    //const
     // age  =4; 다시 할당 불가능

    /**
     * javascript
     * primitive: number, string, boolean, bigint, symbol, null, undefined
     * object: function, array,....
     */

    //number 
    const num:number = 4;
    //string
    const str:string= 'hello';
    //boolean
    const boal:boolean = false;
    //undefined 확실하지 않은 것
    //let name:undefined;
    let age:number | undefined;
    age = undefined;
    age = 1;
    //null 빈 게 확실하다. 
    let person =null;
    //person =1; 불가능 undefined와 마찬가지로 union type으로만 사용 

    function find():number |undefined{
        return undefined;
    }

    //unknown 자바스크립트와 비슷
    let notSure: unknown =0;
    notSure = 'he';
    notSure = true;

    //any 아무거나 다 가능 자바스크립트와 비슷
    let anything : any = 0;
    anything = 'hello';

    //void

    function print():void
    {
        console.log('hello');
        return;
    }
    let unusable: void=  undefined // 

    //never
    //function throwError(message : string) : never{
        //message ->server(log)
        //throw new Error(message);
        /*while(true)
        {

        }*/
        //리턴을 할 수 없음 error를 던지던지 무한루프를 돌아야함
    //}

    //object
    //안좋음let obj; object;
    function acceptSomeObject(obj:object)
    {

    }
    acceptSomeObject({name:'jeongho'});
    acceptSomeObject({animal: 'cat'});



}