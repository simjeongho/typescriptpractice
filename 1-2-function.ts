{
    /*
    //Typescript
    function FetchNum(id:string) : Promise<number>
    {
        return new Promise((resolve, reject) => 
        {
            resolve(100);
        })
    }
    */

    //Javascript => Typescript
    //optional parameter
    function printName(firstname:string, lastname: string) : string
    {
        //console.log(firstname);
        //console.log(lastname);
        return firstname + lastname;        
    }
    printName('심' , '정호');

    function printname(firstname:string, lastname ? :string|undefined)
    {
        //console.log(firstname);
        //console.log(lastname);
        return firstname + lastname;
    }
    printname('심');
    printname('심' , '정호');

    //default parameter
    function printMessage(message:string ='default message')
    {
        console.log('hello');
        console.log(message);
    }
    
    printMessage();
    
    //Rest parameter 
    function addNumber(...num:number[]):number
    {
       // return num.reduce((a,b) => a+b);
       let add: number = 0;
       let index:number = 0;
       for(index ;  index < num.length ; index ++)
       {
           add = num[index] + add;
       }
       return add;
    }

    console.log(addNumber(1,2,3,4));
    console.log(addNumber(2,4,5));

    printMessage();
}