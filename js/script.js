// ========== 1. SKILLS DATA ==========
const languagesSkills = [
    { name: "HTML5", icon: "fab fa-html5", percent: 95 },
    { name: "CSS3", icon: "fab fa-css3-alt", percent: 90 },
    { name: "JavaScript", icon: "fab fa-js", percent: 88 },
    { name: "Python", icon: "fab fa-python", percent: 80 },
];

const frameworksSkills = [
    { name: "React", icon: "fab fa-react", percent: 75 },
    { name: "Vue.js", icon: "fab fa-vuejs", percent: 80 },
    { name: "Bootstrap", icon: "fab fa-bootstrap", percent: 88 },
    { name: "Tailwind CSS", icon: "fab fa-tailwind", percent: 90 }
];

const devopsSkills = [
    { name: "Docker", icon: "fab fa-docker", percent: 80 },
    { name: "Kubernetes", icon: "fas fa-cubes", percent: 70 },
    { name: "Ansible", icon: "fas fa-code-branch", percent: 75 },
    { name: "Terraform", icon: "fas fa-infinity", percent: 65 },
    { name: "AWS", icon: "fab fa-aws", percent: 75 },
    { name: "Linux", icon: "fab fa-linux", percent: 85 }
];

const advancedSkills = [
    { name: "Depi Ultimate Pipeline", icon: "fas fa-rocket", desc: "خط أنابيب متكامل باستخدام Kubernetes, Ansible, Jenkins, Terraform, AWS.", project: { title: "Depi Ultimate Pipeline", repo: "https://github.com/Ahmad-AbdElrahman/Depi-ultimate-pipeline", tech: "K8s, Ansible, Jenkins" } }
];

// Projects Data
const projectsData = [
    { id: 1, title: "قالب Ghost (مدونة)", desc: "تصميم قالب احترافي لأنظمة التدوين Ghost CMS بواجهات عصرية ومتجاوبة.", tech: ["CSS3", "HTML5", "Responsive"], icon: "fab fa-ghost", github: "https://github.com/SaraDrwish/template3ghost", demo: "https://saradrwish.github.io/template3ghost/" },
    { id: 2, title: "قالب Leon (إبداعي)", desc: "موقع شخصي وشركة بتأثيرات CSS متقدمة وتنسيقات مبتكرة.", tech: ["CSS3", "HTML5", "JavaScript"], icon: "fas fa-lion", github: "https://github.com/SaraDrwish/leonjs5", demo: "https://saradrwish.github.io/leonjs5/" },
    { id: 3, title: "تصميم ويب احترافي", desc: "مشروع يعتمد على Flexbox و Grid لتنظيم العناصر بتصميم جذاب.", tech: ["CSS3", "HTML5"], icon: "fas fa-pen-ruler", github: "https://github.com/SaraDrwish/ProjectOne23", demo: "https://saradrwish.github.io/ProjectOne23/" },
    { id: 4, title: "معرض إبداعي", desc: "صفحة معرض صور ونماذج تواصل، مصممة بأسلوب عصري.", tech: ["CSS3", "HTML5"], icon: "fas fa-palette", github: "https://github.com/SaraDrwish/Project2", demo: "https://saradrwish.github.io/Project2/" },
    { id: 5, title: "مشروع Bootstrap 3", desc: "تصميم موقع متكامل باستخدام إطار Bootstrap مع أدوات تفاعلية.", tech: ["Bootstrap", "CSS3", "HTML5"], icon: "fab fa-bootstrap", github: "https://github.com/SaraDrwish/project3_bootstrap", demo: "https://saradrwish.github.io/project3_bootstrap/" },
    { id: 6, title: "تطبيق قائمة المهام", desc: "إدارة المهام اليومية، إضافة وحذف وحفظ البيانات محلياً.", tech: ["JavaScript", "CSS3", "HTML5", "LocalStorage"], icon: "fas fa-check-circle", github: "https://github.com/SaraDrwish/todo2023", demo: "https://saradrwish.github.io/todo2023/" },
    { id: 7, title: "عداد المهام", desc: "تطبيق بسيط لعد المهام وعرض إحصائيات تفاعلية.", tech: ["JavaScript", "CSS3", "HTML5"], icon: "fas fa-calculator", github: "https://github.com/SaraDrwish/js_task1", demo: "https://saradrwish.github.io/js_task1/" },
    { id: 8, title: "تطبيق تسوق تجريبي", desc: "تطبيق تسوق أساسي مع سلة مشتريات وإضافة منتجات.", tech: ["JavaScript", "CSS3", "HTML5"], icon: "fas fa-cart-shopping", github: "https://github.com/SaraDrwish/app1-shopping", demo: "#" },
    { id: 9, title: "صفحة أورانج", desc: "صفحة هبوط بتصميم جذاب بألوان زاهية.", tech: ["CSS3", "HTML5"], icon: "fas fa-leaf", github: "https://github.com/SaraDrwish/pro1cha2", demo: "https://saradrwish.github.io/pro1cha2/" },
    { id: 10, title: "تطبيق React الأول", desc: "تطبيق React مع Bootstrap لبناء واجهات حديثة.", tech: ["React", "Bootstrap", "CSS3", "HTML5"], icon: "fab fa-react", github: "https://github.com/SaraDrwish/reaaaacttttt23", demo: "https://saradrwish.github.io/reaaaacttttt23/" },
    { id: 11, title: "بورتفوليو React", desc: "بورتفوليو شخصي مبني على React مع تأثيرات حركية باستخدام Framer Motion.", tech: ["React", "Framer Motion", "CSS3"], icon: "fas fa-layer-group", github: "https://github.com/SaraDrwish/react3Porto", demo: "#" },
    { id: 12, title: "صفحة هبوط Vue.js", desc: "صفحة هبوط تفاعلية باستخدام Vue.js و Tailwind CSS.", tech: ["Vue.js", "Tailwind", "Figma"], icon: "fab fa-vuejs", github: "https://github.com/SaraDrwish/sara-s-task1-1-vueJs", demo: "#" },
    { id: 13, title: "MyDream Place (Vue.js)", desc: "تطبيق Vue.js متكامل مع Pinia لإدارة الحالة.", tech: ["Vue.js", "Pinia", "Tailwind"], icon: "fas fa-dream", github: "https://github.com/SaraDrwish/algoriza-internship-FE204", demo: "#" }
];

const freelanceProjects = [
    { id: 201, title: "منصة نفذلي (Nafezy)", desc: "حسابي على منصة نفذلي لتنفيذ المشاريع البرمجية الصغيرة والمتوسطة.", tech: ["Freelance", "Web Development"], icon: "fab fa-nutril", link: "https://nafezly.com/u/sara_darwish" },
    { id: 202, title: "منصة كفيل (Kafiil)", desc: "توثيق الأعمال الحرة والمشاريع المستقلة مع عملاء موثوقين.", tech: ["Freelance", "E-commerce"], icon: "fas fa-handshake", link: "https://kafiil.com/u/sara_darwish" },
    { id: 203, title: "منصة مستقل (Mostaql)", desc: "أعمالي الحرة ومشاريعي المنفذة عبر منصة مستقل.", tech: ["Freelance", "UI/UX"], icon: "fas fa-briefcase", link: "https://mostaql.com/u/sara_darwish_98/portfolio" }
];

const devopsProjects = [
    { id: 101, title: "Depi Ultimate Pipeline", desc: "خط أنابيب متكامل لتطبيق ويب، باستخدام Kubernetes, Ansible, Jenkins, Terraform ونشره على AWS.", tech: ["Kubernetes", "Ansible", "Jenkins", "Terraform", "AWS"], icon: "fas fa-rocket", github: "https://github.com/Ahmad-AbdElrahman/Depi-ultimate-pipeline", demo: "https://github.com/Ahmad-AbdElrahman/Depi-ultimate-pipeline" }
];

// ========== 2. RENDER FUNCTIONS ==========
function renderSkillSwiper(containerId, skillsArray, swiperId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = skillsArray.map(s => `
        <div class="swiper-slide">
            <i class="${s.icon}"></i>
            <h3>${s.name}</h3>
            <div class="progress-bar"><div class="progress-fill" style="width:${s.percent}%"></div></div>
            <small>${s.percent}%</small>
        </div>
    `).join('');
    new Swiper(`#${swiperId}`, {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: { 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }
    });
}

function renderAdvancedSlider() {
    const wrapper = document.getElementById('advancedSkillsSlider');
    if (!wrapper) return;
    wrapper.innerHTML = advancedSkills.map(s => `
        <div class="swiper-slide" data-skill='${JSON.stringify(s)}'>
            <i class="${s.icon}"></i>
            <h3>${s.name}</h3>
        </div>
    `).join('');
    new Swiper('.advancedSwiper', {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: { 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }
    });
    document.querySelectorAll('.advancedSwiper .swiper-slide').forEach(slide => {
        slide.addEventListener('click', () => {
            const skillData = JSON.parse(slide.getAttribute('data-skill'));
            openModal(skillData);
        });
    });
}

function openModal(skill) {
    const modal = document.getElementById('skillModal');
    const title = document.getElementById('modalSkillTitle');
    const desc = document.getElementById('modalSkillDesc');
    const projectDiv = document.getElementById('modalRelatedProject');
    title.innerText = skill.name;
    desc.innerText = skill.desc;
    projectDiv.innerHTML = `
        <h4>📁 مشروع مرتبط:</h4>
        <p><strong>${skill.project.title}</strong> - ${skill.project.tech}</p>
        <a href="${skill.project.repo}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a>
    `;
    modal.style.display = 'flex';
}

let allProjects = [...projectsData];
let currentFilter = 'all';
let currentSearch = '';

function renderProjects() {
    const container = document.getElementById('projectsGrid');
    if (!container) return;
    let filtered = allProjects.filter(p => {
        if (currentFilter !== 'all' && !p.tech.includes(currentFilter)) return false;
        if (currentSearch) {
            const searchLower = currentSearch.toLowerCase();
            const titleMatch = p.title.toLowerCase().includes(searchLower);
            const techMatch = p.tech.some(t => t.toLowerCase().includes(searchLower));
            if (!titleMatch && !techMatch) return false;
        }
        return true;
    });
    if (filtered.length === 0) {
        container.innerHTML = `<div class="no-results">🤔 لا توجد مشاريع تطابق البحث. حاول بكلمات أخرى.</div>`;
        return;
    }
    container.innerHTML = filtered.map(p => `
        <div class="project-card">
            <div class="project-img"><i class="${p.icon}"></i></div>
            <div class="project-info">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <div class="project-tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
                <div class="project-links">
                    <a href="${p.github}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a>
                    ${p.demo !== '#' ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> معاينة</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function renderFreelance() {
    const container = document.getElementById('freelanceGrid');
    if (!container) return;
    container.innerHTML = freelanceProjects.map(p => `
        <div class="project-card">
            <div class="project-img"><i class="${p.icon}"></i></div>
            <div class="project-info">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <div class="project-tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
                <div class="project-links">
                    <a href="${p.link}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> زيارة المنصة</a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderDevopsProjects() {
    const container = document.getElementById('devopsProjectsGrid');
    if (!container) return;
    container.innerHTML = devopsProjects.map(p => `
        <div class="project-card">
            <div class="project-img"><i class="${p.icon}"></i></div>
            <div class="project-info">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <div class="project-tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
                <div class="project-links">
                    <a href="${p.github}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a>
                    ${p.demo !== '#' ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> معاينة</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function updateFilterButtons() {
    const categories = ['all', 'HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Bootstrap', 'Tailwind'];
    const btnsContainer = document.getElementById('filterButtons');
    if (!btnsContainer) return;
    btnsContainer.innerHTML = categories.map(cat => `
        <button class="filter-btn ${currentFilter === cat ? 'active' : ''}" data-filter="${cat}">${cat === 'all' ? (currentLang === 'ar' ? 'الكل' : 'All') : cat}</button>
    `).join('');
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilter = btn.getAttribute('data-filter');
            updateFilterButtons();
            renderProjects();
        });
    });
}

// ========== 3. TYPEWRITER & TRANSLATIONS ==========
const roles = { ar: ["مطورة ويب", "مهندسة برمجيات", "خبيرة سحابية", "بانية تجارب رقمية"], en: ["Web Developer", "Software Engineer", "Cloud Expert", "Digital Experience Builder"] };
let currentLang = "ar";
let roleIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
    const typedSpan = document.getElementById('typed-text');
    if (!typedSpan) return;
    const currentRole = roles[currentLang][roleIndex];
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
        roleIndex = (roleIndex + 1) % roles[currentLang].length;
        setTimeout(typeEffect, 300);
        return;
    }
    setTimeout(typeEffect, isDeleting ? 60 : 100);
}

const translations = {
    ar: {
        nav_home: "الرئيسية", nav_about: "من أنا", nav_skills: "مهاراتي", nav_projects: "أعمالي", nav_contact: "تواصل",
        hero_greeting: "أنا", btn_work: "استعرض أعمالي", btn_cv: "السيرة الذاتية", about_title: "من أنا",
        about_text: "أنا سارة درويش، مطورة ويب ومهندسة برمجيات. أمتلك شغفاً كبيراً ببناء تطبيقات ويب وتطبيقات مخصصة حديثة باستخدام React وVue.js، وأتمتة العمليات وإدارة البنية التحتية السحابية عبر Docker وKubernetes وAnsible وAWS. أهدف لتقديم حلول متكاملة وعملية تساهم في نجاح مشاريعكم الرقمية.",
        skills_title: "مهاراتي التقنية", advanced_title: "مشاريع متقدمة",
        projects_title: "أعمالي", search_placeholder: "بحث بالاسم أو التقنية...",
        freelance_title: "أعمال حرة ومنصات", devops_title: "مشاريع DevOps والسحابة",
        contact_title: "تواصل معي", contact_desc: "يسعدني التواصل معك للمشاريع أو فرص العمل",
        footer: "جميع الحقوق محفوظة",
        lang_group: "لغات البرمجة", frameworks_group: "الأطر والمكتبات", devops_group: "DevOps والبنية التحتية"
    },
    en: {
        nav_home: "Home", nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_contact: "Contact",
        hero_greeting: "I'm", btn_work: "View my work", btn_cv: "Resume", about_title: "About Me",
        about_text: "I'm Sara Darwish, a Web Developer and Software Engineer. I have a great passion for building modern web and custom applications using React and Vue.js, as well as automating processes and managing cloud infrastructure with Docker, Kubernetes, Ansible, and AWS. My goal is to provide integrated and practical solutions that contribute to the success of your digital projects.",
        skills_title: "Technical Skills", advanced_title: "Advanced Projects",
        projects_title: "Projects", search_placeholder: "Search by name or tech...",
        freelance_title: "Freelance & Platforms", devops_title: "DevOps & Cloud Projects",
        contact_title: "Contact Me", contact_desc: "I'd love to connect for projects or job opportunities",
        footer: "All rights reserved",
        lang_group: "Programming Languages", frameworks_group: "Frameworks & Libraries", devops_group: "DevOps & Infrastructure"
    }
};

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === "ar" ? "ar" : "en";
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
    const t = translations[lang];
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (t[key]) el.innerText = t[key];
    });
    const heroNameSpan = document.getElementById("heroName");
    const logoTitle = document.querySelector(".logo h2");
    if (lang === "ar") {
        heroNameSpan.innerText = "سارة درويش";
        logoTitle.innerHTML = `سارة <span>درويش</span>`;
    } else {
        heroNameSpan.innerText = "SARA DARWISH";
        logoTitle.innerHTML = `SARA <span>DARWISH</span>`;
    }
    // Adjust header alignment
    const logo = document.querySelector('.logo');
    const spacer = document.querySelector('.empty-spacer');
    if (lang === 'ar') {
        logo.style.order = '3';
        spacer.style.order = '1';
    } else {
        logo.style.order = '1';
        spacer.style.order = '3';
    }
    roleIndex = 0; charIndex = 0; isDeleting = false;
    typeEffect();
    updateFilterButtons();
}

// ========== 4. UI HELPERS ==========
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, null, targetId);
            }
        });
    });
}

function initScrollReveal() {
    const elements = document.querySelectorAll('.project-card, .about-card, .contact-card, .swiper-slide');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function initScrollTop() {
    const scrollBtn = document.getElementById('scrollTop');
    const circle = document.querySelector('.progress-ring-circle');
    const radius = 22;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
    function setProgress(percent) {
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        if (percent < 30) circle.style.stroke = '#efb710';
        else if (percent < 70) circle.style.stroke = '#bed6db';
        else circle.style.stroke = '#8fb5bb';
    }
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        setProgress(scrollPercent);
        if (scrollTop > 400) scrollBtn.classList.add('show');
        else scrollBtn.classList.remove('show');
    });
    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initQuickNav() {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const dots = document.querySelectorAll('.nav-dot');
    window.addEventListener('scroll', () => {
        let current = '';
        for (let section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 200 && rect.bottom >= 200) {
                    current = section;
                    break;
                }
            }
        }
        dots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('data-section') === current) dot.classList.add('active');
        });
    });
}

function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const nav = document.getElementById('mainNav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
    });
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            toggle.classList.remove('active');
        });
    });
}

function initDarkMode() {
    const toggle = document.getElementById('themeToggle');
    if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });
}

// ========== 5. INITIALIZATION ==========
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }
    }, 500);
    
    renderSkillSwiper('languagesSwiper', languagesSkills, 'langSwiper');
    renderSkillSwiper('frameworksSwiperWrapper', frameworksSkills, 'frameworksSwiper');
    renderSkillSwiper('devopsSwiperWrapper', devopsSkills, 'devopsSwiper');
    renderAdvancedSlider();
    renderProjects();
    renderFreelance();
    renderDevopsProjects();
    updateFilterButtons();
    typeEffect();
    initDarkMode();
    initScrollTop();
    initQuickNav();
    initMobileMenu();
    initSmoothScroll();
    initScrollReveal();
    
    const modal = document.getElementById('skillModal');
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) closeBtn.addEventListener('click', () => modal.style.display = 'none');
    window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            renderProjects();
        });
    }
    
    setLanguage('ar');
    document.getElementById('langToggle').addEventListener('click', () => setLanguage(currentLang === 'ar' ? 'en' : 'ar'));
});