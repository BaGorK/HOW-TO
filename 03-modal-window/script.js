const showModal = document.querySelectorAll(".show-modal");
const modalWindow = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
// showModal.addEventListener("click", function () {
//     showModal.classList.add("hidden");
// })

// console.log(showModal);
showModal.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    modalWindow.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});
// showModal.addEventListener('click', function (e) {
//     modalWindow.classList.remove("hidden");
//     overlay.classList.remove('hidden');
// })

closeModal.addEventListener("click", () => {
  modalWindow.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  modalWindow.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener('keydown', function (e) {
    // console.log(e.key);
    if (e.key === 'Escape') {
          modalWindow.classList.add("hidden");
          overlay.classList.add("hidden");

    }
})