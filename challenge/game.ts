{
    class position
    {
        x: number =0;
        y: number =0;
    }
    const xx = new position;
    type mov  = 'up'|'down'|'left'|'right';
    function move(command : mov):position
    {
        
        switch(command)
        {
            case 'up':
            {   
                xx.y = xx.y +1;
                return xx;
            }
            case 'down':
            {
                xx.y = xx.y-1;
                return xx;
            }
            case 'left':
                {
                    xx.x = xx.x -1;
                    return xx;
                }
            case 'right':
                {
                    xx.x = xx.x +1;
                    return xx;
                }
        }
    }
   
    console.log(xx);
    move('up');
    console.log(xx);
    move('down')
    console.log(xx);
    move('left');
    console.log(xx);
    move('right');
    console.log(xx);
}