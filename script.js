// Mobile menu icon click event
document.querySelector('.menu-icon').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    const menuIcon = this;
  
    if (menu.classList.contains('active')) {
      closeMenu(menu, menuIcon);
    } else {
      openMenu(menu, menuIcon);
    }
  });
  
  // Close the menu when a link is clicked
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function () {
      const menu = document.querySelector('.menu');
      const menuIcon = document.querySelector('.menu-icon');
      closeMenu(menu, menuIcon);
    });
  });
  
  // Function to open the menu
  function openMenu(menu, menuIcon) {
    menu.classList.add('active');
    menuIcon.classList.add('active');
  }
  
  // Function to close the menu
  function closeMenu(menu, menuIcon) {
    menu.classList.remove('active');
    menuIcon.classList.remove('active');
  }

// ------------- second block squares anim ----------------------

const infoContent = document.querySelector('.second_block_info');





// Function to fade in text content when they appear on scroll
const fadeInOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
};


const observerOptions = {
    threshold: 0.1
};

const infoObserver = new IntersectionObserver(fadeInOnScroll, observerOptions);
const elementsToFadeIn = infoContent.children;

for (const el of elementsToFadeIn) {
    infoObserver.observe(el);
}

// Function to trigger the square animations when they appear on scroll
function triggerSquareAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const squares = entry.target.querySelectorAll('.square_fly');
            squares.forEach((square, index) => {
                if (index !== 1) {
                    square.style.animation = 'slideInFromLeft 0.5s forwards, pulsate 2s infinite 0.5s';
                } else {
                    square.style.animation = 'slideInFromRight 0.5s forwards, pulsate 2s infinite 0.5s';
                }
            });
            observer.unobserve(entry.target);
        }
    });
}

// Observer for the squares
const squareObserver = new IntersectionObserver(triggerSquareAnimation, {
    rootMargin: '-100px 0px',
    threshold: 0
});
squareObserver.observe(document.querySelector('.second_block'));

// ---------------- third block green line animation ----------------------

const greenLines = document.querySelectorAll('.green_line_4b');

// Function to trigger the animation when the element becomes visible
function triggerGreenLineAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0.5s'; // Apply 1-second delay
            entry.target.style.animationPlayState = 'running'; // Start the animation
            // Unobserve the target to prevent further triggers
            observer.unobserve(entry.target);
        }
    });
}

// Create a new Intersection Observer instance
const greenLineObserver = new IntersectionObserver(triggerGreenLineAnimation, {
    rootMargin: '-100px 0px', // This expands the intersection rectangle, making the callback trigger sooner
    threshold: 0 // Callback will trigger as soon as the element starts entering the viewport
});

// Observe each .green_line_4b element
greenLines.forEach(greenLine => {
    greenLine.style.animationPlayState = 'paused'; // Pause the animation initially
    greenLineObserver.observe(greenLine);
});


// Function to start the draw animation for a specific SVG
function startDrawAnimationForSVG(svg) {
    const paths = svg.querySelectorAll('path');
    paths.forEach(path => {
        path.style.animation = 'draw 3s ease-out forwards';
    });
}

// Observer for the first SVG
const drawSquareObserver1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startDrawAnimationForSVG(entry.target);
            drawSquareObserver1.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '0px',
    threshold: 0.5 // Adjust the threshold as needed
});

// Observe the first SVG element
drawSquareObserver1.observe(document.querySelector('.draw_square:nth-child(1)'));

// Similar code for the other SVGs
const drawSquareObserver2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startDrawAnimationForSVG(entry.target);
            drawSquareObserver2.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '0px',
    threshold: 0.5
});

drawSquareObserver2.observe(document.querySelector('.draw_square:nth-child(2)'));

const drawSquareObserver3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startDrawAnimationForSVG(entry.target);
            drawSquareObserver3.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '0px',
    threshold: 0.9
});

drawSquareObserver3.observe(document.querySelector('.draw_square:nth-child(3)'));

const drawSquareObserver4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startDrawAnimationForSVG(entry.target);
            drawSquareObserver4.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '0px',
    threshold: 0.9
});

drawSquareObserver4.observe(document.querySelector('.draw_square:nth-child(4)'));


function startAppearAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'none'; // Remove animation to reset
            void entry.target.offsetWidth; // Trigger reflow
            entry.target.style.animation = 'slideInFromRight_green_dash 1s forwards'; // Reapply animation
            observer.unobserve(entry.target);
        }
    });
}

// Observer for the elements
const appearObserver = new IntersectionObserver(startAppearAnimation, {
    root: null, // Use the viewport as the root
    threshold: 0.5 // Trigger when at least 50% of the element is visible
});

// Observe the elements
appearObserver.observe(document.querySelector('.green_dash'));

function startAppearAnimation_point(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'none'; // Remove animation to reset
            void entry.target.offsetWidth; // Trigger reflow
            entry.target.style.animation = 'slideInFromRight_green_point 1s forwards'; // Reapply animation
            observer.unobserve(entry.target);
        }
    });
}

// Second observer for .green_point
const appearObserver_2 = new IntersectionObserver(startAppearAnimation_point, {
    root: null, // Use the viewport as the root
    threshold: 0.5 // Trigger when at least 50% of the element is visible
});

// Observe the .green_point element
appearObserver_2.observe(document.querySelector('.green_point'));






// Parallax effect
const latsText = document.querySelector('.lats_text');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const speed = 0.5; // Adjust the parallax speed

    latsText.style.backgroundPositionY = -scrollY * speed + 'px';
});









document.addEventListener('scroll', function() {
    var parallaxContainer = document.getElementById('parallax-container');
    var locationText = parallaxContainer.querySelector('.location-text');
    var manorText = parallaxContainer.querySelector('.manor-text');
    var image = parallaxContainer.querySelector('.image');
    
    var containerTop = parallaxContainer.getBoundingClientRect().top;
    var scrollEffect = containerTop * -0.1; // Negate the value here
  
    locationText.style.transform = `translateX(-50%) translateY(${scrollEffect}px)`;
    manorText.style.transform = `translateY(${scrollEffect}px)`;
    image.style.transform = `translateY(${scrollEffect * -0.8}px)`; // Apply the effect to the image (adjust the multiplier as needed)
  });