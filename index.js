const fname = document.getElementById("fname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const password2 = document.getElementById("password2")
const form = document.getElementById("form");

form.addEventListener("submit",(event) => {
        event.preventDefault();
        Validate();
    })
const Validate = () =>{
    const nameVal = fname.value.trim();
    const emailval = email.value.trim();
    const phoneval = phone.value.trim();
    const passwordval = password.value.trim();
    const password2val = password2.value.trim();
    // validate Namme
    if(nameVal===''){
        setErrorMsg(fname,'Name cannot be blank')
    }else if(nameVal.length<3){
        setErrorMsg(fname,'more than 3')
    }
    else{
        setSuccessMsg(fname);
    }
}
function setErrorMsg(input,errorMsg){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    formControl.className = 'form error'
    small.innerText=errorMsg;
}
function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = 'form success'
    document.querySelector('.btn').disabled=false
}