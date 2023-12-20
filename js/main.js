var btn = document.querySelector(".btn");
var flash = document.querySelector(".camera__front-lens-flash");
var audio = document.querySelector(".audio");
btn.addEventListener("click", function () {
  flash.style.display = "block";
  audio.play();
  setTimeout(function () {
    flash.style.display = "none";
  }, 350);
});
