
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


// Crear una función que muestre "¡Hola, mundo!" en la consola.
// function saludo(){
//     return console.log('Hola Mundo');
// }
// saludo();

// // Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
// function saludo2(nombre){
//     return console.log(`Hola ${nombre}`);
// }
// saludo2('Eduardo');

// // Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

// function doblarNumero(numero ){
//     return (numero*2);
// }
// console.log(doblarNumero(5));

// // Crear una función que reciba tres números como parámetros y devuelva su promedio.

// function promedio(num1,num2,num3){
//     let promedio =(num1+num2+num3)/3;
//     return console.log(promedio);
// }
// promedio(10,8,9);

// // Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

// function esMayor(num1,num2){
    
    
//     return num1>num2 ?num1:num2;
// }
// console.log(esMayor(73,24));

// // Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

// function cuadradoNumero(numero ){
//     return (numero*numero);
// }
// console.log(cuadradoNumero(5));


// Desafíos:
// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
// function calcularIMC(peso,altura) {
//     return peso/((altura/100)*(altura/100));
// }
// console.log(calcularIMC(94,182));

// // Crea una función que calcule el valor del factorial de un número pasado como parámetro.

// function calcularFactorial(numero) {
//     if(numero===0 || numero===1)
//         return 1;
//     else{
//         return numero * calcularFactorial(numero-1);
//     }
// }

// console.log(calcularFactorial(3));

// // Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en 
// //reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

// function convertirMonedaUSD(cantidad){
//     return cantidad*18.65;
// }
// console.log(convertirMonedaUSD(100));

// // Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

// function areaRectangulo(base,altura){
//     return base*altura;
// }
// console.log(areaRectangulo(50,20));


// // Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

// function calcularAreaPerimetroCirculo(radio){

//     return console.log(`El area es :${3.14*radio*radio} y el perimetro es ${2*3.14*radio}`)
// }

// calcularAreaPerimetroCirculo(4);


// // Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

// function tablaMultiplicar(numero){
//     console.log(`Tabla del ${numero}`);
//     let index=1
//     while (index<=10){
//         console.log(`${numero} X ${index} = ${numero*index}`);
//         index++;
//     }
// }

// tablaMultiplicar(33);
// Desafíos
// Crea una lista vacía llamada "listaGenerica".

// let listaGenerica=[];

// // Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
// let lenguagesDeProgramacion=['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
// // Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
// lenguagesDeProgramacion.push('Java', 'Ruby' , 'GoLang');

// console.log(lenguagesDeProgramacion);

// // Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

// function mostrarLenguajes() {
//     for(let i=0;i<lenguagesDeProgramacion.length;i++){
//         console.log(lenguagesDeProgramacion[i]);
//     }
    
// }
// mostrarLenguajes();



// // Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

// function mostrarLenguajesInverso() {
//     for(let i=lenguagesDeProgramacion.length-1;i>=0;i--){
//         console.log(lenguagesDeProgramacion[i]);
//     }
    
// }
// mostrarLenguajesInverso();

// // Crea una función que calcule el promedio de los elementos en una lista de números.
// function calcularPromedio(lista){
//     let suma=0;
//     for(let i=0;i<lista.length;i++){
//         suma+=lista[i];
//     }
//     return suma/lista.length;
// }

// let listaNumeros=[4,5,6,4,5,6,4];
// console.log(calcularPromedio(listaNumeros));


// // Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
// function mostrarMaxMin(lista){
//     let mayor=lista[0];
//     let menor=lista[0];
//     let res=[]
//     for (let i=1;i<lista.length;i++){
//         if(lista[i]>mayor){
//             mayor=lista[i];
//         }
//         if(lista[i]<menor){
//             menor=lista[i];
//         }
//     }
//     res.push(mayor,menor)
//     return res;
// }
// let numerosLista=[50,2,75,33,85,21,1,100];
// console.log(`De la lista ${numerosLista} el numero mayor es ${mostrarMaxMin(numerosLista)[0]} y el menor es ${mostrarMaxMin(numerosLista)[1]}`);


// // Crea una función que devuelva la suma de todos los elementos en una lista.

// function sumaTodos(lista){
//     let suma=0;
//     for(let i=0;i<lista.length;i++){
//         suma+=lista[i];
//     }
//     return console.log(`La suma de la lista ${lista} es igual : ${suma}`);
// }

// sumaTodos(numerosLista);

// // Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

// function posicionElemento(lista,elemento){
//     for(let i=0;i<lista.length;i++){
//         if(lista[i]==elemento){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(posicionElemento(numerosLista,23)==-1? 'No existe el elemento': `La posicion del elemento es ${posicionElemento(numerosLista,75)}`);

 

// // Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
// function sumaListas(lista1,lista2){
//     let suma=[];
//     for(let i=0;i<lista1.length;i++){
//         suma[i]=lista1[i]+lista2[i];
//     }
//     return suma;
// }
// console.log(sumaListas([1,33,4],[2,6,8]));


// // Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
// function cuadradoListas(lista){
//     let cuadradoLista=[];
//     for(let i=0;i<lista.length;i++){
//         cuadradoLista[i]=lista[i]*lista[i];
//     }
//     return cuadradoLista;
// }
// console.log(cuadradoListas([1,33,4]));
