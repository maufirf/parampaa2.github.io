var csidx = 0;
const interval = 5000;
var slides;
var dots;

function setSlide(n) {
    csidx = n;
    if (n >= slides.length) {csidx = 0;}
    if (n < 0) {csidx = slides.length-1;}
    for (var i=0;i<slides.length;i++) {
        slides[i].style.display = "none"
        dots[i].className = dots[i].className.replace(' carousel-dot-active', '');
    }
    slides[csidx].style.display = "block";
    dots[csidx].className += ' carousel-dot-active';
}

function nextSlide() {
    setSlide(csidx+1);
}

function prevSlide() {
    setSlide(csidx-1);
}

function autoSlides() {
    nextSlide();
    setTimeout(autoSlides, interval);
}

function createSlide(imgUrl, title, subtitle, hyperlink) {
    const slide = document.createElement('div');
    slide.className = "slide transition";
    if (hyperlink) {
        slide.onclick = function () {window.open(hyperlink);};
    }
    if (imgUrl) {
        slideImg = document.createElement('img');
        slideImg.src = imgUrl;
        slide.appendChild(slideImg);
    }
    if (imgUrl || title) {
        slideTextContainer = document.createElement('div');
        slideTextContainer.className = "slide-textcontainer";
        if (title) {
            slideTitle = document.createElement('h1');
            slideTitle.appendChild(document.createTextNode(title));
            slideTextContainer.appendChild(slideTitle);
        }
        if (subtitle) {
            slideSubtitle = document.createElement('h2');
            slideSubtitle.appendChild(document.createTextNode(subtitle));
            slideTextContainer.appendChild(slideSubtitle);
        }
        slide.appendChild(slideTextContainer);
    }
    return slide;
}

var createClickHandler = function(arg) {
    return function() { setSlide(arg); };
}

function generateSlidesFromManifest() {
    const slideParent = document.getElementById('cs');
    const dotsParent = document.getElementById('cd');
    var slideChild; var dotsChild; var sd;
    for (var i=0; i<slidesData.length; i++) {
        sd = slidesData[i];
        slideChild = createSlide(sd.imgUrl, sd.title, sd.subtitle, sd.hyperlink);
        slideParent.appendChild(slideChild);
        dotsChild = document.createElement('div');
        dotsChild.className = 'carousel-dot';
        dotsChild.onclick = createClickHandler(i);
        dotsParent.appendChild(dotsChild);
    }
}

function initSlides() {
    generateSlidesFromManifest();
    slides = document.getElementsByClassName('slide');
    dots = document.getElementsByClassName('carousel-dot');
    slides[0].style.display = "block";
    dots[0].className += ' carousel-dot-active';
    setTimeout(autoSlides, interval);

    document.getElementById('slideLeft').onclick = prevSlide;
    document.getElementById('slideRight').onclick = nextSlide;
}

initSlides();