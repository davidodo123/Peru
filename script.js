// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navRight = document.getElementById('nav-right');
    const navLinks = document.querySelectorAll('.nav-links a');

    // 1. Función para alternar el menú
    const toggleMenu = () => {
        // Añade/quita la clase 'active' al botón (para la animación X)
        hamburger.classList.toggle('active');
        // Añade/quita la clase 'active' al contenedor de enlaces (para desplazarlo)
        navRight.classList.toggle('active');
        
        // 2. Bloquear scroll del cuerpo al abrir el menú
        if (navRight.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    // Escuchar el clic en el icono de hamburguesa
    hamburger.addEventListener('click', toggleMenu);

    // 3. Cerrar el menú automáticamente al hacer clic en cualquier enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navRight.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // 4. Gestión del cambio de color al hacer scroll (Clase .scrolled)
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Registramos el plugin para que GSAP reconozca el scroll
    gsap.registerPlugin(ScrollToPlugin);

    const btn = document.getElementById('backToTop');

    // Función para mostrar/ocultar con GSAP
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            gsap.to(btn, { 
                duration: 0, 
                autoAlpha: 1, 
                display: 'flex', 
                y: 0, 
                ease: "back.out(1.7)" 
            });
        } else {
            gsap.to(btn, { 
                duration: 0.3, 
                autoAlpha: 0, 
                y: 20, 
                ease: "power2.in" 
            });
        }
    });

    // Acción de volver arriba con GSAP
    btn.addEventListener('click', (e) => {
        e.preventDefault(); // Evita saltos bruscos del navegador
        gsap.to(window, { 
            duration: 0, 
            scrollTo: 0, 
            ease: "power4.inOut" 
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.full-width-hero');
    const bgBlur = document.querySelector('.hero-bg-blur img');
    const innerBox = document.querySelector('.inner-img-box');
    const caption = document.querySelector('.image-caption');

    // 1. Efecto de "Pulso" infinito para la imagen interna
    gsap.to(innerBox, {
        scale: 1.1,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // 2. Timeline para el Hover
    const hoverTl = gsap.timeline({ paused: true });

    hoverTl.to(bgBlur, {
        filter: "blur(15px)",
        scale: 1.2,
        duration: 0.8,
        ease: "power2.out"
    })
    .to(caption, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
    }, "-=0.4");

    // Eventos
    hero.addEventListener('mouseenter', () => hoverTl.play());
    hero.addEventListener('mouseleave', () => hoverTl.reverse());
});