/*
  VARIABLES
*/

//body
const body = document.querySelector("body");
const initialValue = getComputedStyle(body).background;
//color controls
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color1Slider = document.querySelector("#slider-color1");
const color2Slider = document.querySelector("#slider-color2");
const color1Value = document.querySelector("#value-color1");
const color2Value = document.querySelector("#value-color2");
//angle controls
const angleSlider = document.querySelector("#slider-angle");
const angleValue = document.querySelector("#value-angle");
//css code
const copyBtn = document.querySelector("button");
const cssCode = document.querySelector("#code");

/*
  ACTIONS
*/

//initial background gradient css value
cssCode.innerHTML = `background: ${initialValue.slice(17, -50)};`;

//initial slider value
color1Value.innerHTML = color1Slider.value;
color2Value.innerHTML = color2Slider.value;
angleValue.innerHTML = angleSlider.value;

//set gradient with color picker, slider
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color1Slider.addEventListener("input", setGradient);
color2Slider.addEventListener("input", setGradient);
angleSlider.addEventListener("input", setGradient);

//copy CSS code by clicking the btn
copyBtn.addEventListener("click", copyToClipboard);

/*
  FUNCTIONS
*/

//set gradient, show CSS code
function setGradient() {
  const setColor1Stop = color1Slider.value;
  const setColor2Stop = color2Slider.value;
  const setAngle = angleSlider.value;

  body.style.background = `linear-gradient(${setAngle}deg, ${color1.value} ${setColor1Stop}%, ${color2.value} ${setColor2Stop}%)`;

  //show current values
  color1Value.innerHTML = setColor1Stop;
  color2Value.innerHTML = setColor2Stop;
  angleValue.innerHTML = setAngle;
  //show current CSS code
  cssCode.innerHTML = `background: ${body.style.background};`;
}

//copy CSS code to clipboard
function copyToClipboard() {
  //create temporary text area to copy text from (text is in <p>,copying to clipboard works with textarea)
  const textarea = document.createElement("textarea");
  textarea.id = "textarea-temp";
  textarea.style.height = 0;
  document.body.appendChild(textarea);
  //assign text from <p> to textarea
  textarea.value = cssCode.innerHTML;
  //copy text to clipboard
  const selector = document.querySelector("#textarea-temp");
  selector.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}
