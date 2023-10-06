// script.js
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // You should implement proper authentication here
    // For simplicity, we'll just check if the username and password match
    if (username === "rean24@gmail.com" && password === "rean24@") {
        document.getElementById("login").textContent="Login successful!";
        let text = "Start now!";
let result = text.link("https://sokdavit59.github.io/webpage/");
     document.getElementById("login-status").innerHTML= result;//textContent="Login successful!";
     result = "<https://sokdavit59.github.io/webpage/>" + text + "</a>";
    
     
    
    } else {
        document.getElementById("login-status").textContent = "Wrong username or password.";
    }
});
