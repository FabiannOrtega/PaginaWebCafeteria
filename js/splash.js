// ========================================== -->
// CONTROLADOR DE LA PANTALLA DE BIENVENIDA   -->
// ========================================== -->
window.addEventListener("load", () => {
    const splashScreen = document.getElementById("splash-screen");
    
    if (splashScreen) {
        // Damos un pequeño retraso de 1.5 segundos
        setTimeout(() => {
            splashScreen.classList.add("fade-out");
            
            // Opcional: remover del DOM después de que termine la transición para liberar memoria
            setTimeout(() => {
                splashScreen.remove();
            }, 800); 
        }, 1500);
    }
});