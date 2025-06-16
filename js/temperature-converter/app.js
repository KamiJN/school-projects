const cTempIn = document.getElementById("cTempInput");
const calcBtn = document.getElementById("calcBtn");
const resContainer = document.getElementById("resContainer");

const Calc = () => {
    var cTemp = parseFloat(cTempIn.value);
    if(isNaN(cTemp)) {
        alert("Podaj temperaturę.")
        cTempIn.focus();
        return;
    }
    cTemp += 273;
    resContainer.innerText = "Temperatura w stopniach Kelwina: " + cTemp;
}

calcBtn.disabled = true;
const ToggleBtn = () => {
    if(cTempIn.value == "")
        calcBtn.disabled = true;
    else
        calcBtn.disabled = false;
}