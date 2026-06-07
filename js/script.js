const projectImage = document.getElementById("projectImage");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close-btn");

projectImage.addEventListener("click", () => {

    modal.style.display = "flex";

    modalImg.src = projectImage.src;

});

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.onclick = function () {
   
    navLinks.classList.toggle("active");
};