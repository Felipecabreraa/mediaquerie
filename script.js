document.getElementById("hamburgerMenu").addEventListener("click", function () {
    const sidebar = document.querySelector(".sidebar");
    const navList = document.querySelector(".nav-list");
  
    sidebar.classList.toggle("open");
    navList.classList.toggle("open");
  });