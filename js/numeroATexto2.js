//Mi idea inicial fue hacer un input donde ingreses un número en formato numérico y te lo devuelva en números cardinales (o sea, escrito)
//La verdad es que quería salirme un poco de la lógica del carrito de compras y preferí arrancar por esto y ver si luego puedo ampliarlo como proyecto final o si 
//voy a tener que empezar otro proyecto de 0. Entendí que para esta entrega no hacía falta implementar funciones, aunque estoy viendo que para lo que estoy 
//tratando de armar sería mucho muy necesario, estoy pensando que se podría armar una funcion que haga el cálculo de las decenas/centenas etc y al final solo
//concatenar lo que devuelven. Googleando un poco también vi que las unidades se podrían hacer con un switch pero como no entendí la lógica que usaban preferí hacerlo
//a mi manera y después tratar de entenderlo.


//INGRESO DE NUMERO
let numeroConvertible = prompt("Precio a convertir")

//TIPO DE MONEDA
let moneda = prompt("Ingresá el tipo de moneda")
const space = " "

//UNIDADES BASICAS
const unidades = {
    0 : "Cero",
    1 : "Un",
    2 : "Dos",
    3 : "Tres",
    4 : "Cuatro",
    5 : "Cinco",
    6 : "Seis",
    7 : "Siete",
    8 : "Ocho",
    9 : "Nueve",
    10 : "Diez",
    11 : "Once",
    12 : "Doce",
    13 : "Trece",
    14 : "Catorce",
    15 : "Quince",
    20 : "Veinte",
    30 : "Treinta",
    40 : "Cuarenta",
    50 : "Cincuenta",
    60 : "Sesenta",
    70 : "Setenta",
    80 : "Ochenta",
    90 : "Noventa",
    100: "Cien"
}

const unidadesDecena = {
    0 : "",
    1 : "",
    2 : "Veinti ",
    3 : "Treinta y ",
    4 : "Cuarenta y ",
    5 : "Cincuenta y ",
    6 : "Sesenta y ",
    7 : "Setenta y ",
    8 : "Ochenta y ",
    9 : "Noventa y ",
    
}
const unidadesCentena = {
    0 : "",
    1 : "Ciento ",
    2 : "Doscientos ",
    3 : "Trescientos ",
    4 : "Cuatrocientos ",
    5 : "Quinientos ",
    6 : "Seiscientos ",
    7 : "Setecientos ",
    8 : "Ochocientos ",
    9 : "Novecientos ",
}

const unidadesMil = {
    0 : "Cero",
    1 : "Mil ",
    2 : "Dos mil ",
    3 : "Tres mil ",
    4 : "Cuatro mil ",
    5 : "Cinco mil ",
    6 : "Seis mil ",
    7 : "Siete mil ",
    8 : "Ocho mil ",
    9 : "Nueve mil ",
}



if(numeroConvertible < 15){
    //CALCULADOR PARA DECENAS, CENTENAS,

    let decena = Math.floor(numeroConvertible / 10);
    let centena = Math.floor(numeroConvertible / 100);
    let miles = Math.floor(numeroConvertible / 1000);

    let uniDec = numeroConvertible - (decena * 10);
    let uniCent = numeroConvertible - (centena * 100);

    //EVALUADOR DE INDICES//

    const unidadDecenas = unidadesDecena[decena] + unidades[uniDec].toLowerCase()
    const unidadCentena = unidadesCentena[centena]
    const unidadMil = unidadesMil[miles]
   
    let numeroConvertido = unidades[numeroConvertible]
    alert("Número convertido: " + numeroConvertido + space + moneda)
}else if(numeroConvertible == 20){
    let numeroConvertido = unidades[numeroConvertible]
    alert("Número convertido: " + numeroConvertido + space + moneda)
}else if(numeroConvertible == 30){
    let numeroConvertido = unidades[numeroConvertible]
    alert("Número convertido: " + numeroConvertido + space + moneda)
}else if(numeroConvertible == 40){
    let numeroConvertido = unidades[numeroConvertible]
    alert("Número convertido: " + numeroConvertido + space + moneda)
}else if(numeroConvertible == 50){
    let numeroConvertido = unidades[numeroConvertible]
    alert("Número convertido: " + numeroConvertido + space + moneda)
}else if(numeroConvertible == 60){
    let numeroConvertido = unidades[numeroConvertible]
    alert("Número convertido: " + numeroConvertido + space + moneda)
}else if(numeroConvertible == 70){
    let numeroConvertido = unidades[numeroConvertible]
    alert("Número convertido: " + numeroConvertido + space + moneda)
}else if(numeroConvertible == 80){
    let numeroConvertido = unidades[numeroConvertible]
    alert("Número convertido: " + numeroConvertido + space + moneda)
}else if(numeroConvertible == 90){
    let numeroConvertido = unidades[numeroConvertible]
    alert("Número convertido: " + numeroConvertido + space + moneda)
}else if(numeroConvertible < 100){
    //CALCULADOR PARA DECENAS, CENTENAS,

    let decena = Math.floor(numeroConvertible / 10);
    let centena = Math.floor(numeroConvertible / 100);
    let miles = Math.floor(numeroConvertible / 1000);

    let uniDec = numeroConvertible - (decena * 10);55
    let uniCent = numeroConvertible - (centena * 100);

    console.log(uniDec)
    //EVALUADOR DE INDICES//

    const unidadDecenas = unidadesDecena[decena] + unidades[uniDec].toLowerCase()
    const unidadCentena = unidadesCentena[centena]
    const unidadMil = unidadesMil[miles]
    
    let numeroConvertido = unidadDecenas
    alert("Número convertido: " + numeroConvertido + space + moneda)
}else if(numeroConvertible > 100){
    //CALCULADOR PARA DECENAS, CENTENAS,

    let decenaCent = Math.floor(numeroConvertible / 100);
    let decenaCent2 = Math.floor(numeroConvertible - decenaCent * 100)
    let decena = Math.floor(decenaCent2 / 10)
    let centena = Math.floor(numeroConvertible / 100);
    let miles = Math.floor(numeroConvertible / 1000);

    let uniDec = decenaCent2 - (decena * 10);
    console.log(uniDec)
    let uniCent = numeroConvertible - (centena * 100);

    //EVALUADOR DE INDICES//

    const unidadDecenas = unidadesDecena[decena].toLowerCase() + unidades[uniDec].toLowerCase()
    const unidadCentena = unidadesCentena[centena]
    const unidadMil = unidadesMil[miles]
    let numeroConvertido = unidadCentena + unidadDecenas
    alert("Número convertido: " + numeroConvertido + space + moneda)
}