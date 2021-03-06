{
    interface Stack{
        readonly size: number;
        push(value : string) : void;
        pop() : string;
    }

    type StackNode = {
        readonly value : string;
        readonly next?: StackNode;
    }
    class StackImpl implements Stack{
        private _size : number = 0;
        private head? : StackNode; 
        get size()
        {
            return this._size;
        }
        push(value : string)
        {
            const node : StackNode = {value,next: this.head};
            this.head = node;
            this._size++;
        }   

        pop() : string{ //null == undefined 값 확인 , null !== undefined 엄격한 타입 체크
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

    const stack = new StackImpl;
    stack.push('jeongho');
    stack.push('yoon hak');
    stack.push('minyeong');
    stack.push('daeun');

    while(stack.size !== 0)
    {
        console.log(stack.pop());
    }
}