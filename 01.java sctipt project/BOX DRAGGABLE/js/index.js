const wrapper = document.querySelector(".wrapper"),
header = wrapper.querySelector("header");

function onDrag({movementX , movementY}){
    let getStyle = window.getComputedStyle(wrapper);
let left = parseInt(getStyle.left);
let top = parseInt(getStyle.top);
// console.log();
wrapper.style.left = `${left + movementX}px`;
wrapper.style.top = `${top + movementY}px`;
// alert('msg');
}
header.addEventListener("mousedown" , ()=>{
    header.addEventListener("mousemove" , onDrag);

});
// document.addEventListener("mousedown" , ()=>{
//     header.removeEventListener("mousemove" , onDrag);

// });
console.log("hy console");



// function onDrag({movementX , movementY}) {
//     let getStyle = window.getComputedStyle(wrapper);
//     let left = parseInt(getStyle.left);
//     let top = parseInt(getStyle.top);
//     wrapper.style.left = `${left + movementX}px`;
//     wrapper.style.top = `${left + movementY}px`;
// }
// function onDrag() {
//     let getStyle = window.getComputedStyle(wrapper);
//     let left = getStyle.left;
//     let top = getStyle.top;
//   console.log(left , top);
// }

// header.addEventListener("mousedown" , ()=>{
//     header.addEventListener("mousemove" , onDrag);
// });
