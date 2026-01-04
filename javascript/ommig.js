const btn_open = document.querySelector("#cta_open1");
const btn_close = document.querySelector("#close_btn");

console.log(btn_open);

btn_open.addEventListener("click", openModal);
btn_close.addEventListener("click", closeModal);

function openModal() {
  console.log("Der er klikket");
  document
    .querySelector("#dialog1")
    .classList.add("fadeIn"); /*Har ikke skrevet css endnu*/
  document.querySelector("#dialog1").showModal();
}

function closeModal() {
  document.querySelector("#dialog1").close();
}
