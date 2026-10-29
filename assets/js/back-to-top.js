document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("back-to-top");

  if (!button) return;

  window.addEventListener("scroll", function () {
    button.hidden = window.scrollY < 300;
  });

  button.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
