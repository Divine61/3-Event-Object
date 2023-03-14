const buttonTabs = Array.from(document.querySelectorAll(`.tab`));
const sectionsContent = Array.from(document.querySelectorAll(`.tab__content`));

(function() {
  buttonTabs.forEach(button => {
    button.addEventListener(`click`, choiceSection);
  })
}())

function searchPosition(nodeCollection, nameClass) {
  return nodeCollection.findIndex(item => item.className.includes(nameClass));
}

function choiceSection() {
  let currentPosition = searchPosition(buttonTabs, `tab_active`);
  buttonTabs[currentPosition].classList.remove(`tab_active`);
  this.classList.add(`tab_active`);
  currentPosition = searchPosition(buttonTabs, `tab_active`);
  openContent(currentPosition);
}

function openContent(position) {
  const currentPosition = searchPosition(sectionsContent, `tab__content_active`);
  sectionsContent[currentPosition].classList.remove(`tab__content_active`);
  sectionsContent[position].classList.add(`tab__content_active`);
}