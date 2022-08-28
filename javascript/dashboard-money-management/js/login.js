const loginBtn = document.getElementById("login-btn")

loginBtn.addEventListener('click',()=>{
    const emailValue = document.getElementById('email')
    const passwordValue = document.getElementById('password')
    if(emailValue.value === 'mamun@gmail.com' && passwordValue.value === 'mamun')
    {
        location.href = './page/money.html'
    }
    else{
        alert("Please input valid email or password")
    }
    emailValue.value = "";
    passwordValue.value = "";
})