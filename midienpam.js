document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  const pageSections = document.querySelectorAll(".page-section");
  const navLinks = document.getElementById("navLinks");

  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      
      // Lấy ID trang từ href (#portfolio -> portfolio)
      const targetId = item.getAttribute("href").substring(1);
      
      // Ẩn tất cả section & bỏ active ở menu
      pageSections.forEach((sec) => sec.classList.remove("active"));
      navItems.forEach((nav) => nav.classList.remove("active"));
      
      // Hiện section tương ứng & thêm active ở menu
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add("active");
      }
      item.classList.add("active");
      
      // Cuộn mượt lên đầu trang
      window.scrollTo({ top: 0, behavior: "smooth" });
      
      // Đóng Mobile Menu nếu active
      if (navLinks && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
      }
    });
  });
});
