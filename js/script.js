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