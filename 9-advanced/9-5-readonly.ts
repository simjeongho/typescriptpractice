{
    type ToDo = {
        title: string;
        description: string;

    };
    type readonly<T> = {
        readonly[P in keyof T] : T[P];
    }
    function display(todo : Readonly<ToDo>)
    {
        
    }
}