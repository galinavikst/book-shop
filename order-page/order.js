const nameInput = document.forms.client.name;
const surnameInput = document.forms.client.surname;
const dataInput = document.forms.client.date;
const streetInput = document.forms.address.street;
const houseInput = document.forms.address.house;
const flatInput = document.forms.address.flat;

nameInput.onblur = function () {
  if (nameInput.value.includes(" ") || nameInput.value.length < 4)
    nameInput.className = "error";
};
nameInput.onfocus = () => onfocusError(nameInput);

surnameInput.onblur = function () {
  if (surnameInput.value.includes(" ") || surnameInput.value.length < 5)
    surnameInput.className = "error";
};
surnameInput.onfocus = () => onfocusError(surnameInput);

streetInput.onblur = function () {
  if (streetInput.value.length < 5) streetInput.className = "error";
};
streetInput.onfocus = () => onfocusError(streetInput);

houseInput.onblur = function () {
  if (isNaN(houseInput.value) || houseInput.value <= 0)
    houseInput.className = "error";
};
houseInput.onfocus = () => onfocusError(houseInput);

flatInput.onblur = function () {
  if (isNaN(flatInput.value) || flatInput.value.startsWith("-"))
    flatInput.className = "error";
};
flatInput.onfocus = () => onfocusError(flatInput);

dataInput.addEventListener("change", function () {
  let d = new Date();
  let inputDate = new Date(dataInput.value);
  if (inputDate <= d) dataInput.className = "error";
});
dataInput.onfocus = () => onfocusError(dataInput);

function onfocusError(element) {
  if (element.classList.contains("error")) {
    element.classList.remove("error");
  }
}

let giftArr = document.forms.gifts.gift;
console.log(giftArr);
giftArr.forEach((input) => (input.onclick = limitCheckb));

function limitCheckb() {
  let giftArr = document.forms.gifts.gift;
  let total = 0;
  for (let i = 0; i < giftArr.length; i++) {
    if (giftArr[i].checked) {
      total += 1;
    }
    if (total > 2) return false;
  }
}
