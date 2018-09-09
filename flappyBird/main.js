var cnv=document.getElementById('myCanvas');
var ctx=cnv.getContext('2d');
//constant
const gap=100+242;
let pipe=[]
pipe[0]={
    x:280,
    y:0
}
let d;
let birdVerticalPosition=220;
let score=0;
let animation;

//getting image
var bg=new Image();
bg.src='bg.png';
var fg=new Image();
fg.src='fg.png';
var bird=new Image();
bird.src='bird.png';
var pipeSouth=new Image();
var pipeNorth=new Image();
pipeSouth.src='pipeSouth.png';
pipeNorth.src='pipeNorth.png';
var fly=new Audio()
fly.src='fly.mp3';
var scoreSound=new Audio()
scoreSound='score.mp3'
//controls
document.addEventListener('keydown',control)
function control(event){
    if(event.keyCode==38){
        d='up';
        fly.play();

    }
    else if(event.keyCode==40){
        d='down'
    }
}
//draw
function draw(){
    animation=requestAnimationFrame(draw);
    ctx.drawImage(bg,0,0)
    //drawing pipe
    for(let i=0;i<pipe.length;i++){
        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y)
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+gap) 
        pipe[i].x--;
        if(pipe[i].x==50){
            newPipe={
                x:280,
                y:Math.random()*(-200)
            }
            pipe.push(newPipe)
        }
        //Game rule
        if((pipe[i].x<52&&pipe[i].x>30)&&(birdVerticalPosition<(242+pipe[i].y)||birdVerticalPosition>(242+pipe[i].y+100)))
        {
            console.log(birdVerticalPosition,242+pipe[i].y,242+pipe[i].y+100)
            gameOver();
        }
        if(pipe[i].x==10){
            score++;
            scoreSound.play();

        }
    }
        //draw bird
        if(birdVerticalPosition<0)
        {
            birdVerticalPosition=0;
        }
        ctx.drawImage(bird,20,birdVerticalPosition)

        if(birdVerticalPosition!=380){
            birdVerticalPosition++;
        }
        else
        {   
            gameOver();
        }
        if(d=='up')
        {
            birdVerticalPosition-=25;
            d='down'
        }
        
    ctx.drawImage(fg,0,400)
    ctx.drawImage(bird,10,450)
    ctx.fillStyle="white";
    ctx.font="40px changa one"
    ctx.fillText(score,54,475)

}
draw();
function gameOver(){
    cancelAnimationFrame(animation)
    ctx.fillStyle='white';
    ctx.font='40px Changa one'
    ctx.fillText('Game Over',40,250)
    //reload game
    var element=document.getElementById('reload');
    element.style.visibility='visible';
    element.addEventListener('click',()=>{
        location.reload();
    })
}