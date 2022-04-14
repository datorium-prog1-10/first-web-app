function Sasvecinaties(){
    alert('Welcome to Datorium!');
}

function CheckUsernamePassword(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username == 'demo' && password == 'demo'){
        alert('Log in successful. Welcome to Datorium!')
    }
    else{
        alert('Access denied!')
    }
}


