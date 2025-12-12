function validateLogin(){
    let email = document.getElementById("email").value;
    let pass  = document.getElementById("password").value;

    if(email.trim() === "" || pass.trim() === ""){
        alert("All fields are required!");
        return false;
    }

    if(!email.includes("@gmail.com") || !email.includes(".")){
        alert("Enter a valid email!");
        return false;
    }

    if(pass.length < 6){
        alert("Password must be at least 6 characters!");
        return false;
    }

    alert("Login Successful!");
    return true;
}
