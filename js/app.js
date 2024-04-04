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
const topUpDisplayList = document.getElementById('toup-list-display');
const submitBtn = document.getElementById('submit-btn');
// last seven days data 
const lastSevenDaysData = document.getElementById('filter-radio-example-2')

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
// display topUp list into UI
function showTopUpList(){
    topUpDisplayList.innerHTML = '';
    topUpList.forEach((list, index) => {
        let tableRow = `
                 <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                        </div>
                    </td>
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        ${list.number}
                    </th>
                    <td class="px-6 py-4">
                     ${list.providerName}
                    </td>
                    <td class="px-6 py-4">
                    ${list.transactionId}
                    </td>
                    <td class="px-6 py-4">
                    ${"$" + list.ammount}
                    </td>
                    <td onclick="deleteTopUpList(${index})" class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                    </td>
                </tr>
        `;
        topUpDisplayList.insertAdjacentHTML('beforeend', tableRow);
    })
}
//showTopUpList()
// delete a list form card or local storage arry
function deleteTopUpList(indexId){
    topUpList.splice(indexId, 1); // removing index from arry at localstorage
    localStorage.setItem('topUp', JSON.stringify(topUpList));
    showTopUpList()
}
// Function to filter data for the last seven days
function filterLastSevenDaysData() {
    const currentTimestamp = Date.now();
    const sevenDaysAgo = currentTimestamp - (2 * 24 * 60 * 60 * 1000); // 7 days in milliseconds
    return topUpList.filter(item => item.timestamp >= sevenDaysAgo);
}

showTopUpList(topUpList); // Show full list initially

// last seven days data 
lastSevenDaysData.addEventListener('click', function(){
    const filteredData = filterLastSevenDaysData();
    console.log(filteredData)
    topUpDisplayList.innerHTML = '';
    showTopUpList(filteredData); // Show filtered data
})

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
            transactionId: getRandomString(13),
            timestamp: Date.now()
        }
        console.log(topUpInformation)
        topUpList.push(topUpInformation);
        localStorage.setItem('topUp', JSON.stringify(topUpList));
    }else {
        alert('Please provide a valid number')
    }
    phoneInputField.value = '';
    ammountInputField.value = '';
    optionValueField.value = 'Choose a Provider';
    showTopUpList()
})