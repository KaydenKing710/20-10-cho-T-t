onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  // Hàm để hiển thị lời chúc
function showWish() {
  document.getElementById('surpriseBox').style.display = 'none'; // Ẩn khung "Bất ngờ ở đây nè"
  document.getElementById('displayWish').style.display = 'block'; // Hiển thị lời chúc
}
