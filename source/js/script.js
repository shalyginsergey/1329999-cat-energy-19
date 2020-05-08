var link = document.querySelector(".page-header__toggle");
var popup = document.querySelector(".main-nav");
var close = document.querySelector(".page-header__toggle");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  close.classList.toggle("page-header__toggle--close"),
    popup.classList.toggle("main-nav--open");
});
