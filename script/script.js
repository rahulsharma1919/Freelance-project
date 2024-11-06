let currentSlide = 1;
const carouselSlide = document.querySelector(".carousel-slide");
const slides = document.querySelectorAll(".carousel-slide .story-card");
const totalSlides = slides.length;

// Get the initial slide width
let slideWidth = carouselSlide.clientWidth;

// Position the slide container to show the first actual slide (skip the cloned first and last slide)
carouselSlide.style.transform = `translateX(${-slideWidth * currentSlide}px)`;

// Helper function to update the slide width on resize
function updateSlideWidth() {
    slideWidth = carouselSlide.clientWidth;
    carouselSlide.style.transition = "none";
    carouselSlide.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
}

// Move slide with optional direction (1 or -1) for next/prev buttons
function moveSlide(direction = 1) {
    // Disable buttons during transition to prevent multiple clicks
    document.querySelectorAll(".carousel-btn").forEach((btn) => (btn.disabled = true));

    // Adjust currentSlide and apply the transformation
    currentSlide += direction;
    carouselSlide.style.transition = "transform 0.5s ease";
    carouselSlide.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
}

// Check for looping conditions after each transition ends
carouselSlide.addEventListener("transitionend", () => {
    // Loop to the first real slide if on the cloned last slide
    if (currentSlide === totalSlides - 1) {
        carouselSlide.style.transition = "none";
        currentSlide = 1;
        carouselSlide.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
    }
    // Loop to the last real slide if on the cloned first slide
    if (currentSlide === 0) {
        carouselSlide.style.transition = "none";
        currentSlide = totalSlides - 2;
        carouselSlide.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
    }

    // Re-enable buttons after transition
    document.querySelectorAll(".carousel-btn").forEach((btn) => (btn.disabled = false));
});

// Automatically move the slide every 5 seconds
let autoSlideInterval = setInterval(() => moveSlide(1), 5000);

// Pause auto-slide on hover and resume on mouse leave
carouselSlide.addEventListener("mouseenter", () => clearInterval(autoSlideInterval));
carouselSlide.addEventListener("mouseleave", () => {
    autoSlideInterval = setInterval(() => moveSlide(1), 5000);
});

// Update slide width on window resize for responsiveness
window.addEventListener("resize", updateSlideWidth);
