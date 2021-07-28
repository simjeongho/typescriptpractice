{
    /**
     * Union Types: OR
     */
    type Direction = 'left' | 'right' | 'up' |'down';// case를 모두 지정해줄 수 있다. union type
    function move3(direction: Direction)
    {
        console.log(direction);
    }
        move3('down');
        move3('right');
    
        type TileSize = 8|16|32;
        const tile : TileSize = 16;
    
        //function :login -> success, fail
        type result = 'success' | 'fail'
    
        function login(id : string) : result
        {
            if(id == 'success')
            {
                return 'success'
            }
            else return 'fail'
        }
    
        type SuccessState = {
            response:{
                body:string;
            }
            result:'success';
        }
        type FailState = {
            reason:{
                body:string
            }
            result : 'fail';
        }
        type loginState = SuccessState|FailState
        
    
        //printLoginState(state)
        //success -> '성공'
        //fail -> '실패'
    
        function printLoginState1(state : loginState)
        {
            state.result // success or fail but both have
            if(state.result === 'success')
            {
                console.log(`성공 ${state.response.body}`);
            }
            else{
                console.log(`실패 ${state.reason}`)
            }
        }
    }