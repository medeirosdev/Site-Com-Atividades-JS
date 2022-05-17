//--------------------------------------- criptografia------------------------------------------
const btn1 = document.querySelector("#buttoncrip1");
const btn2 = document.querySelector("#buttoncrip2")

const input1 = document.querySelector("#inputcripto1")
const input2 = document.querySelector("#inputdescripto")

const resultado = document.getElementById("ptext")

const ciclo = [ "a", "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" ,"l" ,"m" , "n" , "o" , "p" , "q" 
, "r" , "s" , "t" , "u" , "v" , "w" , "y" , "z"]
//19
const criptografar = () => {
    const valor = input1.value;
    const array2 = valor.split('');
    const arrayfinal2 = [];
    for(let item of array2){
        n = ciclo.indexOf(item);
        m = n + 6;
        if ( m>= 25){
            m -= 25
            arrayfinal2.push(ciclo[m]);
        }
        else{
            arrayfinal2.push(ciclo[m]);
        }
        
    }
    stringf = arrayfinal2.join([j = ''])
    resultado.innerHTML = stringf
    input1.innerHTML = ""
}

btn1.addEventListener("click" , criptografar);



function descriptografar() {
    const valor2 = input2.value;
    const array3 = valor2.split('');
    const arrayfinal3 = [];
    for (item of array3) {
        n = ciclo.indexOf(item);
        m = n - 6;
        if (m < 0) {
            m += 25;
            arrayfinal3.push(ciclo[m]);
        }
        else if(m === 0){
            
            arrayfinal3.push(ciclo[0]); }
        
        else {
            arrayfinal3.push(ciclo[m]);
        }

        stringf = arrayfinal3.join([j = '']);
        resultado.innerHTML = stringf;
        input2.innerHTML = "";

    }
}

btn2.addEventListener("click", descriptografar);



