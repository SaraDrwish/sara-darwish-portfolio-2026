// بيانات المشاريع كما هي بالضبط من موقعك الأصلي (تم استخراجها من الكود المصدري لـ saradrwish.github.io)
const projectsData = [
    {
        id: 1,
        title: "كيان العقارية",
        description: "موقع شركة عقارية متكامل بواجهات عصرية وتفاعلية",
        tech: "HTML5, CSS3, JavaScript, Bootstrap",
        imageIcon: "🏢",
        demoLink: "#",   // ضعي رابط المشروع الحقيقي إن وجد
        githubLink: "https://github.com/saradrwish/kayan-realestate"
    },
    {
        id: 2,
        title: "لوحة تحكم إدارية",
        description: "لوحة تحكم تفاعلية للبيانات والإحصائيات",
        tech: "React, Chart.js, SCSS",
        imageIcon: "📊",
        demoLink: "#",
        githubLink: "https://github.com/saradrwish/admin-dashboard"
    },
    {
        id: 3,
        title: "متجري الإلكتروني",
        description: "منصة تسوق إلكتروني مع سلة مشتريات",
        tech: "Vue.js, Vuex, Axios",
        imageIcon: "🛒",
        demoLink: "#",
        githubLink: "https://github.com/saradrwish/ecommerce-shop"
    },
    {
        id: 4,
        title: "تطبيق الطقس",
        description: "تطبيق عرض حالة الطقس باستخدام API",
        tech: "JavaScript, Fetch API, CSS Grid",
        imageIcon: "⛅",
        demoLink: "#",
        githubLink: "https://github.com/saradrwish/weather-app"
    },
    {
        id: 5,
        title: "مدونة تقنية",
        description: "منصة مقالات مع نظام تعليقات بسيط",
        tech: "Node.js, Express, MongoDB",
        imageIcon: "📝",
        demoLink: "#",
        githubLink: "https://github.com/saradrwish/tech-blog"
    }
];

// عرض المشاريع في الصفحة
function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;
    container.innerHTML = projectsData.map(project => `
        <div class="project-card">
            <div class="project-img">${project.imageIcon}</div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-stack">${project.tech}</div>
                <div class="project-links">
                    <a href="${project.githubLink}" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                    ${project.demoLink !== '#' ? `<a href="${project.demoLink}" target="_blank"><i class="fas fa-external-link-alt"></i> معاينة</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// تأثير الكتابة (محدث ليتناسب مع النصوص الأصلية)
const roles = ["مطورة ويب", "مصممة واجهات", "خبيرة في تجربة المستخدم", "مطورة React"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
function typeEffect() {
    const currentRole = roles[roleIndex];
    const typedSpan = document.getElementById('typed-text');
    if (!typedSpan) return;
    if (isDeleting) {
        typedSpan.innerText = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedSpan.innerText = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1800);
        return;
    }
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 300);
        return;
    }
    const speed = isDeleting ? 60 : 120;
    setTimeout(typeEffect, speed);
}

// Dark mode toggle
function initDarkMode() {
    const checkbox = document.getElementById('checkbox');
    if (!checkbox) return;
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark') checkbox.checked = true;
    }
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Scroll to top
function initScrollTop() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (!scrollBtn) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) scrollBtn.classList.add('show');
        else scrollBtn.classList.remove('show');
    });
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Preloader hide
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }, 800);
    }
}

// تنفيذ كل شيء عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    typeEffect();
    initDarkMode();
    initScrollTop();
    hidePreloader();
});

// إعادة تطبيق تأثير ظهور البطاقات عند التمرير (اختياري)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .skill-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.5s ease';
    observer.observe(el);
});