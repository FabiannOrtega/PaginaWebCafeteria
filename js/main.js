document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll(".mobile-nav-btn, .tab-btn");
    const menuItems = document.querySelectorAll(".menu-item");
    const categoryTitle = document.getElementById("current-category-title");

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            // 1. Manejo de clases activas en la barra inferior
            categoryButtons.forEach(btn => {
                btn.classList.remove("active");
                btn.setAttribute("aria-selected", "false");
            });
            button.classList.add("active");
            button.setAttribute("aria-selected", "true");

            // 2. Obtener la categoría seleccionada
            const selectedCategory = button.getAttribute("data-category");
            const categoryName = button.getAttribute("data-category-name");

            // 3. Actualizar el título dinámico de la categoría
            if (categoryTitle) {
                categoryTitle.textContent = categoryName;
            }

            // 4. Filtrar los productos (mostrar u ocultar)
            menuItems.forEach(item => {
                const itemCategory = item.getAttribute("data-category");
                
                if (selectedCategory === "todos" || itemCategory === selectedCategory) {
                    item.style.display = "block";
                    // Pequeño re-trigger de la animación de entrada
                    item.style.animation = "none";
                    item.offsetHeight; // Trigger reflow
                    item.style.animation = "luxuryFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards";
                } else {
                    item.style.display = "none";
                }
            });
            const headerOffset = 70;
            const elementPosition = categoryTitle.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
});

