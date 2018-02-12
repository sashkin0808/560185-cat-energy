var form = document.querySelector(".form");
var inputs =  document.querySelectorAll(".form__input[required]");
var submit = document.querySelector(".form__submit-button");

if (form) {
  submit.addEventListener("click", function(a) {
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      if (input.checkValidity() == false) {
        input.classList.add("form__input--invalid");
      }
    }
  });
}

var button = document.querySelector(".main-nav__toggle");
var container = document.querySelector(".page-header__wrapper");
var menu = document.querySelector(".site-list");

button.classList.add("main-nav__toggle--visible");
menu.classList.add("site-list--hidden");
container.classList.remove("page-header__wrapper--menu");

button.addEventListener("click", function (evt) {
  button.classList.toggle("main-nav__toggle--open");
  button.classList.toggle("main-nav__toggle--close");
  menu.classList.toggle("site-list--hidden");
  container.classList.toggle("page-header__wrapper--menu");
});
