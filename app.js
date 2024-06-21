
let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;
console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento,texto);
    elementoHTML.innerHTML=texto;
    return;
}

function verificarIntento(){

    let numeroDelUsuario=parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log(intentos);
    if(numeroDelUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos==1?'vez':'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }
    else{
        if(numeroDelUsuario>numeroSecreto){
            asignarTextoElemento('p','El número es menor');
            }   
        else {
            asignarTextoElemento('p','El número es mayor');
               
        }
        intentos++;
        limpiarCaja();
    }
   
     return;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar  mensaje de intervalo de numeros
    condicionesIniciales();
    //deshabilitar boton de nuevo
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    

}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');    
    }
    else{
            //si el numero existe en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
    }
    }
    
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Número Secreto!!!');
    asignarTextoElemento('p',`Escoge un numero del 1 al ${numeroMaximo} ` );
    //Generar el numero aleatorio
    numeroSecreto=generarNumeroSecreto();
    //inicializar el numero de intentos
    intentos=1;
  

}

condicionesIniciales();

