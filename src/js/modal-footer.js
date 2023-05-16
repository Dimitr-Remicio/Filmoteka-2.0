(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  document.addEventListener("keydown", handleKeyPress);
  document.addEventListener("click", handleOutsideClick);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function handleKeyPress(event) {
    if (event.key === "Escape") {
      toggleModal();
    }
  }

  function handleOutsideClick(event) {
    if (!event.target.closest("[data-modal]")) {
      toggleModal();
    }
  }
})();