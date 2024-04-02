// toggle button
const dropDownRadioButton = document.getElementById('dropdownRadioButton');
const dropDownRadioField = document.getElementById('dropdownRadio');

//toggleButton event
dropDownRadioButton.addEventListener('click', function(){
    dropDownRadioField.classList.toggle('hidden');
})