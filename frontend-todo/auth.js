const backendUrl = "http://localhost:5000";

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const res = await fetch(`${backendUrl}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", username);
      window.location.href = "app.html";  // Redirect to Todo app page
    } else {
      alert(data.message || "Login failed");
    }
  } catch (err) {
    alert("Login error");
  }
});

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("registerUsername").value;
  const password = document.getElementById("registerPassword").value;

  try {
    const res = await fetch(`${backendUrl}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Registration successful! Please login.");
    } else {
      alert(data.message || "Registration failed");
    }
  } catch (err) {
    alert("Registration error");
  }
});
