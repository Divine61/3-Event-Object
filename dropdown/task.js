const buttonsDropdown = document.querySelectorAll(`.dropdown__value`);

(function() {
  buttonsDropdown.forEach(button => {
    button.addEventListener(`click`, openDropdown);
  })
}())

function openDropdown() {
  const dropdownList = this.closest(`.dropdown`).querySelector(`.dropdown__list`);
  const buttonsLinks = dropdownList.querySelectorAll(`.dropdown__link`);
  dropdownList.classList.add(`dropdown__list_active`);
  // const arr = Array.from(buttonsLinks);
  // arr.forEach(button => {
  //   button.addEventListener(`click`, choiceSetting);
  // })
  buttonsLinks.forEach(button => {
    // button.addEventListener(`click`, choiceSetting);
    button.onclick = choiceSetting;
  })
}

function choiceSetting() {
  this.closest(`.dropdown__list`).classList.remove(`dropdown__list_active`);
  this.closest(`.dropdown`).querySelector(`.dropdown__value`).textContent = this.textContent;
  return false;
}