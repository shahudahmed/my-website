 <script>
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
                    background: rgba(255, 250, 235, 0.98);
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
                    color: var(--primary-text);
                }
                
                .nav-links a:hover {
                    background: var(--primary-yellow);
                    color: var(--secondary-red); 
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
            logoElement.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent link from navigating
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
        console.log('%c🍌 Big Red Banana Digital Marketing Agency 🍌', 'color: var(--secondary-red); font-size: 20px; font-weight: bold; background-color: var(--primary-yellow); padding: 5px 10px; border-radius: 5px;');
        console.log('%cWe make brands go absolutely bananas! 🚀', 'color: var(--secondary-red); font-size: 14px;');
        console.log('%cInterested in working with us? (This is a demo site!)', 'color: #64748b; font-size: 12px;');
    </script>
    <script>
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
    </script>

<script>
const reviewsData = [
  {
    quote: "Big Red Banana took our brand from invisible to unforgettable. Their creative campaigns and relentless energy made all the difference. We saw a 3x jump in engagement within months!",
    name: "Amit Sharma",
    role: "Founder, Follibloom",
    avatar: "A"
  },
  {
    quote: "The team’s data-driven approach and creative spark are unmatched. Our ROI skyrocketed and our social presence finally feels alive. Highly recommended for brands that want to stand out.",
    name: "Priya Desai",
    role: "Marketing Lead, Akhada Raipur",
    avatar: "P"
  },
  {
    quote: "From strategy to execution, BRB delivers. Their attention to detail and passion for results is rare. We love working with them!",
    name: "Sagar Shridesh",
    role: "Podcast Host",
    avatar: "S"
  },
  {
    quote: "We needed a bold digital partner and found the best. The team is responsive, creative, and always goes the extra mile. Our campaigns have never looked better.",
    name: "Fatima Ali",
    role: "CMO, Ali MART",
    avatar: "F"
  },
  {
    quote: "Bananas? More like brilliant! The results speak for themselves. Our brand is now the talk of the town.",
    name: "Jay Patel",
    role: "Owner, Bakewana",
    avatar: "J"
  }
];

const carousel = document.getElementById('reviewsCarousel');
const dotsContainer = document.getElementById('reviewsDots');
let current = 0, timer = null;

function renderReviews() {
  carousel.innerHTML = reviewsData.map((r, i) => `
    <div class="review-card${i === current ? ' active' : ''}">
      <div class="review-quote">${r.quote}</div>
      <div class="review-client">
        <div class="review-avatar">${r.avatar}</div>
        <div class="review-client-info">
          <div class="review-client-name">${r.name}</div>
          <div class="review-client-role">${r.role}</div>
        </div>
      </div>
    </div>
  `).join('');
  dotsContainer.innerHTML = reviewsData.map((_, i) =>
    `<div class="reviews-dot${i === current ? ' active' : ''}" data-idx="${i}"></div>`
  ).join('');
}
function nextReview() {
  current = (current + 1) % reviewsData.length;
  renderReviews();
}
function prevReview() {
  current = (current - 1 + reviewsData.length) % reviewsData.length;
  renderReviews();
}
function goToReview(idx) {
  current = idx;
  renderReviews();
}
function startAutoSwitch() {
  if (timer) clearInterval(timer);
  timer = setInterval(() => {
    nextReview();
  }, 5000);
}
carousel.addEventListener('mouseenter', () => clearInterval(timer));
carousel.addEventListener('mouseleave', startAutoSwitch);

document.getElementById('nextReview').onclick = () => { nextReview(); startAutoSwitch(); };
document.getElementById('prevReview').onclick = () => { prevReview(); startAutoSwitch(); };
dotsContainer.onclick = e => {
  if (e.target.classList.contains('reviews-dot')) {
    goToReview(Number(e.target.dataset.idx));
    startAutoSwitch();
  }
};

renderReviews();
startAutoSwitch();
</script>
