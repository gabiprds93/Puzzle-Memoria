var imagenes = ["img/Bellwether.jpg", "img/Clawhauser.jpg", "img/Finnick.jpg", "img/Flash.jpg", "img/JudyHopps.jpg", "img/Lionheart.jpg", "img/NickWilde.jpg", "img/Yax.jpg"];
var cajas = $(".caja");
//document.getElementsByClassName("caja");
var arreglo = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
var arregloAleatorio = [];
var cont = 0;
var flag = true;
var seleccionados = [];
console.log(cajas);
console.log(cajas.length);
for(var i = 0; i < cajas.length; i++)
{
    do
    {
        var bandera = false;
        var num = Math.floor((Math.random() * cajas.length));
        for(var i = 0; i < arregloAleatorio.length; i++)
        {
            if(num == arregloAleatorio[i])
            {
                bandera = true;
            }
        }
        if(!bandera)
        {
            arregloAleatorio.push(num);
        }
    }while(bandera)
    cajas[arregloAleatorio[i]].name = arreglo[i];
    console.log(cajas[i]);
    cajas[i].addEventListener("click", function(e)
    {
        if(flag)
        {
            if(seleccionados[0] != this)
            {
                cont++;
                this.style.backgroundImage = "url('" + imagenes[this.name] + "')" ; 
            }
            if(cont == 1)
            {
                seleccionados[0] = this;
            }
            else if(cont == 2)
            {
                flag = false;
                seleccionados[1] = this;
                cont = 0;
                setTimeout(comparar, 1000);
                setTimeout(esconder, 1000);
            }
        }
    });
}

function esconder()
{
    for(var i = 0; i < cajas.length; i++)
    {
        cajas[i].style.backgroundImage = "";
    }
    flag = true;
}

function comparar()
{
    if(seleccionados[0].style.backgroundImage == seleccionados[1].style.backgroundImage)
    {
        seleccionados[0].classList.add("desaparecer");
        seleccionados[1].classList.add("desaparecer");
    }
}