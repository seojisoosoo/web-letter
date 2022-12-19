// 눈내리기
let c = document.getElementById('snowCanvas'), 
    snowText = c.getContext("2d");
let w = c.width = window.innerWidth, 
    h = c.height = window.innerHeight;

Snowy();
function Snowy() {
  let snow, arr = [];
  let num = 600, tsc = 1, sp = 0.5;  //num:눈송이 개수 , tsc:눈송이 가로 변화율, sp:내리는 속도
  let sc = 0.8, t = 10, mv = 20, min = 1;  //sc:눈송이 크기
    for (let i = 0; i < num; ++i) {
      snow = new Flake();
      snow.y = Math.random() * (h + 50);
      snow.x = Math.random() * w;
      snow.t = Math.random() * (Math.PI * 2);
      snow.sz = (100 / (10 + (Math.random() * 100))) * sc;
      snow.sp = (Math.pow(snow.sz * .8, 2) * .15) * sp;
      snow.sp = snow.sp < min ? min : snow.sp;
      arr.push(snow);
    }
  go();
  function go(){
    window.requestAnimationFrame(go);
      snowText.clearRect(0, 0, w, h);
      snowText.fillStyle = 'black';
      snowText.fillRect(0, 0, w, h);
      snowText.fill();
        for (let i = 0; i < arr.length; ++i) {
          f = arr[i];
          f.t += .05;
          f.t = f.t >= Math.PI * 2 ? 0 : f.t;
          f.y += f.sp;
          f.x += Math.sin(f.t * tsc) * (f.sz * .3);
          if (f.y > h + 50) f.y = -10 - Math.random() * mv;
          if (f.x > w + mv) f.x = - mv;
          if (f.x < - mv) f.x = w + mv;
          f.draw();}
 }
 function Flake() {
   this.draw = function() {
      this.g = snowText.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz+8);
      this.g.addColorStop(0, 'hsla(255,255%,255%,1)');
      this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
      snowText.moveTo(this.x, this.y);
      snowText.fillStyle = this.g;
      snowText.beginPath();
      snowText.arc(this.x, this.y, this.sz, 0, Math.PI * 2, true);
      snowText.fill();}
  }
}

window.addEventListener('resize', function(){
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
}, false);


// 싸인
let canvas, context;

function init(){
    canvas=document.querySelector("#signCanvas");
    context=canvas.getContext("2d");

    context.lineWidth=2;
    context.strokeStyle="blue";

    canvas.addEventListener("mousemove", function(e){move(e)}, false);
    canvas.addEventListener("mousedown", function(e){down(e)}, false);
    canvas.addEventListener("mouseup", function(e){up(e)}, false);
    canvas.addEventListener("mouseout", function(e){out(e)}, false);
}

let startX=0, startY=0;
let dragging=false;

function draw(curX, curY){
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(curX, curY);
    context.stroke();
}

function down(e){
    startX=e.offsetX; startY=e.offsetY; dragging=true;
}

function up(e){
    dragging=false;
}

function move(e){
    if(!dragging) retrun;
    let curX=e.offsetX, curY=e.offsetY;
    draw(curX, curY);
    startX=curX; startY=curY;
}

function out(e){
    dragging=false;
}

function out(e){
    dragging=false;
}