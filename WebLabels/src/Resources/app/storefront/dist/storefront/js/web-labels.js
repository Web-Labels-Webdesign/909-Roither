/* Home Collapse Category Boxes */
var collapseContent = document.querySelector(".collapse-content");
var collapseBtn = document.querySelector(".collapse-btn");
var closeBtn = document.querySelector(".close-btn");
var collapseBtns = document.querySelector(".collapse-btns");
var initialHeight;
initialHeight = collapseContent.offsetHeight;
var imageColumns = collapseContent.getElementsByClassName("cms-block-image-four-column");
if (imageColumns.length > 1) {
  collapseContent.style.height = imageColumns[0].offsetHeight + "px";
  collapseBtns.classList.remove("d-none");
}
collapseBtn.addEventListener("click", function () {
  collapseContent.style.height = initialHeight + "px";
  collapseBtn.classList.add("d-none");
  closeBtn.classList.remove("d-none");
});
closeBtn.addEventListener("click", function () {
    collapseContent.style.height = imageColumns[0].offsetHeight + "px";
    collapseBtn.classList.remove("d-none");
    closeBtn.classList.add("d-none");
});