const linkButton = document.querySelector("#link-wrapper button");
const linkInput = document.querySelector("#link-form input");

linkButton.addEventListener("click", () => {
  linkInput.classList.toggle("hidden");
});
