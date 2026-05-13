// ---------- Data ----------
// Basic skills
const basicSkills = [
    { name: "HTML5", icon: "fab fa-html5", percent: 95 },
    { name: "CSS3", icon: "fab fa-css3-alt", percent: 90 },
    { name: "JavaScript", icon: "fab fa-js", percent: 88 },
    { name: "React", icon: "fab fa-react", percent: 85 },
    { name: "Vue.js", icon: "fab fa-vuejs", percent: 82 },
    { name: "Git", icon: "fab fa-git-alt", percent: 85 },
    { name: "Python", icon: "fab fa-python", percent: 80 },
];

// Advanced skills for slider
const advancedSkills = [
    {
        name: "DevOps", icon: "fas fa-code-branch",
        desc: "ثقافة وأتمتة تجمع بين التطوير والعمليات لتحسين التسليم والنشر.",
        project: { title: "CI/CD Pipeline", repo: "https://github.com/SaraDrwish?tab=repositories", tech: "GitHub Actions, Docker" }
    },
    {
        name: "Cloud", icon: "fas fa-cloud",
        desc: "الحوسبة السحابية: AWS, Azure, نشر وإدارة الموارد.",
        project: { title: "Cloud Infrastructure", repo: "https://github.com/SaraDrwish?tab=repositories", tech: "AWS EC2, S3, IAM" }
    },
    {
        name: "AWS", icon: "fab fa-aws",
        desc: "خدمات أمازون السحابية: EC2, Lambda, RDS, S3, IAM.",
        project: { title: "Serverless API", repo: "https://github.com/SaraDrwish", tech: "AWS Lambda, API Gateway" }
    },
    {
        name: "Linux", icon: "fab fa-linux",
        desc: "إدارة أنظمة Linux، أوامر bash، أتمتة المهام، وتهيئة الخوادم.",
        project: { title: "Linux Scripts", repo: "https://github.com/SaraDrwish?tab=repositories", tech: "Bash, Cron" }
    },
    {
        name: "Ansible", icon: "fas fa-cogs",
        desc: "أتمتة التهيئة وإدارة التكوين باستخدام Ansible playbooks.",
        project: { title: "Ansible Deployment", repo: "https://github.com/SaraDrwish?tab=repositories", tech: "Ansible, YAML" }
    },
    {
        name: "Docker", icon: "fab fa-docker",
        desc: "حاويات Docker، إنشاء Dockerfiles، Docker Compose، ورفع الصور إلى Registry.",
        project: { title: "Dockerized Node.js App", repo: "https://github.com/SaraDrwish", tech: "Docker, Node.js" }
    },
    {
        name: "Python", icon: "fab fa-python",
        desc: "برمجة بايثون لتطوير الويب (Django/Flask)، سكريبتات الأتمتة وتحليل البيانات.",
        project: { title: "Python Automation Tools", repo: "https://github.com/SaraDrwish", tech: "Python, Flask" }
    }
];

// Main projects (exactly from original portfolio with correct skills and links)
const projectsData = [
    { id: 1, title: "قالب Ghost", desc: "تصميم قالب احترافي لموقع Ghost CMS مع تنسيقات عصرية.", tech: ["CSS3", "HTML5", "Responsive"], icon: "👻", github: "https://github.com/SaraDrwish/template3ghost", demo: "https://saradrwish.github.io/template3ghost/" },
    { id: 2, title: "قالب Leon", desc: "قالب إبداعي يعتمد على التصميم الحديث والنظيف مع تأثيرات CSS.", tech: ["CSS3", "HTML5", "JS"], icon: "🦁", github: "https://github.com/SaraDrwish/leonjs5", demo: "https://saradrwish.github.io/leonjs5/" },
    { id: 3, title: "Project One", desc: "مشروع تصميم ويب متكامل بواجهة أنيقة باستخدام Flexbox و Grid.", tech: ["CSS3", "HTML5"], icon: "📁", github: "https://github.com/SaraDrwish/ProjectOne23", demo: "https://saradrwish.github.io/ProjectOne23/" },
    { id: 4, title: "Project Two", desc: "تصميم موقع احترافي آخر يعكس مهارات التصميم المتجاوب.", tech: ["CSS3", "HTML5"], icon: "📂", github: "https://github.com/SaraDrwish/Project2", demo: "https://saradrwish.github.io/Project2/" },
    { id: 5, title: "Bootstrap Project 3", desc: "تصميم موقع باستخدام إطار العمل Bootstrap مع عناصر تفاعلية.", tech: ["Bootstrap", "CSS3", "HTML5"], icon: "🔷", github: "https://github.com/SaraDrwish/project3_bootstrap", demo: "https://saradrwish.github.io/project3_bootstrap/" },
    { id: 6, title: "Todo List", desc: "تطبيق لإدارة المهام اليومية بقائمة مهام تفاعلية مع حفظ البيانات محلياً.", tech: ["JavaScript", "CSS3", "HTML5", "LocalStorage"], icon: "✅", github: "https://github.com/SaraDrwish/todo2023", demo: "https://saradrwish.github.io/todo2023/" },
    { id: 7, title: "JS Task Counter", desc: "تطبيق بسيط لعد المهام وعرض الإحصائيات بطريقة تفاعلية.", tech: ["JavaScript", "CSS3", "HTML5"], icon: "🔢", github: "https://github.com/SaraDrwish/js_task1", demo: "https://saradrwish.github.io/js_task1/" },
    { id: 8, title: "Shopping App", desc: "تطبيق تسوق بسيط مع سلة مشتريات وإضافة منتجات.", tech: ["JavaScript", "CSS3", "HTML5"], icon: "🛍️", github: "https://github.com/SaraDrwish/app1-shopping", demo: "#" },
    { id: 9, title: "Orang Page", desc: "صفحة تصميم فريدة وجذابة بألوان مميزة.", tech: ["CSS3", "HTML5"], icon: "🍊", github: "https://github.com/SaraDrwish/pro1cha2", demo: "https://saradrwish.github.io/pro1cha2/" },
    { id: 10, title: "React Project 1", desc: "تطبيق React مع Bootstrap لتصميم واجهات حديثة.", tech: ["React", "Bootstrap", "CSS3", "HTML5"], icon: "⚛️", github: "https://github.com/SaraDrwish/reaaaacttttt23", demo: "https://saradrwish.github.io/reaaaacttttt23/" },
    { id: 11, title: "React Project 3 (Portfolio)", desc: "بورتفوليو شخصي مبني على React مع مكتبة Framer Motion.", tech: ["React", "Framer Motion", "CSS3"], icon: "✨", github: "https://github.com/SaraDrwish/react3Porto", demo: "#" },
    { id: 12, title: "Vue.js Landing Page", desc: "صفحة هبوط باستخدام Vue.js و Tailwind CSS.", tech: ["Vue.js", "Tailwind", "Figma"], icon: "🖌️", github: "https://github.com/SaraDrwish/sara-s-task1-1-vueJs", demo: "#" },
    { id: 13, title: "MyDream Place (Vue.js)", desc: "تطبيق Vue.js متكامل مع Pinia لإدارة الحالة.", tech: ["Vue.js", "Pinia", "Tailwind"], icon: "🌟", github: "https://github.com/SaraDrwish/algoriza-internship-FE204", demo: "#" }
];

// DevOps specific projects (real ones from her GitHub if available, else generic)
const devopsProjects = [
    { id: 101, title: "Dockerized Node App", desc: "تطبيق Node.js مع Dockerfile و docker-compose لنشر سريع.", tech: ["Docker", "Node.js", "Express"], icon: "🐳", github: "https://github.com/SaraDrwish/docker-node-app", demo: "#" },
    { id: 102, title: "GitHub Actions CI/CD", desc: "إعداد pipeline آلي لبناء واختبار تطبيقات React.", tech: ["GitHub Actions", "React", "YAML"], icon: "⚙️", github: "https://github.com/SaraDrwish/actions-demo", demo: "#" },
    { id: 103, title: "Ansible Playbooks", desc: "مجموعة من playbooks لأتمتة تهيئة خوادم Ubuntu.", tech: ["Ansible", "Linux", "YAML"], icon: "📜", github: "https://github.com/SaraDrwish/ansible-playbooks", demo: "#" }
];

// ---------- Helper Functions ----------
function renderBasicSkills() {
    const container = document.getElementById('skillsGrid');
    if (!container) return;
    container.innerHTML = basicSkills.map(s => `
        <div class="skill-card">
            <i class="${s.icon}"></i>
            <h3>${s.name}</h3>
            <div class="progress-bar"><div class="progress-fill" style="width:${s.percent}%"></div></div>
            <small>${s.percent}%</small>
        </div>
    `).join('');
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

    document.querySelectorAll('.swiper-slide').forEach(slide => {
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
        <a href="${skill.project.repo}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> رابط GitHub</a>
    `;
    modal.style.display = 'flex';
}

let allProjects = [...projectsData];
let currentFilter = 'all';
let currentSearch = '';

function renderProjects() {
    const container = document.getElementById('projectsGrid');
    if (!container) return;
    
    let filtered = allProjects.filter(project => {
        if (currentFilter !== 'all' && !project.tech.includes(currentFilter)) return false;
        if (currentSearch) {
            const searchLower = currentSearch.toLowerCase();
            const titleMatch = project.title.toLowerCase().includes(searchLower);
            const techMatch = project.tech.some(t => t.toLowerCase().includes(searchLower));
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
            <div class="project-img">${p.icon}</div>
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

function renderDevopsProjects() {
    const container = document.getElementById('devopsProjectsGrid');
    if (!container) return;
    container.innerHTML = devopsProjects.map(p => `
        <div class="project-card">
            <div class="project-img">${p.icon}</div>
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

// Typewriter effect
const roles = { ar: ["مطورة ويب", "مهندسة DevOps", "خبيرة سحابية", "بانية تجارب رقمية"], en: ["Web Developer", "DevOps Engineer", "Cloud Expert", "Digital Experience Builder"] };
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

// Translations
const translations = {
    ar: {
        nav_home: "الرئيسية", nav_about: "من أنا", nav_skills: "مهاراتي", nav_projects: "أعمالي", nav_contact: "تواصل",
        hero_greeting: "أنا", btn_work: "استعرض أعمالي", btn_cv: "السيرة الذاتية", about_title: "من أنا",
        about_text: "أنا سارة درويش، مطورة ويب ومهندسة DevOps. أمتلك شغفًا كبيرًا ببناء تطبيقات ويب حديثة باستخدام React وVue.js، وأيضًا في أتمتة العمليات وإدارة البنية التحتية السحابية باستخدام Docker وAnsible وAWS. هدفي هو تقديم حلول متكاملة وفعّالة تساهم في نجاح المشاريع الرقمية.",
        skills_title: "مهاراتي التقنية", advanced_title: "⚙️ مهارات متقدمة (DevOps & Cloud)",
        projects_title: "أعمالي", search_placeholder: "🔍 بحث بالاسم أو التقنية...",
        devops_title: "🚀 مشاريع DevOps والسحابة",
        contact_title: "تواصل معي", contact_desc: "يسعدني التواصل معك للمشاريع أو فرص العمل",
        footer: "جميع الحقوق محفوظة"
    },
    en: {
        nav_home: "Home", nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_contact: "Contact",
        hero_greeting: "I'm", btn_work: "View my work", btn_cv: "Resume", about_title: "About Me",
        about_text: "I'm Sara Darwish, a web developer and DevOps engineer. I have a great passion for building modern web applications using React and Vue.js, as well as automating processes and managing cloud infrastructure using Docker, Ansible, and AWS. My goal is to provide integrated and efficient solutions that contribute to the success of digital projects.",
        skills_title: "Technical Skills", advanced_title: "⚙️ Advanced Skills (DevOps & Cloud)",
        projects_title: "Projects", search_placeholder: "🔍 Search by name or tech...",
        devops_title: "🚀 DevOps & Cloud Projects",
        contact_title: "Contact Me", contact_desc: "I'd love to connect for projects or job opportunities",
        footer: "All rights reserved"
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
    document.getElementById("langToggle").innerHTML = lang === "ar" ? "🇬🇧 English" : "🇸🇦 العربية";
    roleIndex = 0; charIndex = 0; isDeleting = false;
    typeEffect();
    updateFilterButtons();
}

// Scroll to Top with progress indicator
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
        // Change color based on percentage
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

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Quick Navigation Dots active state
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
            if (dot.getAttribute('data-section') === current) {
                dot.classList.add('active');
            }
        });
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const nav = document.getElementById('mainNav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
    });
    // Close menu when clicking a link
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            toggle.classList.remove('active');
        });
    });
}

// Dark mode
function initDarkMode() {
    const toggle = document.getElementById('themeToggle');
    if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });
}

// ---------- Initialization ----------
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }
    }, 500);
    
    renderBasicSkills();
    renderAdvancedSlider();
    renderProjects();
    renderDevopsProjects();
    updateFilterButtons();
    typeEffect();
    initDarkMode();
    initScrollTop();
    initQuickNav();
    initMobileMenu();
    
    // Initialize Swiper
    new Swiper('.mySwiper', {
        slidesPerView: 2,
        spaceBetween: 20,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: { 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }
    });
    
    // Modal close
    const modal = document.getElementById('skillModal');
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.style.display = 'none');
        window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };
    }
    
    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            renderProjects();
        });
    }
    
    setLanguage('ar');
    document.getElementById('langToggle').addEventListener('click', () => {
        setLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
});