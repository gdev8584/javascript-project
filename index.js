let display = document.getElementById('input');

// function input(x){
//     display.value=display.value+x;
// }-------------------------------------> for this we use onclick=input('9/8/7..') in html;

let string="";
let buttons= document.querySelectorAll('button');
Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            if(string==' ' || string==0){
                string='';
            }else{
            string = eval(string);}
            display.value=string;
        }
        else if(e.target.innerHTML == 'AC'){
            string=' ';
            display.value=string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string=string.slice(0,-1);
            display.value=string;
        }
        else if(e.target.innerHTML == '%'){
            string=string/100;
            display.value=string;
        }
        else{
            // console.log(e.target)
            string=string + e.target.innerHTML;
            display.value = string;
        }
    })
})

