{
    //기존의 형태의 타입들을 이용하면서 조금 다른 형태로 변환할 수 있는 것을 의미한다.

    type Video = {
        title: string;
        author: string;
        description : string;
    };

    // type VideoOptional = {
    //     title? : string;
    //     author? : string;
    //     description? : string;
    // }

    // type VideoReadOnly = {
    //     readonly title: string;
    //     readonly author: string;
    //     readonly description : string;
    // }
    [1,2].map(item => item * item); // 1,4
    type Optioinal<T> = {
        [P in keyof T] ?: T[P] // for...in 
    };
    type readonlyvideo<T> = {
        readonly [P in keyof T] : T[P]
    }
    type VideoOptional = Optioinal<Video>;
    const videoOp : VideoOptional = {
        title: 'hi',
    }


    type Nullable<T> = {[P in keyof T ] : T[P] | null};
    const obj2: Nullable<Video> = {title : null, author: null, description : null,}

    type Proxy<T> = {
        get() : T;
        set(value : T) : void;
    };

    type Proxify<T> = {
        [P in keyof T] : Proxy <T[P]>
    }
}

