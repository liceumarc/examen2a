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
    spanAreaResult.textContent=calculaArea.toFixed(3);
    circleElement.setAttribute("r", inputRadi.value);
}

function netejaArea() {
    spanAreaResult.textContent="";
    inputRadi.value="";
    circleElement.setAttribute("r", 50);
}

//EXERCICI 2 ----------------------------------------------
// CONSTANTS I VARIABLES GLOBALS - Exercici 2: Casino - Ruleta
const inputAposta = document.querySelector('#aposta');
const inputDiners = document.querySelector('#diners');
const btnGiraRuleta = document.querySelector('#giraRuleta');
const btnNetejaRuleta = document.querySelector('#netejaRuleta');
const ruletaDisplay = document.querySelector('#ruletaDisplay');
const historialRuleta = document.querySelector('#historialRuleta');
const rootStyles = getComputedStyle(document.documentElement);
const bgnBgColor = rootStyles.getPropertyValue('--bgn-bg-color').trim();

// EVENTS - Exercici 2
btnGiraRuleta.onclick = giraRuleta;
btnNetejaRuleta.onclick = netejaRuleta;

// FUNCIONS Exercici 2
function generaNumRuleta() {
    return Math.round(Math.random()* 35);
}

function actualizarNumeroAndColor(){
    numeroActual = generaNumRuleta();
    ruletaDisplay.textContent = numeroActual;

    if(parseInt(numeroActual) % 2 == 0){
        ruletaDisplay.style.backgroundColor = "red";
        ruletaDisplay.style.color = "white";
    } else if(numeroActual % 2 !== 0 && !0){
        ruletaDisplay.style.backgroundColor = "black";
        ruletaDisplay.style.color = "white";
    } else {
        ruletaDisplay.style.backgroundColor = "green";
        ruletaDisplay.style.color = "white";
    }
}

let ruletaGirando = false;
let interval = null;

function iniciar(){
    ruletaGirando = true;
    btnGiraRuleta.textContent = "Parar";
    actualizarNumeroAndColor();
    interval = setInterval(actualizarNumeroAndColor, 500);
}

function parar(){
    clearInterval(interval);
    ruletaGirando = false;
    btnGiraRuleta.textContent = "Iniciar";

    let dineroApostado = parseInt(inputDiners.value);
    let numeroApostado = parseInt(inputAposta.value);

    if (numeroActual == numeroApostado) {
        historialRuleta.textContent += `Has apostado al número ${numeroActual} y has ganado ${dineroApostado * 32}€\n`;
    } else if(numeroActual != numeroApostado) {
        historialRuleta.textContent += `Has apostado al número ${numeroActual} y has perdido ${dineroApostado}€\n`;
    }
}

function giraRuleta() {
    if(ruletaGirando){
        parar();
    } else {
        iniciar();
    }
}

function netejaRuleta() {
    parar();
    ruletaDisplay.textContent = "--";
    ruletaDisplay.style.color = "black";
    ruletaDisplay.style.backgroundColor = bgnBgColor;
    historialRuleta.textContent = "";
    inputAposta.value = "";
    inputDiners.value = "";
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
let datosPersonajes = [];

function carregaDades() {
    fetch('./json/brainrot.json').then(response => {
        if (response.ok){
            return response.json();
        } else {
            throw new Error('Error al cargar el archivo JSON');
        }
    }).then(data => {
        datosPersonajes = data;
        let numberElement = 0;
        for (const element of data) {
            const option = document.createElement('option');
            option.value = numberElement++;
            option.textContent = element.nome;
            selectLlistat.appendChild(option);
        }
    }
)};

function mostraDetall() {
    let selectedOption = selectLlistat.value;
    detallElement.innerHTML = 
    `<h2>${datosPersonajes[selectedOption].nome}</h2>` + 
    `<p>${datosPersonajes[selectedOption].descrizione}</p>` + 
    `<img src="${datosPersonajes[selectedOption].immagine_url}" alt="${datosPersonajes[selectedOption].nome}">`;
}

function netejaJson() {
    selectLlistat.innerHTML = "";
    detallElement.innerHTML = "";
}