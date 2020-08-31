const horizontalRange = document.querySelector('#horizontal');
const verticalRange = document.querySelector('#vertical');
const blurRange = document.querySelector('#blur');
const spreadRange = document.querySelector('#spread');
const color = document.querySelector('#color');
const opacity = document.querySelector('#opacity');
const horizontalInput = document.querySelector('#horizontalNumber');
const verticalInput = document.querySelector('#verticalNumber');
const blurInput = document.querySelector('#blurNumber');
const spreadInput = document.querySelector('#spreadNumber');
const opacityInput = document.querySelector('#opacityNumber');
const horizontalResult = document.querySelector('.horizontalResult');
const verticalResult = document.querySelector('.verticalResult');
const blurResult = document.querySelector('.blurResult');
const spreadResult = document.querySelector('.spreadResult');
const colorResult = document.querySelector('.colorResult');
const inset = document.querySelector('#inset');
const outline = document.querySelector('#outline');
const shadowPosition = document.querySelector('.position');
const box = document.querySelector('.element');

let position = "";

const horizontalValue = () => {
    horizontalInput.value = horizontalRange.value;
    horizontalResult.textContent = horizontalRange.value;
    box.style.boxShadow = horizontalRange.value +"px " + verticalRange.value + "px " + blurRange.value + "px " + spreadRange.value + "px " + color.value + " " + position;
}

const verticalValue = () => {
    verticalInput.value = verticalRange.value;
    verticalResult.textContent = verticalRange.value;
    box.style.boxShadow = horizontalRange.value +"px " + verticalRange.value + "px " + blurRange.value + "px " + spreadRange.value + "px " + color.value + " " + position;
}

const blurValue = () => {
    blurInput.value = blurRange.value;
    blurResult.textContent = blurRange.value; 
    box.style.boxShadow = horizontalRange.value +"px " + verticalRange.value + "px " + blurRange.value + "px " + spreadRange.value + "px " + color.value + " " + position;
}

const spreadValue = () => {
    spreadInput.value = spreadRange.value;
    spreadResult.textContent = spreadRange.value;
    box.style.boxShadow = horizontalRange.value +"px " + verticalRange.value + "px " + blurRange.value + "px " + spreadRange.value + "px " + color.value + " " + position;
}

const opacityValue = () => {
    opacityInput.value = opacity.value;

}

const colorValue = () => {
    colorResult.textContent = color.value;
    box.style.boxShadow = horizontalRange.value +"px " + verticalRange.value + "px " + blurRange.value + "px " + spreadRange.value + "px " + color.value + " " + position;
}

const isChecked = () => {
    if(outline.checked) {
        position = "";
        console.log("bien");
    } else {
        position = "inset";
    }
    shadowPosition.textContent = position;
    box.style.boxShadow = horizontalRange.value +"px " + verticalRange.value + "px " + blurRange.value + "px " + spreadRange.value + "px " + color.value + " " + position;
}

