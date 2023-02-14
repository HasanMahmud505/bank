function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputdFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputdFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value;
}


document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');

})