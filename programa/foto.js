// parte das minhas fotos
function abrir1 () {
    window.location.href = "../img/Wellington1.png"
}
function abrir2 () {
    window.location.href = "../img/Wellington2.png"
}
function abrir3 () {
    window.location.href = "../img/Wellington3.png"
}
function abrir4 () {
    window.location.href = "../img/Wellington4.png"
}
function abrir5 () {
    window.location.href = "../img/Wellington5.png"
}
function abrir6 () {
    window.location.href = "../img/Wellington6.png"
}
function abrir7 () {
    window.location.href = "../img/Wellington7.png"
}
// parte dos meus desenhos
function Abrir1 () {
    window.location.href = "../img/Desenho.jpg"
}
function Abrir2 () {
    window.location.href = "../img/Desenho2.jpg"
}
function Abrir3 () {
    window.location.href = "../img/Desenho3.jpg"
}
function Abrir4 () {
    window.location.href = "../img/Desenho4.jpg"
}
function Abrir5 () {
    window.location.href = "../img/Desenho5.jpg"
}
function Abrir6 () {
    window.location.href = "../img/Desenho6.jpg"
}
function Abrir7 () {
    window.location.href = "../img/Desenho7.jpg"
}

function carregar() {
    let elemento = document.getElementById("ft1")
    let elemento2 = document.getElementById("ft2")
    let elemento3 = document.getElementById("ft3")
    let elemento4 = document.getElementById("ft4")
    let elemento5 = document.getElementById("ft5")
    let elemento6 = document.getElementById("ft6")
    let elemento7 = document.getElementById("ft7")
    
     // Pegamos o elemento pelo ID

    if (window.innerWidth >= 992) { // Se a largura for 768px ou maior
        if (elemento || elemento2 || elemento3 || elemento4 || elemento5 || elemento6 || elemento7) { 
            elemento.onmouseenter = null
            elemento2.onmouseenter = null
            elemento3.onmouseenter = null
            elemento4.onmouseenter = null
            elemento5.onmouseenter = null
            elemento6.onmouseenter = null
            elemento7.onmouseenter = null
            // Remove a função onmouseenter
        }
    }
}

// Executa a função quando a página carregar e quando for redimensionada
window.onload = carregar;
window.onresize = carregar;