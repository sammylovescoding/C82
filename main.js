var mouseEvent="empty";
var lastPositionOfX,lastPositionOfY;


canvas=document.getElementById("myCanvas");
 ctx=canvas.getContext("2d");
 color="black";
 widhtofline=1;
 canvas.addEventListener("mousedown",my_mousedown);
 function my_mousedown(e){
    
     color=document.getElementById("color").value ;
     widhtofline=document.getElementById("width").value ;
     mouseEvent="mouseDown";
     
 }
 canvas.addEventListener("mousemove",my_mousemove);
 function my_mousemove(e){
    currentpositionofmouse_x=e.clientX-canvas .offsetLeft;
    currentpositionofmouse_y=e.clientY-canvas .offsetTop;
     if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widhtofline;
        ctx.arc(currentpositionofmouse_x,currentpositionofmouse_y,40,0,2*Math.PI)
       
        ctx.stroke()
     }
    lastPositionOfX=currentpositionofmouse_x;
    lastPositionOfY=currentpositionofmouse_y;
 }
 canvas.addEventListener("mouseup",my_mouseup);
 function my_mouseup(e){
     mouseEvent="mouseUP";
     
 }
 canvas.addEventListener("mouseleave",my_mouseleave);
 function my_mouseleave(e){
     mouseEvent="mouseleave";
     
 }


 function clearArea(){
     ctx.clearRect(0,0,canvas.width,canvas.height);
 }
