// toggle button
const dropDownRadioButton = document.getElementById('dropdownRadioButton');
const dropDownRadioField = document.getElementById('dropdownRadio');

//toggleButton event
dropDownRadioButton.addEventListener('click', function(){
    dropDownRadioField.classList.toggle('hidden');
})

// input field
const phoneInputField = document.getElementById('phone-input');
const ammountInputField = document.getElementById('ammount-input');
const optionValueField = document.getElementById('provider')
const submitBtn = document.getElementById('submit-btn');

// geeting localstorage list if not found it's give empty arry
let topUpList = JSON.parse(localStorage.getItem('topUp')) || [];

// create an arry for random value
const randomValue = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

// get randomValue singly (function)
function getRandomValue(){
    const randomIndexPosition = Math.floor(
        Math.random() * randomValue.length
    );
    const randomTransactionValue = randomValue[randomIndexPosition];
    return randomTransactionValue;
}
// converted into  a full length string to show display
function getRandomString(stringLength){
    let string = '';
    for(let i = 0; i < stringLength; i++){
        string +=  getRandomValue();
    }
    return string;
}
// click event at submit btn
submitBtn.addEventListener('click', function(){
    const phoneValue = phoneInputField.value;
    const ammountValue = ammountInputField.value;
    const optionValue  = optionValueField.value;
    //const randomTransactionFullValue = getRandomString(10);
    if(!isNaN(phoneValue) && ammountValue !== ''){

        let topUpInformation = {
            number: phoneValue,
            ammount: ammountValue,
            providerName: optionValue,
            transactionId: getRandomString(10)
        }
        console.log(topUpInformation)
        topUpList.push(topUpInformation);
        localStorage.setItem('topUp', JSON.stringify(topUpList));
    }else {
        alert('Please provide a valid number')
    }
})