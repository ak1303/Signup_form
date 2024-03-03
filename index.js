
let signup = {
    email:'',
    password:''
};
function checkEmail(email){
    let cond1 = email.length>3;
    let cond2 = email.indexOf('@')!=-1;
    let cond3 = email.indexOf('.')!=-1;
    let error = document.querySelector('.invalid_email');
    if(cond1 && cond2 && cond3){
        error.classList.add('hide');
    }
    else  error.classList.remove('hide');
}
function checkPasword(password){
    let error = document.querySelector('.invalid_password');
    if(password.length<=8){
        error.classList.remove('hide');
    }else  error.classList.add('hide');
}
document.addEventListener('change',(e)=>{
    if(e.target.id=='email'){
        signup.email=e.target.value;
        checkEmail(signup.email);
    }
    if(e.target.id=='password'){
        signup.password=e.target.value;
        checkPasword(signup.password);
    }
})
let successMsg =  document.querySelector('.success');
let invEmail = document.querySelector('.invalid_email');
let invPass = document.querySelector('.invalid_password');
document.addEventListener('input',(e)=>{ //min 4 char, '@ 'and '.'
    let valid =true;
    if(e.target.id=='password'){
        let password=e.target.value;
        let cond1 = signup.email.length>3;
        let cond2 = signup.email.indexOf('@')!=-1;
        let cond3 = signup.email.indexOf('.')!=-1;
        let cond4 = password.length>8;
        if(!cond1 || !cond2 || !cond3 || !cond4){
            valid=false;
        }else valid=true;
    }
    if(e.target.id=='email'){
        let email=e.target.value;
        let cond1 = email.length>3;
        let cond2 = email.indexOf('@')!=-1;
        let cond3 = email.indexOf('.')!=-1;
        let cond4 = signup.password.length>8
        if(!cond1 || !cond2 || !cond3 || !cond4){
            valid=false;
        }else valid=true;
    }
    if(valid){
        invEmail.classList.add('hide');
        invPass.classList.add('hide');
        successMsg.classList.remove('hide');
    }
    else successMsg.classList.add('hide');
});

let form = document.getElementById('form1');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(invEmail.classList.contains('hide') && invPass.classList.contains('hide')){
        let response = window.confirm('Are you sure you want to submit form');
        if(response){
            successMsg.classList.add('hide');
            signup.email='';
            signup.password='';
            alert("Successful signup!");
            form.reset();   
        }
    }
})
