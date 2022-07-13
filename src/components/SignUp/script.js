const LoginForm = document.getElementById("LoginForm")
const RegForm = document.getElementById("RegForm")
const Indicator = document.getElementById("Indicator")

export function login(){
    
    alert("hello");
    console.log("hello");
            RegForm.style.transform = "translateX(300px)";
            LoginForm.style.transform = "translate(300px)";
            Indicator.style.transform = "translate(0px)";
}

export function regi(){
    alert("hello regi");
    console.log("hello regi");
            RegForm.style.transform = "translateX(0px)";
            LoginForm.style.transform = "translate(0px)";
            Indicator.style.transform = "translate(100px)";
}
