const horizontalRange = document.querySelector('#horizontal');
const verticalRange = document.querySelector('#vertical');
const blurRange = document.querySelector('#blur');
const spreadRange = document.querySelector('#spread');
const horizontalInput = document.querySelector('#horizontalNumber');
const verticalInput = document.querySelector('#verticalNumber');
const blurInput = document.querySelector('#blurNumber');
const spreadInput = document.querySelector('#spreadNumber');
const horizontalResult = document.querySelector('.horizontalResult');
const verticalResult = document.querySelector('.verticalResult');
const blurResult = document.querySelector('.blurResult');
const spreadResult = document.querySelector('.spreadResult');

const horizontalValue = () => {
    horizontalInput.value = horizontalRange.value;
    horizontalResult.textContent = horizontalRange.value;
}

const verticalValue = () => {
    verticalInput.value = verticalRange.value;
    verticalResult.textContent = verticalRange.value;
}

const blurValue = () => {
    blurInput.value = blurRange.value;
    blurResult.textContent = blurRange.value;
}

const spreadValue = () => {
    spreadInput.value = spreadRange.value;
    spreadResult.textContent = spreadRange.value;
}

