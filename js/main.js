// Funcionalidad principal del sitio
document.addEventListener('DOMContentLoaded', function() {
    // Configurar menú móvil
    configurarMenuMovil();
    
    // Configurar scroll suave para enlaces internos
    configurarScrollSuave();
});


// Configurar menú móvil
function configurarMenuMovil() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.menu');
    
    if (menuToggle && menu) {
        // Cerrar menú al hacer clic en un enlace
        const enlacesMenu = menu.querySelectorAll('a');
        enlacesMenu.forEach(enlace => {
            enlace.addEventListener('click', () => {
                menuToggle.checked = false;
            });
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.checked = false;
            }
        });
    }
}

// Configurar scroll suave para enlaces internos
function configurarScrollSuave() {
    const enlacesInternos = document.querySelectorAll('a[href^="#"]');
    
    enlacesInternos.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100; // Ajustar para el header fijo
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}


