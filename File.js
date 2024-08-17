const form =document.getElementById('form');
const username =document.getElementById('username');
const email =document.getElementById('amail');
const password =document.getElementById('passsword');
const password2 =document.getElementById('passsword2');
    form.addEveentlisttener('submit'e => {
        e. preventDefault();
        validateInputs();
    });
const setError =(element,message)=>{
const inputControl = element.parentElement;
const errorDisplay =inputControl.querySelector('.error');

        errorDisplay.innerText= message;
        inputControl.classList.add('error');
        inputControl .classList.remove('success')
    }
    const inputControl = element. parentElement => {
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    };
    const isvalidEmail=email=>{
    const re =/^(([^<>()[/]\\.,;:\s@"]+(\.[^<>([\]\\.,;:\s@"]+)+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-Az-z\-0-9]+\.)+[a-Az-z]{2,}))$/;
    return re.test(string(email).tolowercase())
    }
    const usernameValue=() =>{
    const usernamevalue = username .value. trim();
    const emailvalue         =email .value. trim();
    const passwordvalue =password .value. trim();
    const password2value = password2 .value.  trim();
}
if(usernameValue===''){
    setError(username,'Username is required');
}else{
    setsuccess(username);
}
   if(emailvalue === ''){
    setError(email,'Email is required');
   }else if (!isvalidEmail(emailvalue)){
    setError(email, 'provide a valid a email address');
   }else{
setsuccess(email);
   }
if(password===''){
    setError(password, 'password is required');
}else if(passwordvalue .length  <8){
    setError(password,'passwordmust be at least 8 character.' )
    }else{
        setsuccess(password);
    }
if (passwordvalue===''){
    setError(password2, 'please confirm your password');
}else if (password2value !== passwordvalue){
    setError(password2, "passwords doesn't match");
}else {
    setsuccess(password2);
}
  