const filterButton = document.getElementById("filter");
const espressoButton = document.getElementById("espresso");
const espressoPanel = document.getElementById("ratio");
const filterInstructions = document.getElementById("filter-instructions");
const espressoInstructions = document.getElementById("espresso-instructions");
const filterTemp = document.getElementById("filter-temp");
const bloom = document.getElementById("bloom");
const firstPour = document.getElementById("first-pour");
const secondPour = document.getElementById("second-pour");
const espressoTemp = document.getElementById("espresso-temp");
const espressoOutput = document.getElementById("espresso-output");
const espressoTime = document.getElementById("espresso-time");
const dose = document.getElementById("dose");
const hideFilter = document.getElementById("hide-filter");
const hideEspresso = document.getElementById("hide-espresso");
const doseView = document.getElementById('dose-view');
const yieldOutput = document.getElementById('yield-espresso');
const ratioButtons = document.querySelectorAll('input[name="roast-level"]');

function tempText(temp1, temp2) {
    filterTemp.innerText = `${temp1}`;
    espressoTemp.innerText = `${temp2}`;
    hideFilter.style.display = 'none';
    if (hideFilter.style.display === 'none') {
        hideEspresso.style.display = 'none';
    }
}

espressoButton.addEventListener('click', () => {
    if (espressoPanel.style.display === 'block' || espressoPanel.style.display === '') {
        espressoPanel.style.display = 'none';
        espressoInstructions.style.display = 'block';
        filterInstructions.style.display = 'none';
    }
});

filterButton.addEventListener('click', () => {
    if (espressoPanel.style.display === 'none' || espressoPanel.style.display === '') {
        espressoPanel.style.display = 'block';
        espressoInstructions.style.display = 'none';
        filterInstructions.style.display = 'block';
    }
});

dose.addEventListener('input', () => {
    const x = 3;
    doseView.innerText = dose.value;
    let bloomNumber = dose.value * x;
    let totalNumber = dose.value * ratioNumber;
    bloom.innerText = bloomNumber;
    let bloomParse = parseFloat(bloomNumber);
    let totalNumberParse = parseFloat(totalNumber);
    let firstPourMaths = totalNumberParse - bloomParse;
    firstPour.innerText = firstPourMaths - bloomParse;
    secondPour.innerText = totalNumber;
    yieldOutput.innerText = (lightStart * dose.value).toFixed(1);
    const doseZero = dose.value.trim();
    if (doseZero === "" || isNaN(doseZero)) {
        yieldOutput.innerText = "";
        bloom.innerText = "";
        firstPour.innerText = "";
        secondPour.innerText = "";
    }
});

let lightStart = 2.35;
let ratioNumber = 15;
const half = 2;

function updateInput() {
    const fakeBloom = 60;
    const refresh = parseFloat(dose.value || 0);
    const finalNumber = (ratioNumber * refresh).toFixed(0);
    yieldOutput.innerText = (lightStart * refresh).toFixed(1);
    secondPour.innerText = finalNumber;
    firstPour.innerText = ((finalNumber - fakeBloom) / half) + fakeBloom;
}

function setMultiplier(refresh) {
    lightStart = parseFloat(refresh);
    ratioNumber = parseFloat(refresh);
    updateInput();
}
