let display = document.getElementById('angka1');
let currentValue = '';

function appendToDisplay(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        // Jika operator matematika ditambahkan, tambahkan ke layar hanya jika layar tidak kosong
        if (currentValue !== '') {
            currentValue += value;
        }
    } else {
        currentValue += value;
    }
    display.value = currentValue;
}
function clearDisplay() {
    currentValue = '';
    display.value = '';
}

function calculateResult() {
    try {
        currentValue = eval(currentValue);
        display.value = currentValue;
    } catch (error) {
        display.value = 'Error';
    }
}
