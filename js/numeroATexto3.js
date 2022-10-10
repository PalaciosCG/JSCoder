//INSTRUCCIONES DE LA FUNCTION
let dataNumber = prompt("Número a convertir")

let inputCurrency = prompt("Ingrese la divisa")

//CALCULADOR UNIDADES
function uniCalc(number){
    return number % 10;
}

//CALCULADOR DECENAS
function decCalc(number){
    return Math.floor((number % 100) / 10);
}

function exportadorDec(numero){
    let unidad = uniCalc(numero);
    let decena = decCalc(numero);
    if(numero <= 15 || unidad == 0){
        return unidades[numero];
    }else{
        return unidadesDecena[decena] + unidades[unidad].toLowerCase();
    }
}
function exportadorCent(numero){
    let centena = Math.floor(numero / 100);
    let noCentena = numero % 100;
    let numeroCent = exportadorDec(noCentena);
    if(centena != 0){
        numeroCent = numeroCent.toLowerCase(); 
    }
    return unidadesCentena[centena] + numeroCent;
}

function resolverNumero(numero){
    if(numero == 0){
        return "Cero"
    }
    let orden = 1
    let numeroExportado = "";
    while (numero > 0){
        let centena = numero % 1000;
        numeroExportado = exportadorGenerico(centena, orden) + numeroExportado;
        numero = Math.floor(numero / 1000);
        orden ++;
    }
    numeroExportado = numeroExportado.toLowerCase()
    return numeroExportado[0].toUpperCase() + numeroExportado.substring(1) + " " + inputCurrency;
}

function exportadorGenerico(numero, aLaCuanto){
    let powcito = 1000
    let centena = (numero % powcito);
    let numeroCent = exportadorCent(centena);
    if(centena != 0){
        numeroCent = numeroCent.toLowerCase();
        let plural = "";
        if(centena > 1 && aLaCuanto > 1){
            plural = "es";
        }
        return numeroCent + modificadores[aLaCuanto - 1] + plural + " ";
    }else {
        return numeroCent;
    }
    
}

const unidades = {
    0 : "",
    1 : "Uno",
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
    1 : "Dieci ",
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

const modificadores = ["", " Mil", " Millon", " Mil millon", " Billon"]
const arregloPotencia = [100, 1000, 1000000, 10000000, 1000000000]
document.write(resolverNumero(dataNumber))
