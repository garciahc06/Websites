function negrita() {
   document.execCommand("bold", false, null);
}

function cursiva() {
    document.execCommand("italic", false, null);
}

function subrayado() {
    document.execCommand("underline", false, null);
}

function alineai() {
    document.execCommand("justifyLeft", false, null);
}

function alineac() {
    document.execCommand("justifyCenter", false, null);
}

function alinead() {
    document.execCommand("justifyRight", false, null);
}

function alineaf() {
    document.execCommand("justifyFull", false, null);
}

function listano() {
    document.execCommand("insertUnorderedList", false, null);
}

function listao() {
    document.execCommand("insertOrderedList", false, null);
}

function subi() {
    document.execCommand("subscript", false, null);
}

function supi() {
    document.execCommand("superscript", false, null);
}

function fontcolor() {
    var color = prompt("Introduzca el color de la fuente");
    document.execCommand("foreColor", false, color);
}

function fontbackcolor() {
    var color = prompt("Introduzca el color de fondo");
    document.execCommand("backColor", false, color);
}
function insertarImagen() {
    var url = prompt("Introduzca la URL de la imagen", "http://");
    document.execCommand("insertImage", false, url);
}

function insertarEnlace() {
    var url = prompt("Introduzca la URL del enlace", "http://");
    document.execCommand("createLink", false, url);
}

function publicar() {
    var contenido = document.getElementById("editor").innerHTML;
}
