const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

// Open modal
open.addEventListener("click", () => modal.classList.add("show-modal"));

// Close modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Close when clicking outside modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show-modal");
  }
});
