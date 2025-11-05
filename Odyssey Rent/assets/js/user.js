document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});

  // Fungsi logout tetap sama
  window.logout = function () {
    localStorage.removeItem("role");
    window.location.href = "index.html";
  };

  document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section, main");
  const navLinks = document.querySelectorAll(".nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.textContent.trim() === "Pemesanan") {
      e.preventDefault();
      document.querySelector('#pemesanan').scrollIntoView({ behavior: 'smooth' });
    }
  });
});
