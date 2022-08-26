function randomQ(){
fetch('http://api.quotable.io/random').then((avdata)=>{
    return avdata.json()
}).then((curdata)=>{
    document.querySelector('.quote').innerHTML= curdata.content;
    document.querySelector('.author').innerHTML= "--"+" "+ curdata.author;
})
}
randomQ();
document.getElementById('next').addEventListener('click',randomQ);


document.getElementById('net').addEventListener('click',()=>{
    document.querySelector('.container1').classList.add('hide');
    document.querySelector('.container').classList.remove('hide');
document.querySelector('button').addEventListener("click",function(){
    var imageLink = 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Mahakal_Temple_Ujjain.JPG', downloadSize = 2663384,
    time_start, time_end,
    downloadSrc = new Image();
    //////////////////////////////////////////////////
    document.querySelector('.circle-content').classList.add('hide')
    document.querySelector('.circle').classList.remove('hide')
///////////////////////////////////////////////////////
    time_start = new Date().getTime();
    var cachesImg = "?nn=" + time_start;
    downloadSrc.src =   imageLink + cachesImg
    //console.log(downloadSrc)
    downloadSrc.onload = function(){
        //the func trigger when image load
        time_end = new Date().getTime()
        var timeDuration = (time_end - time_start) / 1000
        //console.log(timeDuration)
        var loadBytes = downloadSize * 8
        var totalSpeed = ((loadBytes/timeDuration) /1024 / 1024).toFixed(2)
        //console.log(totalSpeed);
        
        document.querySelector('.content').innerHTML=totalSpeed + '<small>Mbps</small>'
 setTimeout(()=>{
        document.querySelector('.circle-content').classList.remove('hide')
    document.querySelector('.circle').classList.add('hide')
    document.querySelector('.content').classList.remove('hide')
},1000)
    }
 })
})


document.getElementById('qnet').addEventListener('click',()=>{
    document.querySelector('.container1').classList.remove('hide');
    document.querySelector('.container').classList.add('hide');
})