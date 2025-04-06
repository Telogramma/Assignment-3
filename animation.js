document.addEventListener("DOMContentLoaded", function () {
    const videoElement = document.getElementById('v1-video');
    const videoSection = document.getElementById('video-section');

    const options = {
        root: null,
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Video section is visible!');
                videoElement.play();
            } else {
                console.log('Video section is not visible!');
                videoElement.pause();
                videoElement.currentTime = 0;
            }
        });
    }, options);


    // HEADER ANIMATION
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentScroll > lastScrollTop) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
    

    // VISIONARY TEXT ANIMATION
    observer.observe(videoSection);

    window.addEventListener('scroll', function() {
        const section = document.querySelector('.visionary-section');
        const sectionPosition = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
    
        if (sectionPosition < windowHeight * 0.8 && sectionPosition > -section.offsetHeight) {
            section.classList.add('visible');
        }
    });

    const elements = [
        { selector: '.E20', className: 'visible' },
        { selector: '.R1-Ultra', className: 'visible' },
        { selector: '.V1-Ultra', className: 'visible' },
        { selector: '.V-1', className: 'visible' }, // Add V-1 here
        { selector: '.MACHApp', className: 'visible' },
        { selector: '.MACHBrand', className: 'visible' },
        { selector: '.V1Video-section', className: 'visible' },
        { selector: '.V1Video-content', className: 'visible' }
    ];
    
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
    
        elements.forEach(({ selector, className }) => {
            const element = document.querySelector(selector);
            if (!element) return;  // Skip if the element doesn't exist
    
            const position = element.getBoundingClientRect().top;
            console.log(`${selector}: ${position}`); // Log the position of each element
    
            if (position < windowHeight * 0.8 && position > -element.offsetHeight) {
                element.classList.add(className);
                console.log(`${selector} is now visible!`); // Log when element is visible
            }
        });
    });
    
});
