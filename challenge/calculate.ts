function calculate(arith : string , ...num:number[]) : number{ // union type으로 정의 가능 
    if(arith === 'add')
    {
        return num.reduce((a,b) => a+b);
    }
    else if(arith === 'substract')
    {   
        // let a = 1;
        // let add = 0;
        // for(a ; a < num.length; a++)
        // {
        //     add += num[a];
        // }
        // return num[0] -  add;
        return 2*num[0] - num.reduce((acc , num) => acc + num);
    }
    else if(arith === 'multiply')
    {
        return num.reduce((a,b) => a*b);
    }
    else if(arith === 'divide')
    {
        return num[0]*num[0] / num.reduce((a,b) => a*b);
    }
    else if(arith ==='remainder')
    {
        let index:number =1;
        let add:number = 0;
        for(index ; index < num.length ; index++)
        {
            add += num[index];
        }
        return num[0] % add;
    }
    else
    {
        console.log('이런 연산은 없어');
        return 0;
    }
}

console.log(calculate('add' , 1,3));
console.log(calculate('substract' , 3,1));
console.log(calculate('multiply' , 4,3));
console.log(calculate('divide' , 4,2));
console.log(calculate('remainder' , 5,3));