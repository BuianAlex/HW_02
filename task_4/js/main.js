window.addEventListener('load', () => {
  let startBtn = document.querySelector("#start");
  let ball = document.querySelector(".ball");
  let fild =  document.querySelector(".fild");
  let max_x = fild.clientWidth;
  let max_y= fild.clientHeight;
  let ball_x = ball.offsetLeft + 25;
let ball_y = ball.offsetTop + 25;
  console.log( max_x+"  "+ max_y);
  
  startBtn.addEventListener("click",(e) => {
    start();
  })


function start() {
    //clearInterval(id);
    // var elem = document.querySelector(".ball"); 
    // let newPos_x = Math.floor(Math.random() * (max_x - 0 + 1) ) + 0;
    // let newPos_y = Math.floor(Math.random() * (max_y - 0 + 1) ) + 0;
    
    let speed = 0;
    let id = setInterval(frame, speed);
    let direvtion_x = Math.random() < 0.5 ? -1 : 1;
    let direvtion_y = Math.random() < 0.5 ? -1 : 1;
    function frame() {  
      if ( ball_x >= max_x){
          direvtion_x = -1;
          ballMove(direvtion_x,direvtion_y);

          speed += 1;
      }  
      else if (  ball_y >= max_y) {
          direvtion_y = -1;

          ballMove(direvtion_x, direvtion_y);

          speed += 1;
          
        //clearInterval(id);
      } 
      else if (  ball_y <= 0) {
          direvtion_y = 1;
          ballMove(direvtion_x, direvtion_y);

          speed += 1;
        //clearInterval(id);
      } 
      else if (  ball_x <= 0) {
          direvtion_x = 1;
          ballMove(direvtion_x, direvtion_y);
         
          //id = setInterval(frame, speed);
           speed += 1;
        //clearInterval(id);
      } 
      else {
        ballMove(direvtion_x, direvtion_y)
      }
    //   if(speed === 17){
    //      clearInterval(id);
    //   }
       console.log('speed='+speed);
    }
   
    
  }
  function ballMove(direvtion_x, direvtion_y) {
      console.log(direvtion_x+' '+direvtion_y);
      
    ball_x += direvtion_x; 
    ball_y += direvtion_y;
    ball.style.top = ball_y + "px"; 
    ball.style.left =  ball_x + "px";
  }


});

