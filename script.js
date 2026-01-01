let dino = document.getElementById("dino");
let cactus = document.getElementById("cactus");
let score = document.getElementById("score");
let count = 0;

document.addEventListener("keydown", function(e){
  if(e.code=="Space"){
    jump();
  }
});

document.addEventListener("touchstart", function(){
  jump();
});

function jump(){
  if(!dino.classList.contains("jump")){
    dino.classList.add("jump");
    setTimeout(()=>{
      dino.classList.remove("jump");
    },500);
  }
}

setInterval(function(){
  let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if(cactusLeft < 90 && cactusLeft > 50 && dinoBottom < 40){
    alert("Game Over! Score: " + count);
    count=0;
  }
},10);

setInterval(()=>{
  count++;
  score.innerHTML = "Score : " + count;
},100);
