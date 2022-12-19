
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