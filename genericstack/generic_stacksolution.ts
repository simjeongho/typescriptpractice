{
    interface Stack<T>{ // generic 선언은 interface, type, class 의 선언부에 행한다. 

        readonly size: number;
        push(value : T) : void;
        pop() : T;
    }

    type StackNode<T> = {
        readonly value : T;
        readonly next?: StackNode<T>;
    }
    class StackImpl<T> implements Stack<T>{
        private _size : number = 0;
        private head? : StackNode<T>; 
        get size()
        {
            return this._size;
        }
        push(value : T )
        {
            const node : StackNode<T> = {value,next: this.head};
            this.head = node;
            this._size++;
        }   

        pop() : T{ //null == undefined 값 확인 , null !== undefined 엄격한 타입 체크
            if(this.head == null)
            {
                throw new Error ('Stack is empty');
            }
            const node = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }
    }

    const stack = new StackImpl<string>();
    stack.push('jeongho');
    stack.push('yoon hak');
    stack.push('minyeong');
    stack.push('daeun');

    const stack2 = new StackImpl<number>();
    stack2.push(1);
    stack2.push(2);
    stack2.push(3);
    stack2.push(4);
    while(stack.size !== 0)
    {
        console.log(stack.pop());
    }

    while(stack2.size !== 0)
    {
        console.log(stack2.pop());
    }
}