
var setadireita = window.document.getElementById("setadireita")
var setaesquerda = window.document.getElementById("setaesquerda")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")

function RolarParaDireita() {
samantha.style = "display:none"
leonardo.style = "display:flex"
setadireita.style = "display:none"
setaesquerda.style = "display:flex; margin-top:75px"

}

function RolarParaEsquerda() {

    setadireita.style = "display:flex; margin-top:55px"
    setaesquerda.style = "display.none"
    samantha.style = "display:flex"
    leonardo.style = "display:none" 

}