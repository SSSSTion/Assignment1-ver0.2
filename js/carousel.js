let slideIndex = 1;
let jsonPath;

// 如果在 GitHub Pages 上，则使用绝对路径
if (window.location.hostname === "sssstion.github.io") {
  jsonPath = "/BabyFactory/json/slides.json";
} else {
  // 本地开发环境中，使用相对路径
  jsonPath = "../json/slides.json";
}

fetch(jsonPath)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`); 
    }
    return response.json(); // 如果响应正常，解析为JSON
  })
  .then(data => {
    loadSlides(data.slides); // 确保传递的是 slides 数组
    showSlides(slideIndex); // 初次显示幻灯片
  })
  .catch(error => {
    console.error('Error loading slides:', error); // 捕获并处理任何错误
  });

function loadSlides(slides) {
  console.log(slides); // 添加这一行来查看 slides 数据

  const carouselInner = document.getElementById('carousel-inner');
  const dotsContainer = document.querySelector('.dots-container');

  slides.forEach((slide, index) => {
    // 创建每个幻灯片的div
    const slideDiv = document.createElement('div');
    slideDiv.className = `carousel-item ${index === 0 ? 'active' : ''}`;
    slideDiv.innerHTML = `
      <img src="${slide.image}" alt="${slide.alt}">
      <div class="caption">${slide.caption}</div>
    `;
    carouselInner.appendChild(slideDiv);

    // 创建导航点
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
  console.log(slideIndex); // 添加这一行来查看当前幻灯片索引

  let i;
  const slides = document.getElementsByClassName("carousel-item");
  const dots = document.getElementsByClassName("dot");

  // 循环到第一张或最后一张
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // 隐藏所有幻灯片
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // 移除所有点的active类
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // 显示当前幻灯片，并为相应的点添加active类
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
