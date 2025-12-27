const products = document.querySelectorAll(".box");
const itemsPerPage = 6;
let currentPage = 1;
function showPage(page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  products.forEach((product, index) => {
    if (index >= start && index < end) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
showPage(currentPage);
document.getElementById("next").addEventListener("click", () => {
  if (currentPage * itemsPerPage < products.length) {
    currentPage++;
    showPage(currentPage);
  }
});

document.getElementById("prev").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
});

