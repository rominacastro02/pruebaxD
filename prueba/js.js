// Código para el formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Por favor, completa todos los campos.');
    } else {
        // Simulación de inicio de sesión exitoso
        if (email === "usuario@correo.com" && password === "123456") {
            localStorage.setItem('isLoggedIn', 'true'); // Guardar la sesión
            window.location.href = "prueba.html"; // Redirigir a la página principal
        } else {
            alert('Correo electrónico o contraseña incorrectos.');
        }
    }
});

// Código para verificar el estado de la sesión
window.onload = function() {
    // Obtener el nombre del archivo actual
    let currentFile = window.location.pathname.split('/').pop();

    if (!localStorage.getItem('isLoggedIn')) {
        if (currentFile !== 'login.html') {
            // Si no ha iniciado sesión y no está en login.html, redirigir a login.html
            window.location.href = "login.html";
        }
    } else {
       // Mostrar el botón de cierre de sesión si el usuario está autenticado
       let userOptions = document.querySelector('.user-options');
       if (userOptions) {
           userOptions.innerHTML = `
               <a href="#" onclick="logout()">Cerrar Sesión</a>
        `;
        }
    }
};

// Función para cerrar sesión
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = "login.html";
}