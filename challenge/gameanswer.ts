const position = {x : 0 , y:0};
type direction ='up' | 'down' | 'left' | 'right';
function move1(direction : direction)
{
    switch(direction)
    {
        case 'up':
        {
            position.y += 1;
            break;
        }
        case 'down' :
            {
                position.y -=1;
                break;
            }
        case 'left':
        {
            position.x -=1;
        }
        case 'right':
        {
            position.x +=1;
        }
        default:
            throw new Error(`unknown direction: ${direction}`);
    }

}
 
console.log(position);
move1('up');
console.log(position);

