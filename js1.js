





// página da lampada mágica //
const lamp1 = document.getElementById("lampada1");

function magica(x)
{
    if(x = "1"){
        lamp1.src = "lampada2.jpg"
    }
    else if (x = "2"){
        lamp1.src = "lampada3.jpg"
    }

    else if (x = "3"){
        lamp1.src = "lampada4.jpg"
    }

    else if (x = "4"){
        lamp1.src = "lampada5.jpg"
    }

}





//--------------------------------------- parte do countdown ------------------------------------------
const dias1 = document.getElementById("dias2")
const horas1 = document.getElementById("horas2")
const minutos1 = document.getElementById("minutos2")
const segundos1 = document.getElementById("segundos2")

//var dias = horas * 24;
//var horas = minutos * 60;
//var minutos = segundos * 60;
//var segundos = milsec * 1000;
//var milsec




function countdown(){
    const newYearDate = Date.parse("Jan 1 , 2023") // o Date.parse pega quantos milliseconds desde de 1 jan 1970

    const hoje = Date.now() // in milliseconds
    
    const deltaT = newYearDate - hoje;
    
    const totalSegundos = Math.floor(deltaT/1000)




    const dias2 = Math.floor(totalSegundos / 3600 / 24);
    const horas2 = Math.floor(totalSegundos / 3600) % 24;
    const minutos2 = Math.floor(totalSegundos / 60) % 60;
    const segundos2 = Math.floor(totalSegundos) % 60;

    dias1.innerHTML = dias2;
    horas1.innerHTML = formatTime(horas2);
    minutos1.innerHTML = formatTime(minutos2);
    segundos1.innerHTML = formatTime(segundos2)


    

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}


countdown();

setInterval(countdown,1)



//--------------------------------------- fim da parte do countdown ------------------------------------------
























