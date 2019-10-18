window.addEventListener('load', () => {
  let startBtn = document.querySelector("#start");
  let ball = document.querySelector(".ball");
  let fild =  document.querySelector(".fild");
  let max_x = fild.clientWidth - 25 ;
  let max_y= fild.clientHeight -25 ;
  let ball_x = ball.offsetLeft;
  let ball_y = ball.offsetTop ;
  let timer = 0;
  let is_run = false;
  startBtn.addEventListener("click",(e) => {
    if(!is_run){
      start();
      is_run = !is_run;
       e.target.classList.toggle('red-btn');
       e.target.textContent = "Stop";
    }
    else{
      is_run = !is_run; 
    }
    
  })


function start() {
    let speed = 10;
    let speedShift = 0.5;
    let rend = setInterval(frame, 20);
    let direсtion_x = Math.random() < 0.5 ? -1 : 1;
    let direсtion_y = Math.random() < 0.5 ? -1 : 1;
    function frame() {
      if(!is_run) stop();
      if(speed <= 0) stop();
      timer++;
      speed -= timer / 11111;        
      if ( ball_x >= max_x){
          direсtion_x = -1;
          ballMove(direсtion_x, direсtion_y, speed);

          speed -= speedShift;
      }  
      else if (  ball_y >= max_y) {
          direсtion_y = -1;

          ballMove(direсtion_x, direсtion_y, speed);
          speed -= speedShift;
      } 
      else if (  ball_y <= 25) {
          direсtion_y = 1;
          ballMove(direсtion_x, direсtion_y, speed);

          speed -= speedShift;

      } 
      else if (  ball_x <= 25) {
          direсtion_x = 1;
          ballMove(direсtion_x, direсtion_y, speed);

           speed -= speedShift;

      } 
      else {
        ballMove(direсtion_x, direсtion_y, speed)
      }
    }
    function stop(){
      clearInterval(rend);
      is_run = false; 
      startBtn.classList.toggle('red-btn');
      startBtn.textContent = "Click Me!";
    }
   
    
  }
  function ballMove(direсtion_x, direсtion_y, speed) {
    ball_x += direсtion_x*speed; 
    ball_y += direсtion_y*speed;
    ball.style.top = ball_y + "px"; 
    ball.style.left =  ball_x + "px";
  }
  function blackHole(){
    //TоDo
  }


});

