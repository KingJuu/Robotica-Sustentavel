
function tamanhoFonte(step){
    var fontSize = parseFloat(getComputedStyle(documento.body).fontSize);
    var newFontSize = fontSize + step;

    document.style.fontSize = newFontSize + "px";
}