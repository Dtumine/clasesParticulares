
function validar(){
    let campos = document.getElementsByClassName('campo')

    for(let i=0; i<campos.length; i++)
    {
    campos[i].classList.remove("error")
    }

    for(let i=0; i<campos.length; i++){
     
    if(campos[i].value.trim() === "") 
    {
        campos[i].classList.add('error');
    }
    }
}