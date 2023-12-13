// Obtén el elemento del checkbox por su atributo 'role'
const checkbox = document.querySelector('input[role="switch"]');
const pokeball = document.getElementById("pokeball_image");

// Agrega un evento de cambio al checkbox
checkbox.addEventListener('change', function() {
    // Verifica si el checkbox está marcado
    if (checkbox.checked) {
      document.documentElement.setAttribute('data-bs-theme','dark')
      pokeball.src = "./img/pokeball.svg";

    } else {
      document.documentElement.setAttribute('data-bs-theme','light')
      pokeball.src = "./img/pokeball2.svg";
    }
});