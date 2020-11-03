//Excercise 1

function check() {
    if(document.getElementById('password').value === document.getElementById('confirmPassword').value) {
        document.getElementById('message').innerHTML = "It's a match!";
    } 
    else {
        document.getElementById('message').innerHTML = "Not a match!";
    }
}