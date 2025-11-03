// Data dummy pengguna
const users = [
  { email: "admin@rental.com", password: "admin123", role: "admin" },
  { email: "user@rental.com", password: "user123", role: "user" }
];

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // cegah reload halaman

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    message.style.color = "green";
    message.textContent = "Login berhasil!";

    // Simpan role ke localStorage
    localStorage.setItem("role", user.role);

    // Redirect sesuai role
    setTimeout(() => {
      if (user.role === "admin") {
        window.location.href = "admin.html";
      } else {
        window.location.href = "user.html";
      }
    }, 1000);

  } else {
    message.textContent = "Email atau password salah!";
  }
});
