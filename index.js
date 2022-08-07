const button = document.getElementById("btn");
var div = document.getElementsByTagName("div");
div[3].style.display="none";

button.addEventListener('click',function(){
    div[3].style.display="block";
    button.innerHTML="Click multiple"
})
div[4].addEventListener('mouseover',function(){
    div[4].style.display="none";
    // setTimeout(() => {
    //     div[4].style.display="block";
    // }, 300);
})
div[4].addEventListener('mouseout',function(){
    div[4].style.display="block";
    // setTimeout(() => {
    //     div[4].style.display="block";
    // }, 300);
})