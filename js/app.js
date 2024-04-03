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

// click event at submit btn
submitBtn.addEventListener('click', function(){
    const phoneValue = phoneInputField.value;
    const ammountValue = ammountInputField.value;
    const optionValue  = optionValueField.value;
    if(!isNaN(phoneValue) && ammountValue !== ''){
        
        let topUpInformation = {
            number: phoneValue,
            ammount: ammountValue,
            providerName: optionValue
        }
        console.log(topUpInformation)
    }else {
        alert('Please provide a valid number')
    }
})