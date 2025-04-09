const menuButtonElm = document.querySelector('#menu-tlacitko');
const menuButtonIcon = document.querySelector('i');

menuButtonElm.addEventListener("click", () => {
  const menuPolozkyElm = document.querySelector('#menu-polozky');
  menuPolozkyElm.classList.toggle('show');
  if (menuPolozkyElm.classList.contains('show')) {
    menuButtonIcon.className = 'fas fa-xmark';
  } else {
    menuButtonIcon.className = 'fas fa-bars';
  }
})
