
/*document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.msg || "Error en login");
        }

        localStorage.setItem("token", data.token);
        window.location.href = "links.html";

    } catch (error) {
        document.getElementById("error").innerText = error.message;
    }
});*/

document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.msg || "Error en login");
    }

    // Guardar token y nombre de usuario en localStorage
    localStorage.setItem("token", data.token);
    localStorage.setItem("username", data.username || username);

    // Redirigir a la página de enlaces
    window.location.href = "links.html";

  } catch (error) {
    document.getElementById("error").innerText = error.message;
  }
});
