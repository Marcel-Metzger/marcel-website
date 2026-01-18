/**
 * QUANT PORTFOLIO - Interactive JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initThemeToggle();
    initTypewriter();
    initScrollReveal();
    initCounterAnimation();
    initSmoothScroll();
    initActiveNav();
    initSocialBar();
    
    console.log('%c📈 Built with data & curiosity', 'font-size: 14px; color: #8b5cf6;');
});

function initNavigation() {
    const nav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    navToggle?.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle?.classList.remove('active');
            navMenu?.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (themeIcon) {
        themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
    }
    
    themeToggle?.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        if (themeIcon) {
            themeIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
        }
    });
}

function initTypewriter() {
    const element = document.querySelector('.typewriter');
    if (!element) return;
    
    const titles = [
        'Finance & Risk Trainee',
        'Aspiring Quant Researcher',
        'Data-Driven Analyst',
        'Quantitative Finance Enthusiast',
        'Algorithmic Thinker'
    ];
    
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;
    
    function type() {
        const currentTitle = titles[titleIndex];
        
        if (isPaused) {
            setTimeout(type, 2000);
            isPaused = false;
            isDeleting = true;
            return;
        }
        
        if (isDeleting) {
            element.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
            }
            
            setTimeout(type, 50);
        } else {
            element.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentTitle.length) {
                isPaused = true;
            }
            
            setTimeout(type, 80);
        }
    }
    
    type();
}

function initScrollReveal() {
    const elements = document.querySelectorAll('.section, .project-card, .timeline-item, .skill-category');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    elements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const update = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(update);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                update();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                window.scrollTo({
                    top: target.offsetTop - navHeight - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const navHeight = document.querySelector('.nav').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

function initSocialBar() {
    const socialBar = document.querySelector('.social-bar');
    const footer = document.querySelector('.footer');
    
    if (!socialBar || !footer) return;
    
    let isLockedToFooter = false;
    let lockedPosition = 0;
    
    function updatePosition() {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const footerVisible = footerRect.top < windowHeight;
        
        if (footerVisible) {
            // Footer is visible - lock the bar to the footer
            if (!isLockedToFooter) {
                // First time reaching footer - lock position
                isLockedToFooter = true;
                lockedPosition = windowHeight - footerRect.top;
            }
            // Keep the locked position (no recalculation while at footer)
            socialBar.style.bottom = lockedPosition + 'px';
        } else {
            // Footer not visible - release the lock
            if (isLockedToFooter) {
                isLockedToFooter = false;
            }
            socialBar.style.bottom = '0px';
        }
    }
    
    // Throttle scroll events
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updatePosition();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
    
    window.addEventListener('resize', () => {
        isLockedToFooter = false; // Reset lock on resize
        updatePosition();
    }, { passive: true });
    
    // Initial position
    updatePosition();
}
