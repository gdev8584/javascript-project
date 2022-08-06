var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

var textbox = $("#textbox")

var instruction = $('#instruction')

var butt = $('#start-btn')

var content = ''

recognition.continuous = true

// recognition is started
recognition.onspeechend = function(){
    instruction.text("No Activity")
}

recognition.onerror = function() {
    instruction.text("Try Again")
}

recognition.onresult = function (event){
    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript

    content += transcript
    textbox.val(content)
}

var cnt=0;
butt.click(function (event){
    cnt++;
    if(content.length){
        content += ''
    }
    if(cnt%2!=0){
    butt.text('Stop');
    instruction.text("Voice Recognition is ON")
    recognition.start()}
    else{
        butt.text('Start');
        instruction.text("Press The Start Button")
        recognition.stop()
    }
})

 text.on('input', function(){
    content = $(this).val()
 })
