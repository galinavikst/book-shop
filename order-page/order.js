const form = document.forms.form;
const nameInput = document.forms.form.name;
const surnameInput = document.forms.form.surname;
const dataInput = document.forms.form.date;
const streetInput = document.forms.form.street;
const houseInput = document.forms.form.house;
const flatInput = document.forms.form.flat;
///////name + data inputs////
nameInput.onblur = function () {
  if (nameInput.value.includes(" ") || nameInput.value.length < 4) {
    nameInput.className = "error";
    errorMsg(nameInput);
  }
};
nameInput.onfocus = () => onfocusError(nameInput);

surnameInput.onblur = function () {
  if (surnameInput.value.includes(" ") || surnameInput.value.length < 5) {
    surnameInput.className = "error";
    errorMsg(surnameInput);
  }
};
surnameInput.onfocus = () => onfocusError(surnameInput);

dataInput.addEventListener("change", function () {
  let d = new Date();
  let inputDate = new Date(dataInput.value);
  if (inputDate <= d) {
    dataInput.className = "error";
    errorMsg(dataInput);
    dataInput.value = "";
    dataInput.onmouseleave = () => onmouseLeave(dataInput);
  }
});
dataInput.onfocus = () => onfocusError(dataInput);

//////////////////////
//////adress inputs//////////
streetInput.onblur = function () {
  if (streetInput.value.length < 5) {
    streetInput.className = "error";
    errorMsg(streetInput);
  }
};
streetInput.onfocus = () => onfocusError(streetInput);

houseInput.onblur = function () {
  if (isNaN(houseInput.value) || houseInput.value <= 0) {
    houseInput.className = "error";
    errorMsg(houseInput);
  }
};
houseInput.onfocus = () => onfocusError(houseInput);

flatInput.addEventListener("input", function (e) {
  if ((isNaN(e.data) && e.data !== "-") || flatInput.value.startsWith("-")) {
    flatInput.className = "error";
    flatInput.value = "";
    errorMsg(flatInput);
  }
  flatInput.onmouseleave = () => onmouseLeave(flatInput);
});

flatInput.onfocus = () => onfocusError(flatInput);
/////////////////////
//////common functions for input validation//////
function errorMsg(element) {
  let wrapper = element.parentElement;
  let span = wrapper.querySelector(":scope > span");
  span.style = "display: inline";
}

function onfocusError(element) {
  let wrapper = element.parentElement;
  let span = wrapper.querySelector(":scope > span");
  if (element.classList.contains("error") || element.value !== "") {
    element.classList.remove("error");
    span.style = "display: none";
  }
}
function onmouseLeave(element) {
  let wrapper = element.parentElement;
  let span = wrapper.querySelector(":scope > span");
  if (element.classList.contains("error") || element.value !== "") {
    element.classList.remove("error");
    span.style = "display: none";
  }
}
///////////////////
//set limit of gift checkboxes /////
let giftArr = document.forms.form.gift;
giftArr.forEach((input) => (input.onclick = limitCheckb));
function limitCheckb() {
  let giftArr = document.forms.form.gift;
  let total = 0;
  for (let i = 0; i < giftArr.length; i++) {
    if (giftArr[i].checked) {
      total += 1;
    }
    if (total > 2) return false;
  }
}
///////////////////
////////complete btn active/////
let requiredArr = Array.from(document.querySelectorAll("[required]"));
let completeBtn = document.querySelector("#submit");
function isComplete() {
  if (
    requiredArr.some((input) => input.value == "") ||
    requiredArr.some((input) => input.classList.contains("error"))
  ) {
    return true;
  }
  return false;
}
function validate() {
  completeBtn.disabled = isComplete();
}

form.addEventListener("change", validate);
//////////////
////////////// summarazed information////////
completeBtn.onclick = function () {
  summarized();
};
function summarized() {
  document.querySelector(".page").innerHTML = ` <h1>The order created!</h1>
    <div class="summar">
      <p><b>${streetInput.value}</b> Street,</p>
      <p>House <b>${houseInput.value}</b>, Flat <b>${flatInput.value}</b>.</p>
      <p>Customer: <b>${nameInput.value} ${surnameInput.value}</b></p>
    </div>`;
}
///////////////////////
