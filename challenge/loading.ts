{
    type LoadingState = {
        state:'loading';
    };
    type SuccessState = {
        state:'success';
        response: {
            body:string;
        }
    };
    type FailState = {
        state:'fail';
        reason : string;
    };
    type ResourceLoadState = LoadingState | SuccessState | FailState;

    function printLoginState(resource1 : ResourceLoadState)
    {
        switch(resource1.state)
        {
            case 'success':
                {
                    console.log(resource1. response.body);
                    break;
                }
            case 'fail': {
                console.log(resource1.reason);
                break;
            }
            case 'loading' :
                {
                    console.log(resource1.state);
                    break;
                }
        }
    }

    printLoginState({state:'loading'});
    printLoginState({state: 'success' , response: {body:'loaded'}});
    printLoginState({state :'fail' , reason:'no network'}) ;
}