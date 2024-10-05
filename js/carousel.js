let slideIndex = 1;
let jsonPath;

// when using GitHub Pages，use absolute path
if (window.location.hostname === "sssstion.github.io") {
  jsonPath = "https://sssstion.github.io/Assignment1-ver0.2/json/slides.json";
} else {
  // when in my pc,use relative path
  jsonPath = "./json/slides.json";
}

fetch(jsonPath)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`); 
    }
    return response.json(); // if response is ok,return json
  })
  .then(data => {
    loadSlides(data.slides); // load the slides
    showSlides(slideIndex); // show slide firstly
    autoSlide(); // start up auto change
  })
  .catch(error => {
    console.error('Error loading slides:', error); // catch and display the error report
  });

function loadSlides(slides) {
  console.log(slides); // check slides.json data

  const carouselInner = document.getElementById('carousel-inner');
  const dotsContainer = document.querySelector('.dots-container');

  slides.forEach((slide, index) => {
    // create the div of every slide
    const slideDiv = document.createElement('div');
    slideDiv.className = `carousel-item ${index === 0 ? 'active' : ''}`;
    slideDiv.innerHTML = `
      <img src="${slide.image}" alt="${slide.alt}">
      <div class="caption">${slide.caption}</div>
    `;
    carouselInner.appendChild(slideDiv);

    // create the dot
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.onclick = function () {
      currentSlide(index + 1);
    };
    dotsContainer.appendChild(dot);
  });
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  console.log(slideIndex); // check the index

  let i;
  const slides = document.getElementsByClassName("carousel-item");
  const dots = document.getElementsByClassName("dot");

  // untill the last one or first one
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // hide all the slides（through remote active）
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  // replce all dots' active
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // display current slide（through add active）
  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].className += " active";
}

// change carousel automatically
function autoSlide() {
  setInterval(function() {
    slideIndex++;
    showSlides(slideIndex);
  }, 4000); // 4s once
}
