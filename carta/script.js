const envoltura = document.querySelector(".envoltura");
const carta = document.querySelector(".carta");
const musica = document.getElementById("bg-music"); // Asegúrate de tener esta referencia

document.addEventListener("click", (e) => {
    // Abrir sobre, solapas o corazón
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-der") || 
        e.target.matches(".solapa-izq") || 
        e.target.matches(".corazon")) {
        
        envoltura.classList.add("abierto");
        envoltura.classList.add("desactivar-sobre");

        // Reproducir la canción al abrir la carta
        if (musica) {
            musica.play().catch(error => {
                console.log("Error al reproducir el audio:", error);
            });
        }

        if (!carta.classList.contains("abierta")) {
            setTimeout(() => {
                carta.classList.add("mostrar-carta");
                carta.classList.add("abierta");
            }, 600);
        }
    } 
    // Cerrar la carta si hacen clic en ella
    else if (e.target.closest(".carta")) {
        if (carta.classList.contains("abierta")) {
            carta.classList.remove("mostrar-carta");
            carta.classList.add("cerrando-carta");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta");
                carta.classList.remove("abierta");
                envoltura.classList.remove("abierto");
                envoltura.classList.remove("desactivar-sobre");
                
                // Opcional: si quieres que la música se detenga al cerrar la carta, descomenta la siguiente línea:
                // musica.pause(); musica.currentTime = 0;
            }, 500);
        }
    }
});