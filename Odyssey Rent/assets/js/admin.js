 // ========================================================
// LOGIN PAGE (index.html) - Simulasi Login Tanpa Backend
// ========================================================
const users = [
  { email: "admin@rental.com", password: "admin123", role: "admin", name: "Admin Odyssey" },
  { email: "user@rental.com", password: "user123", role: "user", name: "Pengguna Umum" }
];

document.addEventListener("DOMContentLoaded", () => {

  // ---------- LOGIN LOGIC ----------
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const message = document.getElementById("message");

      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        message.style.color = "green";
        message.textContent = "Login berhasil!";

        localStorage.setItem("role", user.role);
        localStorage.setItem("name", user.name);

        setTimeout(() => {
          if (user.role === "admin") window.location.href = "admin.html";
          else window.location.href = "user.html";
        }, 1000);
      } else {
        message.style.color = "red";
        message.textContent = "Email atau password salah!";
      }
    });
  }

  // ========================================================
  // ADMIN DASHBOARD - Navigasi Sidebar antar Section
  // ========================================================
  const menuLinks = document.querySelectorAll(".sidebar ul li a");
  const sections = document.querySelectorAll(".content-section");
  const adminName = document.getElementById("adminName");

  // Tampilkan nama admin dari localStorage
  if (adminName) {
    const name = localStorage.getItem("name");
    adminName.textContent = name || "Admin";
  }

  // Cegah error jika ini bukan halaman admin
  if (menuLinks.length > 0 && sections.length > 0) {
    menuLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();

        // Hapus status aktif dari semua link
        menuLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        // Sembunyikan semua section
        sections.forEach(sec => sec.classList.remove("active"));

        // Tentukan section mana yang tampil
        const text = link.textContent.trim().toLowerCase();
        if (text === "dashboard") {
          document.getElementById("dashboardSection").classList.add("active");
        } else if (text === "kelola armada") {
          document.getElementById("armadaSection").classList.add("active");
        } else if (text === "kelola pesanan") {
          document.getElementById("pesananSection").classList.add("active");
        } else if (text === "laporan") {
          document.getElementById("laporanSection").classList.add("active");
        }
      });
    });
  }


  // ========================================================
  // LOGOUT FUNCTION - Dijalankan dari tombol Logout di Header
  // ========================================================
  window.logout = function () {
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    window.location.href = "index.html";
  };
});


 