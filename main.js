// Initialize Lucide Icons
lucide.createIcons();

// Intersection Observer for Reveal animations
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Optional: Smooth background parallax on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.window.scrollY;
    document.querySelector('.bg-overlay').style.transform = `translateY(${scrolled * 0.1}px)`;
});

// Dynamic Button Hover feedback (Subtle gold glow tracking)
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        btn.style.setProperty('--x', `${x}px`);
        btn.style.setProperty('--y', `${y}px`);
    });
});

// Typing Effect for Hero Subtitle
const subtitle = document.querySelector('.hero p');
const text = subtitle.textContent;
subtitle.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

// Handle Intro Reveal
window.addEventListener('load', () => {
    const intro = document.getElementById('intro');
    
    setTimeout(() => {
        // Fade out intro
        intro.style.transition = 'opacity 1s cubic-bezier(0.65, 0, 0.35, 1)';
        intro.style.opacity = '0';
        
        // Show site content
        document.body.classList.add('show-site');
        
        // Remove intro from DOM after fade
        setTimeout(() => {
             intro.remove();
             // Start hero typing after site reveal
             setTimeout(typeWriter, 500);
        }, 1000);
    }, 3000); // Intro lasts 3 seconds
});

// Log for confirmation
console.log("WWTO Elite Website Initialized with Advanced Animations.");
