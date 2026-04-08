// 灯箱功能
function openLightbox(imgSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imgSrc;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// 点击灯箱外部关闭
window.onclick = function(event) {
    const lightbox = document.getElementById('lightbox');
    if (event.target == lightbox) {
        lightbox.style.display = 'none';
    }
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 照片墙滚动渐入效果
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察照片墙项目
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease';
        observer.observe(item);
    });
});