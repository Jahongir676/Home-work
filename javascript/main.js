document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const inputText = document.getElementById('inputtext');
    const checkboxInput = document.getElementById('checkbox');
    const radioButtons = document.getElementsByName('radio');
    const dropdown = document.getElementById('dropdown');
    const cancelButton = document.querySelector('.cancel-button');
    const nextButton = document.querySelector('.next-button');
    const toggleSwitch = document.querySelector('.switch input');

    nextButton.addEventListener('click', function(event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;
        const inputTextValue = inputText.value;
        const isChecked = checkboxInput.checked;
        const selectedRadio = [...radioButtons].find(radio => radio.checked).value;
        const dropdownValue = dropdown.value;
        const toggleStatus = toggleSwitch.checked ? 'On' : 'Off';

        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);
        console.log(`Input Text: ${inputTextValue}`);
        console.log(`Remember Me: ${isChecked}`);
        console.log(`Selected Radio: ${selectedRadio}`);
        console.log(`Dropdown Value: ${dropdownValue}`);
        console.log(`Toggle Status: ${toggleStatus}`);
    });

    cancelButton.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Form cancelled');
    });
});
