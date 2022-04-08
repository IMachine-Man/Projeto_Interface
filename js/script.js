var formEntrar = document.querySelector('#signin')
var formCadastrar = document.querySelector('#signup')
var btnCor = document.querySelector('.btnCor')
const corsProxy = "https://elany-cors-proxy.herokuapp.com/"
const apiUrl = "https://projeto-interface-api.herokuapp.com"

document.querySelector('#btnSignIn').addEventListener('click', () => {
    formEntrar.style.left = "25px",
    formCadastrar.style.left = "450px",
    btnCor.style.left = "0px"
})

document.querySelector('#btnSignUp').addEventListener('click', () => {
    formEntrar.style.left = "-450px",
    formCadastrar.style.left = "25px",
    btnCor.style.left = "110px"
})

/* LOGAR */

function logar(){
    var email = document.getElementById('email').value;

    var senha = document.getElementById('senha').value;

    if(email == "admin" && senha == "admin"){

        location.href = "index.html"
    }else {
        alert("E-mail ou senha incorretos")
    }
}
