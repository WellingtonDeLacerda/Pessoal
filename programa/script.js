let links = document.querySelector("nav")
let menu1 = document.querySelectorAll("menu")[0]
let menu2 = document.querySelectorAll("menu")[1]
menu2.style.display = "none"
if (window.innerWidth <= 767){
    links.style.display = "none"
}
function mudouTamanho(){
    if (window.innerWidth >= 768){
        links.style.display = "flex"
        
        menu2.style.display = "none"
        menu1.style.display = "none"
    }else{
        links.style.display = "none"
        
        menu2.style.display = "none"
        menu1.style.display = "block"
    }
}
function clicou () {
    if (links.style.display === "none"){
        links.style.display = "flex"
        
        menu2.style.display = "block"
        menu1.style.display = "none"
    }else{
        links.style.display = "none"
        
        menu2.style.display = "none"
        menu1.style.display = "block"
    }
}
/* daqui pra cima programei o menu de navegação */

function jogar(){
    let dadosRadios = document.getElementsByName("dificuldade")
    let caixa = document.querySelector("output")
    caixa.innerText += dadosRadios
}