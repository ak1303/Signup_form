
let signup = {
    email:'',
    password:''
};
document.addEventListener('change',(e)=>{ //min 4 char, '@ 'and '.'
    let correct_email=false;
    let correct_password=false;
    if(e.target.id=='email'){
        signup.email=e.target.value;
        let cond1 = signup.email.length>3;
        let cond2 = signup.email.includes('@');
        let cond3 = signup.email.includes('.');
        let error = document.querySelector('.invalid_email');
        if(cond1 && cond2 && cond3){
            error.classList.remove('hide');
            correct_email=true;
        }
        else  error.classList.add('hide');

    }
    if(e.target.id=='password'){
        signup.password=e.target.value;
        if(signup.password.length<=8){
            let error = document.querySelector('.invalid_password');
            error.classList.remove('hide');
            correct_password=true;
        }else  error.classList.add('hide');
    }
    if(correct_email && correct_password){
        let successMsg =document.querySelector('.success');
        successMsg.classList.remove('hide');
        successMsg.classList.add('success');
    }
    console.log(signup);
})

let form = document.getElementById('form1');
form.addEventListener('submit',()=>{
    if(sig)
    alert("hello");
})
