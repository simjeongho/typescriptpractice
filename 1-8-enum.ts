{
    /**
     * Enum 상수 값들을 모두 모아서 사용할 수 있게 해주는 타입
     */
    //Javascript 상수 표현
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY":0 , "TUESDAY":1 , "WEDNESDAY" : 2 })// 한번만 정의할 수 있게 해줌
    const dayOfToday  = DAYS_ENUM.WEDNESDAY 


    //TYPESCRIPT 
    enum Days{
        Monday, // 0
        Tuesday,//1
        Wednesday,//2
        Thursday,//3
        Friday,//4
        Saturday,//5
        Sunday,//6
    }
    console.log(Days.Tuesday);
    let day:Days = Days.Saturday;
    day = 1; // 숫자로도 할당이 가능 이 것이 문제다. 타입이 제대로 보존되지 않는다. union type을 이용하는 것이 낫다. 
    //enum을 사용할 수 밖에 없는 경우 : 모바일 환경과 소통할 때 
    console.log(day);
}