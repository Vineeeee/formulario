const inputs = document.querySelectorAll("input")
const botao = document.querySelector("button")
const div = document.getElementsByClassName("campo-obrigatorio")

botao.addEventListener("click", function (){
     inputs.forEach(function (input, numero){
        if (input.value == "") {
            input.classList.remove("input")
            input.classList.add("bordaVermelha")
            div[numero].classList.remove("none")
        }else{
            input.classList.remove("bordaVermelha")
            div[numero].classList.add("none")
        }
     })
})
