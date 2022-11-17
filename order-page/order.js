const nameInput = document.forms.client.name;
const surnameInput = document.forms.client.surname;

nameInput.onblur = function () {
  if (nameInput.value.length <= 4) {
    nameInput.className = "error";
  }
};
nameInput.onfocus = () => onfocusError(nameInput);

surnameInput.onblur = () => onblurError(surnameInput);
surnameInput.onfocus = () => onfocusError(surnameInput);

function onblurError(element) {
  if (element.value.length <= 5) {
    element.className = "error";
  }
}
function onfocusError(element) {
  if (element.classList.contains("error")) {
    element.classList.remove("error");
  }
}
