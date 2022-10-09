

//INSTRUCCIONES DE LA FUNCTION
let dataNumber = prompt("Número a convertir")

// let inputCurrency = prompt("Ingrese la divisa")

//CALCULADOR UNIDADES
function uniCalc(){
    if(dataNumber < 10){
        return Math.floor(dataNumber);
    }else if(dataNumber < 100 && dataNumber > 10){
        let decena = Math.floor(dataNumber / 10);
        return Math.floor(dataNumber - (decena * 10));
    }else if(dataNumber > 100){
        let decena = Math.floor(dataNumber / 10);
        return Math.floor(dataNumber - (decena * 10));
    }else if(dataNumber > 1000){
        let decena = Math.floor(dataNumber / 1000);
        return Math.floor(dataNumber - (decena * 1000));
    }else if(dataNumber > 10000){
        let decena = Math.floor(dataNumber / 10000);
        return Math.floor(dataNumber - (decena * 10000));
    }else if(dataNumber > 100000){
        let decena = Math.floor(dataNumber / 100000);
        return Math.floor(dataNumber - (decena * 100000));
    }
}

//CALCULADOR DECENAS
function decCalc(){
    if(dataNumber < 100){
        return Math.floor(dataNumber / 10);
    }else if(dataNumber > 100){
        let decCent = Math.floor(dataNumber / 100);
        return Math.floor((dataNumber - (decCent * 100)) / 10);
    }else if(dataNumber > 1000){
        let decMil = Math.floor(dataNumber /1000);
        return Math.floor(((dataNumber - (decMil * 1000) / 10 ) /10) / 10);
    }
}

//CAlCULADOR CENTENAS
function centCalc(){
    if(dataNumber > 100 && dataNumber < 1000){
        return Math.floor(dataNumber / 100);
    }else if(dataNumber > 1000){
        let centena = Math.floor(dataNumber / 1000);
        return Math.floor((dataNumber - (centena * 1000)) / 100);
    }
}

//CALCULADOR MILES
function milCalc(){
    if(dataNumber > 1000){
        return Math.floor(dataNumber / 1000);
    }
}

let unidad = uniCalc();
let decena = decCalc();
let centena = centCalc();
let miles = milCalc();

console.log(unidad);
console.log(decena);
console.log(centena);
console.log(miles);


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


let exportNumber = unidades[miles] + unidadesCentena[centena] + unidadesDecena[decena] + unidades[unidad]

console.log(exportNumber)