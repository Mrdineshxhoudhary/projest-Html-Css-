const textAriya = document.querySelector("textarea"),
fileNameInpt = document.querySelector(".fileName input"),
Selectmenu = document.querySelector(".SelectMenu select"),
SaveAs = document.querySelector(".Save-btn");

SaveAs.addEventListener("click",()=>{
    const blob = new Blob([textAriya.value] , {type: Selectmenu.value});
    const filterUrl = URL.createObjectURL(blob);
    console.log(filterUrl);
    const link = document.createElement("a");
    link.download = fileNameInpt.value;
    link.href = filterUrl;
    link.click(); 


})