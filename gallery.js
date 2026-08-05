// Fullscreen Image Viewer
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");

document.querySelectorAll(".gallery-item img").forEach((img) => {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    // captionText.innerHTML = this.alt;
  };
});

document.getElementById("closeBtn").onclick = function () {
  modal.style.display = "none";
};
