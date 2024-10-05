document.addEventListener('DOMContentLoaded', function() {
    // 初始化首页 Swiper
    var homeSwiper = new Swiper('.home-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

    // 初始化照片展示页面 Swiper
    var photosSwiper = new Swiper('.photos-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'slide', // 使用不同的效果以区分
    });

    // 处理页面切换
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            pageSections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.remove('d-none');
                } else {
                    section.classList.add('d-none');
                }
            });
        });
    });

    // 默认显示首页
    document.querySelector('#home').classList.remove('d-none');

    // 处理日记表单提交
    const diaryForm = document.getElementById('diaryForm');
    const diaryEntries = document.getElementById('diaryEntries');

    diaryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const date = document.getElementById('diaryDate').value;
        const title = document.getElementById('diaryTitle').value;
        const content = document.getElementById('diaryContent').value;

        // 创建新的日记条目
        const entryDiv = document.createElement('div');
        entryDiv.className = 'diary-entry mb-3 p-3 border rounded';
        entryDiv.innerHTML = `
            <h4>${title}</h4>
            <p class="text-muted">${date}</p>
            <p>${content}</p>
        `;

        // 将新条目添加到日记列表
        diaryEntries.prepend(entryDiv);

        // 重置表单
        diaryForm.reset();
    });
});