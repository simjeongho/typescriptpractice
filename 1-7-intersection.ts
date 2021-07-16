{
    /**
     * InterSection Types : &
     * 
     */
    type Student = {
        name:string;
        score:number;
    };

    type Worker= {
        employeeId:number;
        work:() => void;
    }

    function internWork(person : Student & Worker)
    {
        console.log(person.name, person.employeeId, person.work())
    }

    internWork({
        name:'정호',
        score:25,
        employeeId: 12171800,
        work:() => {} // 두 가지의 있는 멤버 변수 및 함수를 모두 전달해야 가능
    })
}