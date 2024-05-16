function cambiarTextos()
{

    let elementosTexto = document.getElementsByClassName("texto")

    for(var i=0;i<elementosTexto.length;i++)
    {
        elementosTexto[i].textContent = "Texto selecionado y modificado"
    }
}