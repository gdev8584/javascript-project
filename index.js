function highlight() {
    let newParaElText = ''
    let count = 0
    const paraEl = document.querySelector('#paragraph-input')
    const word = document.querySelector('#word-input')
    const wordCounterEl = document.querySelector('#words-counter')
    const ignoreCaseInput = document.querySelector('#ignore-case').checked;
    console.log(ignoreCaseInput);
    if(!word.value) return;
    if(ignoreCaseInput){
        let resultWord = new RegExp(word.value,'ig');
        newParaElText = paraEl.innerText.replaceAll(resultWord, (section) => {
           console.log(section);
            count++;
            return `<span class="highlighted-txt">${section}</span>`
        });
    }
    else{
        newParaElText = paraEl.innerText.replaceAll(word.value, (section) => {
           console.log(section);
            count++;
            return `<span class="highlighted-txt">${section}</span>`
        });
    }
    paraEl.innerHTML = newParaElText
    wordCounterEl.innerText = count;
}