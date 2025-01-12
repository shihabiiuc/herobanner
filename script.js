document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector("h1").classList.add("loaded");
  }, 100);
});
