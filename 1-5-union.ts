{
/**
 * Union Types: OR
 */
type Direction = 'left' | 'right' | 'up' |'down';// case를 모두 지정해줄 수 있다. union type
function move2(direction: Direction)
{
    console.log(direction);
}
    move2('down');
    move2('right');

    type TileSize = 8|16|32;
    const tile : TileSize = 16;

    //function :login -> success, fail
    type result = 'success' | 'fail'

    function login1(id : string) : result
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
    }
    type FailState = {
        reason:{
            body:string
        }
    }
    type loginState = SuccessState|FailState
    function login12() : loginState
    {
        return{
            response:
            {
                body:'logged in' ,
            },
        }
    }

    //printLoginState(state)
    //success -> '성공'
    //fail -> '실패'

    function printLoginState12(state : loginState)
    {
        if('response' in state )
        {
            console.log(`성공 ${state.response.body}`);
        }
        else{
            console.log(`실패 ${state.reason}`)
        }
    }
}
