const cvs=document.getElementById('snake');
const ctx=cvs.getContext('2d');
const box=32;
//setting image
const ground=new Image();
ground.src='ground.png';
const foodImg=new Image();
foodImg.src='food.png';
//create Audio
const dead=new Audio();
const eat=new Audio();
const up=new Audio();
const down=new Audio();
const left=new Audio();
const right=new Audio();
dead.src='dead.mp3';
eat.src='eat.mp3';
up.src='up.mp3';
right.src='right.mp3';
left.src='left.mp3';
right.src='right.mp3';

//create snake
let snake=[];
snake[0]={
    x:9*box,
    y:10*box
}
//create food
let food={
    x:Math.floor(Math.random()*17+1)*box,
    y:Math.floor(Math.random()*15+3)*box
}
//score variable
let score=0;
//draw everything to canvas
//control snake
let d;
document.addEventListener("keydown",direction)
function direction(event){
    if(event.keyCode==37&& d!='right')
    {
        d="left";
        left.play();
    }
    else if(event.keyCode==38&& d!='down' )
    {
        d='up';
        up.play();
    }
    else if(event.keyCode==40&& d!='up')
    {
        d='down'
        down.play();
    }
    else if(event.keyCode==39&& d!='left' )
    {
        d='right';
        right.play();
    }
}
function collision(head,array){
    for(let i=0;i<array.lenght;i++){
        if(head.x==array[i].x&&head.y==array[i].y)
        {
            return true;
        }
        else false;
    }
}
function draw(){
    ctx.drawImage(ground,0,0)
    //food
    ctx.drawImage(foodImg,food.x,food.y);
 //old head postion
 let snakeX=snake[0].x;
 let snakeY=snake[0].y;
 
 //which direction
 if(d=="left") snakeX-=box;
 if(d=="right") snakeX+=box;
 if(d=="up") snakeY-=box;
 if(d=="down") snakeY+=box;
  //food eating
  if(snake[0].x==food.x&&snake[0].y==food.y){
  score++;
  eat.play();
  food={
      x:Math.floor(Math.random()*17+1)*box,
      y:Math.floor(Math.random()*15+3)*box
  }

  } 
  else{ 
 //remove the tail
 snake.pop();
  }
 
  
 //add new head
 let newHead={
     x:snakeX,
     y:snakeY
 }
 //game rule;
 if(snakeX<=box||snakeX>=17*box||snakeY<=3*box||snakeY>=17*box||collision(newHead,snake))
 {
     clearInterval(game);
     dead.play()
 } 
 snake.unshift(newHead)

 
 

    for(let i=0;i<snake.length;i++)
    {
        ctx.fillStyle=(i==0)?"green":"white";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        ctx.strokeStyle="red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    
    

    ctx.fillStyle='white';
    ctx.font='45px changa one';
    ctx.fillText(score,2*box,1.6*box)
}
let game=setInterval(draw,300)
