// Loading animation
window.addEventListener('load', function() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }, 800); 
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollTopBtn = document.getElementById('scrollTop'); 
    
    if (header && scrollTopBtn) { 
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            scrollTopBtn.classList.add('visible');
             scrollTopBtn.classList.remove('hidden-initially'); 
        } else {
            header.classList.remove('scrolled');
            scrollTopBtn.classList.remove('visible');
        }
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 0;
            let targetPosition = targetElement.offsetTop - headerHeight;

            if (targetId === '#home') {
                targetPosition = 0;
            }
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if(mobileMenu) mobileMenu.classList.remove('active');
            }
        }
    });
});

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

// Stats counter animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-item h3');
    if (stats.length === 0) return; 

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumberText = target.textContent || "";
                const finalNumber = parseInt(finalNumberText.replace(/[^0-9]/g, ''));
                const suffix = finalNumberText.replace(/[0-9.,]/g, ''); 
                
                if (isNaN(finalNumber)) return;

                let current = 0;
                const increment = Math.max(1, Math.floor(finalNumber / 70)); 
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= finalNumber) {
                        current = finalNumber;
                        clearInterval(timer);
                    }
                    target.textContent = Math.floor(current) + suffix;
                }, 25); 
                observer.unobserve(target); 
            }
        });
    }, { threshold: 0.4 }); 

    stats.forEach(stat => observer.observe(stat));
}

// Parallax effect for floating shapes
function parallaxEffect() {
    const shapes = document.querySelectorAll('.floating-shape');
    if (shapes.length === 0) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        shapes.forEach((shape, index) => {
            const speed = ((index % 2 === 0 ? 0.1 : 0.15) + 0.2) * (index + 1) * 0.1; 
            const rotationFactor = (index % 2 === 0) ? 0.03 : -0.02;
            shape.style.transform = `translateY(${scrolled * -speed}px) rotate(${scrolled * rotationFactor}deg)`;
        });
    });
}

// Intersection Observer for general scroll animations
function addScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.section-title, .section-subtitle, .hero-text > *, .stat-item, .about-content > div, .feature-item, .team-card, .work-card, .pricing-card, .footer-section > *, .slogan-card' 
    );
    if (animatedElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const delay = (parseInt(entry.target.dataset.scrollDelay) || index * 50) + 'ms'; 
                entry.target.style.transitionDelay = delay;
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }); 

    animatedElements.forEach((el, index) => {
        el.classList.add('scroll-animate-init'); 
        el.dataset.scrollDelay = (index % 5) * 60; 
        if (el.classList.contains('hero-text-item')) { 
            el.dataset.scrollDelay = (Array.from(el.parentNode.children).indexOf(el)) * 100 + 300;
        }
        observer.observe(el);
    });
}

const scrollAnimationStyles = `
    .scroll-animate-init {
        opacity: 0;
        transform: translateY(40px) scale(0.95);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .scroll-animate-init.hero-text-item { 
         transform: translateY(20px) scale(0.98);
    }
    .animate-in {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`;
const scrollStyleSheet = document.createElement("style");
scrollStyleSheet.innerText = scrollAnimationStyles;
document.head.appendChild(scrollStyleSheet);

// Typing effect for hero title
function typewriterEffect() {
    const titleElement = document.querySelector('.hero-text h1');
    if (!titleElement) return;

    const text = titleElement.dataset.originalText || titleElement.textContent || "";
    titleElement.dataset.originalText = text; 
    titleElement.textContent = ''; 
    titleElement.style.borderRight = '0.15em solid var(--secondary-yellow)'; 
    
    let i = 0;
    function type() {
        if (i < text.length) {
            titleElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 30); 
        } else {
            setTimeout(() => {
                 titleElement.style.borderRight = 'none';
            }, 1200); 
        }
    }
    const typeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(type, 300); 
                typeObserver.unobserve(entry.target);
            }
        });
    }, {threshold: 0.5});
    typeObserver.observe(titleElement);
}

// Mobile menu styles
const mobileMenuStyles = `
    @media (max-width: 768px) {
        .nav-links {
            position: fixed;
            top: 0; 
            right: -100%; 
            width: 75%; 
            max-width: 320px; 
            height: 100vh;
            background: rgba(15, 23, 42, 0.99); 
            backdrop-filter: blur(18px); 
            flex-direction: column;
            justify-content: center; 
            align-items: center; 
            padding-top: 0; 
            transition: right 0.45s cubic-bezier(0.77, 0, 0.175, 1); 
            border-left: 1px solid var(--glass-border);
            z-index: 999; 
            display: flex; 
        }
        
        .nav-links.active {
            right: 0; 
        }
        
        .nav-links li {
            margin: 1.5rem 0; 
            width: 100%;
            text-align: center;
            opacity: 0; 
            transform: translateX(20px); 
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .nav-links.active li { 
            opacity: 1;
            transform: translateX(0);
        }
        .nav-links.active li:nth-child(1) { transition-delay: 0.1s; }
        .nav-links.active li:nth-child(2) { transition-delay: 0.15s; }
        .nav-links.active li:nth-child(3) { transition-delay: 0.2s; }
        .nav-links.active li:nth-child(4) { transition-delay: 0.25s; }
        .nav-links.active li:nth-child(5) { transition-delay: 0.3s; }
        .nav-links.active li:nth-child(6) { transition-delay: 0.35s; }
        .nav-links.active li:nth-child(7) { transition-delay: 0.4s; }


        
        .nav-links a {
            font-size: 1.4rem; 
            padding: 0.8rem 1.5rem;
            border-radius: 8px;
            transition: background-color 0.3s ease, color 0.3s ease;
            display: block; 
        }
        
        .nav-links a:hover {
            background: var(--glass-bg);
            color: var(--secondary-yellow); 
        }
        
        .mobile-menu.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-6px, 7px);
        }
        
        .mobile-menu.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -7px);
        }
    }
`;
const styleSheet = document.createElement("style");
styleSheet.innerText = mobileMenuStyles;
document.head.appendChild(styleSheet);

// Initialize all effects
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading');
    function initAnimations() {
        typewriterEffect(); 
        animateStats();
        parallaxEffect();
        addScrollAnimations(); 
    }

    if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
        const observer = new MutationObserver((mutationsList, obs) => {
            for(const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    if (loadingScreen.classList.contains('hidden')) {
                        setTimeout(initAnimations, 100); 
                        obs.disconnect(); 
                        break;
                    }
                }
            }
        });
        observer.observe(loadingScreen, { attributes: true });
    } else {
         setTimeout(initAnimations, 100); 
    }
});

// Error handling for images and external resources
window.addEventListener('error', function(e) {
    if (e.target.src || e.target.href) {
         console.warn('Resource loading error:', e.target.src || e.target.href);
    }
}, true); 

// Easter egg
let bananaClicks = 0; 
const logoElement = document.querySelector('.logo');

if (logoElement) { 
    logoElement.addEventListener('click', function() {
        bananaClicks++;
        if (bananaClicks === 5) {
            const notification = document.getElementById('easterEggNotification');
            if (notification) {
                notification.classList.add('show');
                setTimeout(() => {
                    notification.classList.remove('show');
                }, 4000); 
            }
            bananaClicks = 0; 
        }
    });
}

// Console message
console.log('%c🍌 Big Red Banana Digital Marketing Agency 🍌', 'color: var(--primary-red); font-size: 20px; font-weight: bold; background-color: var(--secondary-yellow); padding: 5px 10px; border-radius: 5px;');
console.log('%cWe make brands go absolutely bananas! 🚀', 'color: var(--primary-red); font-size: 14px;');
console.log('%cInterested in working with us? (This is a demo site!)', 'color: #64748b; font-size: 12px;');

// Pricing card skeleton loader
window.addEventListener('load', function () {
    setTimeout(() => {
    const skeletons = document.getElementById('pricingSkeletons');
    const realContent = document.getElementById('pricingContent');
    if (skeletons && realContent) {
        skeletons.classList.add('hidden');
        realContent.classList.remove('hidden');
    }
    }, 1500); // delay in ms
});

// --- AI Slogan Generator Script ---
document.addEventListener('DOMContentLoaded', function() {
    const sloganBtn = document.getElementById('generate-slogan-btn');
    const topicInput = document.getElementById('slogan-topic-input');

    if(sloganBtn) {
        sloganBtn.addEventListener('click', handleSloganGeneration);
    }
    
    if(topicInput) {
        topicInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                handleSloganGeneration();
            }
        });
    }

    async function handleSloganGeneration() {
        const resultsContainer = document.getElementById('slogan-results-container');
        const topic = topicInput.value.trim();
        
        if (!topic) {
            resultsContainer.innerHTML = '<div class="slogan-card error-card">Please enter a topic to generate slogans.</div>';
            return;
        }
        
        sloganBtn.disabled = true;
        sloganBtn.innerHTML = '<i class="fas fa-spinner"></i>&nbsp;Generating...';
        
        // Use the existing .skeleton class for a themed loading state
        resultsContainer.innerHTML = `
            <div class="slogan-card skeleton" style="height: 80px;"></div>
            <div class="slogan-card skeleton" style="height: 80px;"></div>
            <div class="slogan-card skeleton" style="height: 80px;"></div>
        `;

        try {
            const prompt = `Generate 3 short, catchy marketing slogans for a business related to "${topic}". Return the response as a JSON array of strings.`;
            
            let chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
            const payload = { 
                contents: chatHistory,
                generationConfig: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: "ARRAY",
                        items: { type: "STRING" }
                    }
                }
            };
            const apiKey = ""; // IMPORTANT: API key is handled by the execution environment.
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
            
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.statusText}`);
            }

            const result = await response.json();
            
            if (result.candidates && result.candidates[0].content && result.candidates[0].content.parts[0].text) {
                const slogans = JSON.parse(result.candidates[0].content.parts[0].text);
                resultsContainer.innerHTML = slogans.map(slogan => `<div class="slogan-card">${slogan}</div>`).join('');
            } else {
                throw new Error("Invalid response structure from AI.");
            }

        } catch (error) {
            console.error("Slogan Generation Error:", error);
            resultsContainer.innerHTML = `<div class="slogan-card error-card">Sorry, we couldn't generate slogans right now. Please try again later.</div>`;
        } finally {
            sloganBtn.disabled = false;
            sloganBtn.innerHTML = '<i class="fas fa-magic"></i>&nbsp;Generate Slogans';
        }
    }
});