const rating = document.querySelectorAll(".rating-button");
const submitBtn = document.querySelector(".submit-button");
const alert = document.querySelector(".alert");

rating.forEach((btn) => {
  btn.addEventListener("click", () => {
    rating.forEach((b) => b.classList.remove("white-bg"));
    btn.classList.add("white-bg");
    alert.textContent = `You selected ${btn.textContent} out of 5`;
  });
});
submitBtn.addEventListener("click", () => {
  document.querySelector(".rating-state").style.display = "none";
  document.querySelector(".thank-you-state").style.display = "block";
});
