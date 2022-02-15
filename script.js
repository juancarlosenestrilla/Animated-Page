window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

document.querySelector(".card-btn").addEventListener("click", () => {
  document.querySelector(".contacto").classList.toggle("change");
});
