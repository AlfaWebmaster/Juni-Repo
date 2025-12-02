/*async function cargarLinks() {
    const token = localStorage.getItem("token");

    if (!token) {
        alert("Debes iniciar sesión");
        window.location.href = "index.html";
        return;
    }

    try {
        const res = await fetch("http://localhost:8080/api/links/mis-enlaces", {
            headers: { "Authorization": token }
        });

        const data = await res.json();

        const lista = document.getElementById("lista");
        lista.innerHTML = "";

        if (!data.links || data.links.length === 0) {
            lista.innerHTML = "<li>No hay enlaces guardados</li>";
            return;
        }

        data.links.forEach(link => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
            lista.appendChild(li);
        });
    } catch (err) {
        document.getElementById("error").textContent = "Error al cargar los enlaces.";
    }
}

document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.href = "index.html";
});

cargarLinks();*/




/*prueba para agregar la bienvenida del usuario
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const usuario = document.getElementById("username").value;

    // Guardar en localStorage
    localStorage.setItem("usuario", usuario);

    // Redirigir a la página siguiente
    window.location.href = "enlaces.html"; // ← Cambia el nombre a tu página real
});

const usuario = localStorage.getItem("usuario");

document.getElementById("nombreUsuario").textContent =
    usuario ? usuario : "Invitado";*/
async function cargarLinks() {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username"); // 👈 recuperar nombre

  if (!token) {
    alert("Debes iniciar sesión");
    window.location.href = "index.html";
    return;
  }

  // Mostrar bienvenida
  document.getElementById("nombreUsuario").textContent = username;

  try {
    const res = await fetch("http://localhost:8080/api/links/mis-enlaces", {
      headers: { "Authorization": token }
    });

    const data = await res.json();

    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    if (!data.links || data.links.length === 0) {
      lista.innerHTML = "<li>No hay enlaces guardados</li>";
      return;
    }

    data.links.forEach(link => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
      lista.appendChild(li);
    });
  } catch (err) {
    document.getElementById("error").textContent = "Error al cargar los enlaces.";
  }
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username"); // 👈 limpiar también el nombre
  window.location.href = "index.html";
});

cargarLinks();
