function ver(){
    cesta.innerHTML = "";
    if (sessionStorage.length == 0)
        cesta.innerHTML = <h5>"No hay productos en la cesta"</h5>;
    else {
        cesta.innerHTML = "<table class=pro width=90%><tr><th>PRO</th><th align=center>UNDS</th><th>Eliminar</th></tr></table>";
        for (i = 0; i < sessionStorage.length; i++) {
            cesta.innerHTML += "<table class'pro' width=90%><tr><td>" + sessionStorage.key(i) + "</td><td align=center>" + sessionStorage.getItem(sessionStorage.key(i)) + "</td><td><button onclick='eliminar(" + sessionStorage.key(i) + ")'>Eliminar</button></td></tr></table>";
        }
    }
}

function almacenar(codigo) {
    if (sessionStorage.getItem(codigo) == null)
        sessionStorage.setItem(codigo, 1);
    else
        sessionStorage.setItem(codigo, parseInt(sessionStorage.getItem(codigo)) + 1);
    ver();
}