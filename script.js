document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navRight = document.getElementById('nav-right');
    const navLinks = document.querySelectorAll('.nav-links a');

    const toggleMenu = () => {
        hamburger.classList.toggle('active');
        navRight.classList.toggle('active');
        
        if (navRight.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    hamburger.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navRight.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

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
    gsap.registerPlugin(ScrollToPlugin);

    const btn = document.getElementById('backToTop');

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

    btn.addEventListener('click', (e) => {
        e.preventDefault(); 
        gsap.to(window, { 
            duration: 0, 
            scrollTo: 0, 
            ease: "power4.inOut" 
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.full-width-hero');
    const bgBlur = document.querySelector('.hero-background-blur img');
    const innerBox = document.querySelector('.inner-img-box');
    const caption = document.querySelector('.image-caption');

    gsap.to(innerBox, {
        scale: 1.1,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

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

    hero.addEventListener('mouseenter', () => hoverTl.play());
    hero.addEventListener('mouseleave', () => hoverTl.reverse());
});


document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const historyBox = document.querySelector('.history-content-box');
    const mainImg = document.querySelector('.full-img');

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".history-full-section",
            start: "top 60%",
            toggleActions: "play none none reverse"
        }
    });

    tl.to(historyBox, {
        autoAlpha: 1, 
        x: 40,
        duration: 1.2,
        ease: "power3.out"
    })
    .from(mainImg, {
        scale: 1.2,
        duration: 2,
        ease: "power2.out"
    }, 0); 
});

gsap.utils.toArray(".step-block").forEach((step, i) => {
    gsap.from(step.querySelector(".step-visual"), {
        scrollTrigger: {
            trigger: step,
            start: "top 80%",
        },
        x: i % 2 === 0 ? 100 : -100, 
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
    });
});