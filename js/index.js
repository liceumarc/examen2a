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

}

function netejaArea() {

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

}

function giraRuleta() {

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
 
}

function mostraDetall() {

}

function netejaJson() {

}