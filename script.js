// 简单的轮播图实现
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('img');
let currentSlide = 0;

function showSlide() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
}

// 每隔 3 秒切换一次图片
setInterval(nextSlide, 3000);

// 初始显示第一张图片
showSlide();