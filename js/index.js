//EXERCICI 1 ----------------------------------------------
// CONSTANTS I VARIABLES GLOBALS - Exercici 1: Àrea del cercle
const inputRadi = document.querySelector('#radi');
const btnCalculaArea = document.querySelector('#calculaArea');
const btnNetejaArea = document.querySelector('#netejaArea');
const spanAreaResult = document.querySelector('#areaResult');
const circleElement = document.querySelector('#circleSVG circle');

const PI = Math.PI;
const MAX_RADI = 125;
const MIN_RADI = 1;

// EVENTS - Exercici 1
btnCalculaArea.onclick = calculaArea;
btnNetejaArea.onclick = netejaArea;

// FUNCIONS Exercici 1

function calculaArea() {

    if(parseInt(inputRadi.value) < MIN_RADI || parseInt(inputRadi.value) > MAX_RADI){
        alert("El número no es válido");
    }

    let calculaArea = PI * Math.pow(parseInt(inputRadi.value), 2);
    
    spanAreaResult.textContent=calculaArea;

}

function netejaArea() {
    spanAreaResult.textContent="";
}

//EXERCICI 2 ----------------------------------------------
// CONSTANTS I VARIABLES GLOBALS - Exercici 2: Casino - Ruleta
const inputAposta = document.querySelector('#aposta');
const inputDiners = document.querySelector('#diners');
const btnGiraRuleta = document.querySelector('#giraRuleta');
const btnNetejaRuleta = document.querySelector('#netejaRuleta');
const ruletaDisplay = document.querySelector('#ruletaDisplay');
const historialRuleta = document.querySelector('#historialRuleta');


// EVENTS - Exercici 2
btnGiraRuleta.onclick = giraRuleta;
btnNetejaRuleta.onclick = netejaRuleta;

// FUNCIONS Exercici 2
function generaNumRuleta() {
    return Math.round(Math.random()* 35);
}

function actualizarNumero(){
    numeroActual = generaNumRuleta();
    ruletaDisplay.textContent = numeroActual;
}

let ruletaGirando = false;
let interval = null;

function iniciar(){
    ruletaGirando = true;
    btnGiraRuleta.textContent = "Parar";
    actualizarNumero();
    interval = setInterval(actualizarNumero, 500);
}

function parar(){
    clearInterval(interval);
    ruletaGirando = false;
    btnGiraRuleta.textContent = "Iniciar";
    if(parseInt(numeroActual) % 2 == 0){
        ruletaDisplay.style.backgroundColor = "red";
    } else if(numeroActual % 2 !== 0 && !0){
        ruletaDisplay.style.backgroundColor = "black";
    } else {
        ruletaDisplay.style.backgroundColor = "green";
    }
    historialRuleta.textContent += `Has apostat: ${numeroActual}\n`
}

function giraRuleta() {
    if(ruletaGirando){
        parar();
    } else {
        iniciar();
    }
}

function netejaRuleta() {

}


//EXERCICI 3 ----------------------------------------------
// CONSTANTS I VARIABLES GLOBALS - Exercici 3: Càrrega JSON
const btnCarregaJson = document.querySelector('#carregaJson');
const selectLlistat = document.querySelector('#llistat');
const detallElement = document.querySelector('#detallElement');
const btnNetejaJson = document.querySelector('#netejaJson');


// EVENTS - Exercici 3
btnCarregaJson.onclick = carregaDades;
selectLlistat.onchange = mostraDetall;
btnNetejaJson.onclick = netejaJson;

// FUNCIONS Exercici 3
function carregaDades() {
    fetch('./json/brainrot.json').then(response => {
        if (response.ok){
            return response.json();
        } else {
            throw new Error('Error al cargar el archivo JSON');
        }
    }).then(data => {

        data.forEach(usuario => {
            const select = document.createElement("option");
            select.value = `${usuario}`;
            selectLlistat.textContent = select;
        })
    })
}

function mostraDetall() {

}

function netejaJson() {

}