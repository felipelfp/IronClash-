// Carrossel automático da seção hero
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}


setInterval(nextSlide, 4000);


indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});


let currentMemorialSlide = 0;
const memorialSlides = document.querySelectorAll('.memorial-slide');
const memorialIndicators = document.querySelectorAll('.memorial-indicator');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showMemorialSlide(index) {

    memorialSlides.forEach(slide => slide.classList.remove('active'));
    memorialIndicators.forEach(indicator => indicator.classList.remove('active'));
    
    
    memorialSlides[index].classList.add('active');
    memorialIndicators[index].classList.add('active');
}

function nextMemorialSlide() {
    currentMemorialSlide = (currentMemorialSlide + 1) % memorialSlides.length;
    showMemorialSlide(currentMemorialSlide);
}

function prevMemorialSlide() {
    currentMemorialSlide = (currentMemorialSlide - 1 + memorialSlides.length) % memorialSlides.length;
    showMemorialSlide(currentMemorialSlide);
}


nextBtn.addEventListener('click', nextMemorialSlide);
prevBtn.addEventListener('click', prevMemorialSlide);


memorialIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentMemorialSlide = index;
        showMemorialSlide(currentMemorialSlide);
    });
});


document.querySelectorAll('.menu-item').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
    });
});


const playButton = document.querySelector('.play-button');
playButton.addEventListener('click', () => {
    
    alert('🤖 Iniciando o jogo IronClash! 🎮');
});

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);


document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}


window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.glitch');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

function blinkRobotStatus() {
    const onlineStatuses = document.querySelectorAll('.robot-status.online');
    
    onlineStatuses.forEach(status => {
        setInterval(() => {
            status.style.opacity = status.style.opacity === '0.5' ? '1' : '0.5';
        }, 1000);
    });
}


window.addEventListener('load', blinkRobotStatus);


document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevMemorialSlide();
    } else if (e.key === 'ArrowRight') {
        nextMemorialSlide();
    }
});


let startX = 0;
let endX = 0;

const memorialCarousel = document.querySelector('.memorial-carousel');

memorialCarousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

memorialCarousel.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = startX - endX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextMemorialSlide();
        } else {
            prevMemorialSlide();
        }
    }
}


window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
   
    const cards = document.querySelectorAll('.team-card, .robot-card, .comment-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

document.addEventListener('DOMContentLoaded', () => {
  
    document.querySelectorAll('.team-card, .robot-card, .comment-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});