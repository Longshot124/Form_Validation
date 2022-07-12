let but_log = document.querySelector('#btn_log')

but_log.addEventListener('click', (event) => {
    event.preventDefault();
    let userName = document.querySelector('#user_name')
    let password = document.querySelector('#password')
    let email = document.querySelector('#gmail')
    let Letter = document.getElementById('user_name').value.slice(0, 1).toUpperCase()
    let txt = document.getElementById('user_name').value.slice(1).toLowerCase()
    let endun = Letter + txt;
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let resEmail = email.value.match(regex)

    if (userName.value == null || userName.value == "") {
        alert('Please fill in UserName')
    } else {
        document.querySelector('#userName').innerHTML = endun;
    }
    if(password.value == null || password.value == ""){
        alert('Please enter your password')
    }
    
    if(password.value.lenght < 6) {
        alert('Password must contain  6 characters')
    } 
    if(password.value.lenght==6){
        alert('Password level : weak')
    }
    if(password.value.lenght>6){
        alert('Password level : normal')
    }
        
    
    if (email.value == null || email.value == "") {
        alert('Email is empty')
    } 
    else {
        if (resEmail) {
            document.querySelector('#mail').innerHTML = resEmail;
        } else {
            alert('Enter your email correctly')
        }
    }
})
