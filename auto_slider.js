let slideIndex = [1, 1, 1];
let slideId = ["slideshow1", "slideshow2", "slideshow3"];

// Initial setup for each slideshow
slideId.forEach((id, index) => {
    showSlides(1, index, id);
});

function plusSlides(n, no, id) {
    showSlides(slideIndex[no] += n, no, id);
}

function currentSlide(n, no, id) {
    showSlides(slideIndex[no] = n, no, id);
}

function showSlides(n, no, id) {
    let i;
    let slides = document.querySelectorAll(`#${id} .mySlides`);
    let dots = document.querySelectorAll(`#${id} .dot`);
    if (n > slides.length) { slideIndex[no] = 1; }
    if (n < 1) { slideIndex[no] = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex[no] - 1].style.display = "block";
    dots[slideIndex[no] - 1].className += " active";
}
