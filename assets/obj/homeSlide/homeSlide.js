var csidx = 0;
const interval = 5000;
var slides;

function setSlide(n) {
    csidx = n;
    if (n >= slides.length) {csidx = 0;}
    if (n < 0) {csidx = slides.length-1;}
    for (var i=0;i<slides.length;i++) {
        slides[i].style.display = "none"
    }
    slides[csidx].style.display = "block";
}

function nextSlide() {
    setSlide(csidx+1);
}

function autoSlides() {
    nextSlide();
    setTimeout(autoSlides, interval);
}

function createSlide(imgUrl, title, subtitle, hyperlink) {
    const slide = document.createElement('div');
    slide.className = "slide transition";
    if (hyperlink) {
        slide.onclick = function () {window.open(hyperlink);}
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

function generateSlidesFromManifest() {
    const parent = document.getElementById('cs');
    var child; var sd;
    for (var i=0; i<slidesData.length; i++) {
        sd = slidesData[i];
        child = createSlide(sd.imgUrl, sd.title, sd.subtitle, sd.hyperlink);
        parent.appendChild(child);
    }
}

function initSlides() {
    generateSlidesFromManifest();
    slides = document.getElementsByClassName('slide');
    slides[0].style.display = "block";
    setTimeout(autoSlides, interval);
}

initSlides();