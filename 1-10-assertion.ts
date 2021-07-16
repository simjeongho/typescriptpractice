{
    /**
     * Type assertion // 안좋음 as 나 <>기호를 사용하여 정의 
     */
    //js는 항상 any타입
    function jsStrFunc():any
    {
        return 'hello';
    }
    const result = jsStrFunc();
    //result.length // any타입이라 string에서 사용하는 api를 사용할 수 없음 이럴 때 사용하는 것이 type assertion 
    (result as string).length; // as 키워드를 사용하면 string에서 사용하는 api를 사용 가능하다. 
    console.log((<string>result.length)) // 앞에서 명시하는 것도 가능 
    //const wrong: any = 5;
    //console.log((wrong as Array<number>).push(1));//wrong 변수를 any타입에 number를 대입했지만 타입 assertion을 할 때는 array를 대입하면 오류가 난다.

    function findNumbers(): number[] | undefined
    {
        return undefined;
    }
    const numbers = findNumbers();
    numbers?.push(2);//?를 사용하면 이거 일수도 있어 
    numbers!.push(3);//!를 사용하면 얜 무조건 number array야 다른 건 아니야 undefined가 아니야 

    const button = document.querySelector('class');
    button?.nodeValue // nodevalue가 null일 수도 있다. null이 아닌게 확실하다면 !를 붙인다. 

}