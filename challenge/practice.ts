{
    // let a:number[] = [1,2,3,4];
    // let index:number =1;
    // console.log(a.reduce((acc,num) => acc*num));

    // console.log(a.reduce((acc,num) => acc+num));
    class position2
    {
        xpos : [string , number];
        ypos : [string , number];
        constructor()
        {
            this.xpos = ['x' , 0];
            this.ypos = ['y' , 0];
        }
    }

    let x = new position2;
    
    console.log(x.xpos);
}
