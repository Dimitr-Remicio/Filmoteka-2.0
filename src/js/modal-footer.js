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
    if (event.key === "Escape" && !refs.modal.classList.contains("is-hidden")) {
      toggleModal();
    }
  }

  function handleOutsideClick(event) {
    if (event.target === refs.modal && !refs.modal.classList.contains("is-hidden")) {
      refs.modal.classList.add("is-hidden");
    }
  }
})();