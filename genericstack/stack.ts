{
    //Linked list 기반 stack
    interface stack{
        readonly size : number;
        push(value : string) : void;
        pop() : string;
    }

    type node = {
        nextNode? : node;
        prevNode? : node;
        str : string;
    }

    class Stack implements stack
    {
        private Head? : node;
        private Tail? : node;
        private size1 : number = 0; // getter와 이름이 겹치면 안됨 
        get size()
        {
            return this.size1;
        }
            
        
        push(str : string)
        {
            const temp : node = {str};
            if(this.size1 === 0)
            {
                this.Head  = temp;
                this.Tail = temp;
                this.size1++;
            }

            else
            {
                temp.prevNode = this.Head;
                this.Head = temp;
                this.size1++;
            }
        }

        pop() : string
        {
            if(!this.Head) // undefined인 경우를 생각해주면 됨
            {
                return ('no node in stack');
            }   

            else 
            {
                const popstr  = this.Head.str;
                const newHead = this.Head.prevNode;
                this.Head = newHead;
                this.size1 --;
                console.log(popstr);
                return popstr;
            }
        }
    }

    const sck = new Stack;

    sck.push('심');
    sck.push('이');
    sck.push('정');
    sck.pop();
    sck.push('박');
    sck.pop();
    sck.pop();
    console.log(sck);

    
}