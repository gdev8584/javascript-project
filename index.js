const menu = document.querySelectorAll('.mobile-nav-icon')[0];
const close = document.querySelectorAll('.mobile-nav-icon')[1];
menu.addEventListener('click',()=>{
    document.querySelector('.icon').classList.add('active1')
    menu.classList.add('active1')
    close.classList.remove('active1')
})
close.addEventListener('click',()=>{
    document.querySelector('.icon').classList.remove('active1');
    close.classList.add('active1')
})
const a = document.querySelectorAll('.link');
Array.from(a).map((a)=>{
    a.addEventListener('click',(e,ind)=>{
        document.querySelector('.icon').classList.remove('active1');
    })
})

const arrowb = document.getElementById('arrow1');
const arrowf = document.getElementById('arrow2')
let cnt =0;
const box = document.querySelectorAll('.box');
console.log(box)
let xit = box.length;
arrowb.addEventListener('click',()=>{
    cnt--
    console.log(cnt)
    if(cnt>=0){
        box[cnt+1].classList.add('novissible')
        box[cnt].classList.remove('novissible')
    }
    if(cnt==-1){
        cnt=0
    }
})
arrowf.addEventListener('click',()=>{
    cnt++
    if(cnt<xit){
        box[cnt-1].classList.add('novissible')
        box[cnt].classList.remove('novissible')
    }
    console.log(cnt)
    if(cnt==xit){
        cnt=xit-1
    }
})

