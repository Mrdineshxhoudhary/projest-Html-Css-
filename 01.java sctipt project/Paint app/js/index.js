




const canvas = document.querySelector("canvas"),
ctx = canvas.getContext("2d");

let isDrawing = false, 
brushWidth = 10 //brusc Width;
window.addEventListener("load" , () =>{
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

});  
const startdrawing = () =>{
    isDrawing = true;
    ctx.beginPath(); //Creating new path to drow
    ctx.lineWidth = brushWidth; //brush width


}
const drawing = (e) =>{
    if (!isDrawing) return;       
    ctx.lineTo(e.offsetX , e.offsetY);
    ctx.stroke();

}
canvas.addEventListener("mousedown", startdrawing);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", ()=> isDrawing = false);
