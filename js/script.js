//VARIABLES
const cssCode = document.querySelector("#code");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color1Slider = document.querySelector("#slider-color-one");
const color2Slider = document.querySelector("#slider-color-two");
const color1Value = document.querySelector("#value-one");
const color2Value = document.querySelector("#value-two");
const body = document.querySelector("body");
const initialValue = getComputedStyle(body).background;
const slider = document.getElementById("slider");
const output = document.getElementById("slider-value");
const copyCode = document.querySelector("button");

//INITIAL BACKGROUND CSS VALUE
cssCode.textContent = "background: " + initialValue.slice(17, -50) + ";";

//INITIAL SLIDER VALUE
color1Value.innerHTML = color1Slider.value;
color2Value.innerHTML = color2Slider.value;
output.innerHTML = slider.value;

//SET BCKG GRADIENT WITH COLOR PICKERS , SLIDERS
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color1Slider.addEventListener("input", setGradient);
color2Slider.addEventListener("input", setGradient);
slider.addEventListener("input", setGradient);

//fn SET GRADIENT, SHOW CSS CODE
function setGradient() {
  const grg = color1Slider.value;
  const jeb = color2Slider.value;
  const prd = slider.value;

  body.style.background =
    "linear-gradient(" +
    prd +
    "deg, " +
    color1.value +
    " " +
    grg +
    "%, " +
    color2.value +
    " " +
    jeb +
    "%)";

  color1Value.innerHTML = grg;
  color2Value.innerHTML = jeb;
  output.innerHTML = prd;
  cssCode.innerHTML = "background: " + body.style.background + ";";
}

//fn COPY CSS CODE TO CLIPBOARD
function copyToClipboard() {
  //create temporary text area to copy text from (text is in <p>,copying to clipboard works with textarea)
  var textarea = document.createElement("textarea");
  textarea.id = "temp_element";
  textarea.style.height = 0;
  document.body.appendChild(textarea);
  //assign text from <p> to textarea
  textarea.value = cssCode.innerHTML;
  //copy text to clipboard
  const selector = document.querySelector("#temp_element");
  selector.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

//COPY CSS CODE BY CLICKING THE BUTTON
copyCode.addEventListener("click", copyToClipboard);
