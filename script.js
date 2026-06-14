function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "Santhu" && password == "1234") {

        alert("Hey! Successfully Logged In.");

        window.location = "welcome.html";

    } else {

        document.getElementById("error").innerHTML =
            "Invalid Username or Password";

    }
}