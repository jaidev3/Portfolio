// Modern Skills Animation with Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for skill animations
    const skillCategories = document.querySelectorAll('.skill-category');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Add staggered animation to skill bars
                const skillBars = entry.target.querySelectorAll('.skill-bar');
                skillBars.forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.opacity = '1';
                        bar.style.transform = 'translateX(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    skillCategories.forEach(category => {
        skillObserver.observe(category);
    });
    
    // Add smooth scrolling for internal navigation links only
    const internalLinks = document.querySelectorAll('.header-links .link');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Only prevent default for internal section links (starting with #)
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 100; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
            // Let navbar links navigate normally to other pages
        });
    });
    
    // Add navbar background on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const navbar = document.querySelector('.navbar');
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(25px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.1)';
            navbar.style.backdropFilter = 'blur(20px)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Add typing animation for site description
    const siteDescription = document.querySelector('.site-description');
    if (siteDescription) {
        const text = siteDescription.textContent;
        siteDescription.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                siteDescription.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing animation after hero animations
        setTimeout(typeWriter, 1500);
    }
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('#particles-js::before');
        const speed = scrolled * 0.5;
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${speed}px)`;
        });
    });
    
    // Add hover effect to skill categories
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});