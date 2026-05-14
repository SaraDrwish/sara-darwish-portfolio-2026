const languagesSkills = [
    { name: "HTML5", icon: "fab fa-html5", percent: 95 },
    { name: "CSS3", icon: "fab fa-css3-alt", percent: 90 },
    { name: "JavaScript", icon: "fab fa-js", percent: 88 },
    { name: "TypeScript", icon: "fab fa-js", percent: 75 },
    { name: "PHP", icon: "fab fa-php", percent: 70 },
    { name: "Python", icon: "fab fa-python", percent: 80 },
    { name: "SQL", icon: "fas fa-database", percent: 75 },
    { name: "Bash", icon: "fas fa-terminal", percent: 70 }
];

const frameworksSkills = [
    { name: "React", icon: "fab fa-react", percent: 85 },
    { name: "Next.js", icon: "fas fa-code-branch", percent: 80 },
    { name: "Vue.js", icon: "fab fa-vuejs", percent: 82 },
    { name: "jQuery", icon: "fab fa-js", percent: 80 },
    { name: "Express.js", icon: "fab fa-node-js", percent: 75 },
    { name: "Laravel", icon: "fab fa-laravel", percent: 70 },
    { name: "Flask", icon: "fas fa-flask", percent: 70 },
    { name: "Bootstrap", icon: "fab fa-bootstrap", percent: 88 },
    { name: "Tailwind CSS", icon: "fab fa-css3-alt", percent: 82 }
];

const devopsSkills = [
    { name: "Git/GitHub", icon: "fab fa-git-alt", percent: 85 },
    { name: "REST APIs", icon: "fas fa-plug", percent: 85 },
    { name: "Postman", icon: "fas fa-vial", percent: 80 },
    { name: "JSON", icon: "fas fa-code", percent: 85 },
    { name: "Docker", icon: "fab fa-docker", percent: 75 },
    { name: "Linux", icon: "fab fa-linux", percent: 80 },
    { name: "AWS", icon: "fab fa-aws", percent: 70 },
    { name: "Ansible", icon: "fas fa-code-branch", percent: 65 }
];

const advancedSkills = [
    { name: "Depi Ultimate Pipeline", icon: "fas fa-rocket", desc: "End-to-end pipeline using Kubernetes, Ansible, Jenkins, Terraform, and AWS.", project: { title: "Depi Ultimate Pipeline", repo: "https://github.com/Ahmad-AbdElrahman/Depi-ultimate-pipeline", tech: "K8s, Ansible, Jenkins" } }
];

const sallaZidProjects = [
    { id: 1, title_en: "Salla E-commerce Store", title_ar: "متجر سلة إلكتروني", desc_en: "Complete e-commerce store on Salla platform with professional design and features.", desc_ar: "متجر إلكتروني متكامل على منصة سلة مع تصميم احترافي وميزات متقدمة.", tech: ["Salla", "E-commerce", "API"], icon: "fas fa-store", github: "#", demo: "https://sotionsa.com/ar/cart", image: "https://asas-tools.com/u/uploads/sara_craffo/sallah-logo.png" },
    { id: 2, title_en: "Zid E-commerce Store", title_ar: "متجر زِد إلكتروني", desc_en: "Complete e-commerce store on Zid platform with modern design.", desc_ar: "متجر إلكتروني متكامل على منصة زِد مع تصميم عصري.", tech: ["Zid", "E-commerce", "API"], icon: "fas fa-shopping-bag", github: "#", demo: "#", image: "https://asas-tools.com/u/uploads/sara_craffo/zid-logo.png" },
    { id: 3, title_en: "Craffo Information Technology", title_ar: "كرافو لتقنية المعلومات", desc_en: "Technology solutions provider with focus on quality and innovation.", desc_ar: "مزود حلول تقنية يركز على الجودة والابتكار.", tech: ["React", "Node.js", "API"], icon: "fas fa-microchip", github: "#", demo: "#" }
];

const projectsData = [
    { id: 4, title_en: "Nuvaya", title_ar: "نوفايا (Nuvaya)", desc_en: "Complete company website with various services and professional design.", desc_ar: "موقع شركة متكامل بخدمات متنوعة وتصميم احترافي.", tech: ["React", "Next.js", "Tailwind"], icon: "fas fa-building", github: "https://github.com/SaraDrwish/nuvaya", demo: "https://nuvaya-sa.com/" },
    { id: 5, title_en: "Woodlife", title_ar: "وود لايف (Woodlife)", desc_en: "Specialized website for luxury wooden furniture.", desc_ar: "موقع متخصص في الأثاث الخشبي الفاخر.", tech: ["Vue.js", "Tailwind", "Responsive"], icon: "fas fa-tree", github: "https://github.com/SaraDrwish/woodlife", demo: "https://woodlife.sa/" },
    { id: 6, title_en: "The Velours", title_ar: "ذا فيلفور (The Velours)", desc_en: "Premium brand website for care products (HTML/CSS/JS - not React).", desc_ar: "موقع علامة تجارية راقية لمنتجات العناية (HTML/CSS/JS - ليس React).", tech: ["HTML5", "CSS3", "JavaScript", "Responsive"], icon: "fas fa-crown", github: "https://github.com/SaraDrwish/thevelours", demo: "https://thevelours.com/ar" },
    { id: 7, title_en: "Depi Ultimate Pipeline", title_ar: "Depi Ultimate Pipeline", desc_en: "Complete pipeline using Kubernetes, Ansible, Jenkins, Terraform, deployed on AWS.", desc_ar: "خط أنابيب متكامل باستخدام Kubernetes, Ansible, Jenkins, Terraform ونشره على AWS.", tech: ["Kubernetes", "Ansible", "Jenkins", "Terraform", "AWS"], icon: "fas fa-rocket", github: "https://github.com/Ahmad-AbdElrahman/Depi-ultimate-pipeline", demo: "https://github.com/Ahmad-AbdElrahman/Depi-ultimate-pipeline" },
    { id: 8, title_en: "React Portfolio", title_ar: "بورتفوليو React", desc_en: "Personal portfolio built with React and Framer Motion animations.", desc_ar: "بورتفوليو شخصي مبني على React مع تأثيرات حركية باستخدام Framer Motion.", tech: ["React", "Framer Motion", "CSS3"], icon: "fas fa-layer-group", github: "https://github.com/SaraDrwish/react3Porto", demo: "#" },
    { id: 9, title_en: "Vue.js Landing Page", title_ar: "صفحة هبوط Vue.js", desc_en: "Interactive landing page using Vue.js and Tailwind CSS.", desc_ar: "صفحة هبوط تفاعلية باستخدام Vue.js و Tailwind CSS.", tech: ["Vue.js", "Tailwind", "Figma"], icon: "fab fa-vuejs", github: "https://github.com/SaraDrwish/sara-s-task1-1-vueJs", demo: "#" },
    { id: 10, title_en: "MyDream Place (Vue.js)", title_ar: "MyDream Place (Vue.js)", desc_en: "Full Vue.js application with Pinia for state management.", desc_ar: "تطبيق Vue.js متكامل مع Pinia لإدارة الحالة.", tech: ["Vue.js", "Pinia", "Tailwind"], icon: "fas fa-cloud-moon", github: "https://github.com/SaraDrwish/algoriza-internship-FE204", demo: "#" },
    { id: 11, title_en: "React Project 1", title_ar: "مشروع React الأول", desc_en: "React application with Bootstrap for modern interfaces.", desc_ar: "تطبيق React مع Bootstrap لبناء واجهات حديثة.", tech: ["React", "Bootstrap", "CSS3", "HTML5"], icon: "fab fa-react", github: "https://github.com/SaraDrwish/reaaaacttttt23", demo: "https://saradrwish.github.io/reaaaacttttt23/" },
    { id: 12, title_en: "React Project 2", title_ar: "مشروع React الثاني", desc_en: "Another React application with advanced features.", desc_ar: "تطبيق React آخر مع ميزات متقدمة.", tech: ["React", "CSS3", "HTML5"], icon: "fab fa-react", github: "https://github.com/SaraDrwish/srpo-react", demo: "#" },
    { id: 13, title_en: "Ghost Template", title_ar: "قالب Ghost", desc_en: "Modern responsive template for Ghost CMS.", desc_ar: "قالب Ghost CMS بتصميم عصري ومتجاوب.", tech: ["CSS3", "HTML5"], icon: "fab fa-ghost", github: "https://github.com/SaraDrwish/template3ghost", demo: "https://saradrwish.github.io/template3ghost/" },
    { id: 14, title_en: "Leon Template", title_ar: "قالب Leon", desc_en: "Creative template with advanced CSS effects.", desc_ar: "قالب إبداعي مع تأثيرات CSS متقدمة.", tech: ["CSS3", "HTML5", "JavaScript"], icon: "fas fa-rocket", github: "https://github.com/SaraDrwish/leonjs5", demo: "https://saradrwish.github.io/leonjs5/" },
    { id: 15, title_en: "Todo List", title_ar: "قائمة المهام", desc_en: "Task management application with local storage.", desc_ar: "تطبيق قائمة المهام مع حفظ محلي.", tech: ["JavaScript", "CSS3", "HTML5", "LocalStorage"], icon: "fas fa-check-circle", github: "https://github.com/SaraDrwish/todo2023", demo: "https://saradrwish.github.io/todo2023/" },
    { id: 16, title_en: "JS Task Counter", title_ar: "عداد المهام", desc_en: "Task counter with interactive statistics.", desc_ar: "عداد المهام مع إحصائيات تفاعلية.", tech: ["JavaScript", "CSS3", "HTML5"], icon: "fas fa-calculator", github: "https://github.com/SaraDrwish/js_task1", demo: "https://saradrwish.github.io/js_task1/" },
    { id: 17, title_en: "CRUD App", title_ar: "تطبيق CRUD", desc_en: "Create, Read, Update, Delete operations application.", desc_ar: "تطبيق عمليات الإضافة والحذف والتحديث.", tech: ["JavaScript", "CSS3", "HTML5"], icon: "fas fa-database", github: "https://github.com/SaraDrwish/crud-app", demo: "#" },
    { id: 18, title_en: "Get API", title_ar: "جلب البيانات", desc_en: "Application to fetch and display data from API.", desc_ar: "تطبيق لجلب البيانات من API وعرضها.", tech: ["JavaScript", "CSS3", "HTML5", "API"], icon: "fas fa-cloud-upload-alt", github: "https://github.com/SaraDrwish/get-api", demo: "#" },
    { id: 19, title_en: "Filter Task JS", title_ar: "فلتر المهام", desc_en: "Task filtering application using JavaScript.", desc_ar: "تطبيق فلترة المهام باستخدام JavaScript.", tech: ["JavaScript", "CSS3", "HTML5"], icon: "fas fa-filter", github: "https://github.com/SaraDrwish/filter-task-js", demo: "#" },
    { id: 20, title_en: "Task Prev & Next JS", title_ar: "التنقل بين المهام", desc_en: "Task navigation with previous and next buttons.", desc_ar: "تطبيق للتنقل بين المهام باستخدام أزرار التالي والسابق.", tech: ["JavaScript", "CSS3", "HTML5"], icon: "fas fa-arrow-left", github: "https://github.com/SaraDrwish/task-prev-next", demo: "#" },
    { id: 21, title_en: "Task Manager", title_ar: "مدير المهام", desc_en: "Simple task management application.", desc_ar: "تطبيق إدارة المهام البسيط.", tech: ["JavaScript", "CSS3", "HTML5"], icon: "fas fa-tasks", github: "https://github.com/SaraDrwish/task-manager", demo: "#" },
    { id: 22, title_en: "Shopping App", title_ar: "تطبيق تسوق", desc_en: "Shopping cart application with product management.", desc_ar: "تطبيق تسوق تجريبي مع سلة مشتريات.", tech: ["JavaScript", "CSS3", "HTML5"], icon: "fas fa-shopping-cart", github: "https://github.com/SaraDrwish/app1-shopping", demo: "#" },
    { id: 23, title_en: "Bootstrap Project", title_ar: "مشروع Bootstrap", desc_en: "Complete Bootstrap project with interactive components.", desc_ar: "مشروع Bootstrap متكامل مع أدوات تفاعلية.", tech: ["Bootstrap", "CSS3", "HTML5"], icon: "fab fa-bootstrap", github: "https://github.com/SaraDrwish/project3_bootstrap", demo: "https://saradrwish.github.io/project3_bootstrap/" },
    { id: 24, title_en: "Project 1", title_ar: "مشروع 1", desc_en: "Professional web design project.", desc_ar: "مشروع تصميم ويب احترافي.", tech: ["CSS3", "HTML5"], icon: "fas fa-project-diagram", github: "https://github.com/SaraDrwish/ProjectOne23", demo: "https://saradrwish.github.io/ProjectOne23/" },
    { id: 25, title_en: "Project 2", title_ar: "مشروع 2", desc_en: "Creative gallery website.", desc_ar: "مشروع معرض إبداعي.", tech: ["CSS3", "HTML5"], icon: "fas fa-images", github: "https://github.com/SaraDrwish/Project2", demo: "https://saradrwish.github.io/Project2/" },
    { id: 26, title_en: "Orang Page", title_ar: "صفحة أورانج", desc_en: "Orange-themed attractive landing page.", desc_ar: "صفحة هبوط بتصميم أورانج جذاب.", tech: ["CSS3", "HTML5"], icon: "fas fa-leaf", github: "https://github.com/SaraDrwish/pro1cha2", demo: "https://saradrwish.github.io/pro1cha2/" },
    { id: 27, title_en: "Template 1 Jeanse", title_ar: "قالب 1 Jeanse", desc_en: "Jeanse template design using HTML and CSS.", desc_ar: "تصميم قالب Jeanse باستخدام HTML و CSS.", tech: ["CSS3", "HTML5"], icon: "fas fa-tshirt", github: "https://github.com/SaraDrwish/template1-jeanse", demo: "#" },
    { id: 28, title_en: "Template 2 Fish Shift", title_ar: "قالب 2 Fish Shift", desc_en: "Fish Shift attractive template design.", desc_ar: "قالب Fish Shift - تصميم جذاب.", tech: ["CSS3", "HTML5"], icon: "fas fa-fish", github: "https://github.com/SaraDrwish/template2-fish", demo: "#" },
    { id: 29, title_en: "Template 3 Plant", title_ar: "قالب 3 Plant", desc_en: "Plant template using Bootstrap.", desc_ar: "قالب نباتات باستخدام Bootstrap.", tech: ["Bootstrap", "CSS3", "HTML5"], icon: "fas fa-seedling", github: "https://github.com/SaraDrwish/template3-plant", demo: "#" },
    { id: 30, title_en: "Template 4 Bakary", title_ar: "قالب 4 Bakary", desc_en: "Elegant bakery template design.", desc_ar: "قالب مخبوزات بتصميم أنيق.", tech: ["CSS3", "HTML5"], icon: "fas fa-bread-slice", github: "https://github.com/SaraDrwish/template4-bakary", demo: "#" },
    { id: 31, title_en: "Template 5 Time Zoon", title_ar: "قالب 5 Time Zoon", desc_en: "Time zone display template.", desc_ar: "قالب لعرض المناطق الزمنية.", tech: ["CSS3", "HTML5"], icon: "fas fa-clock", github: "https://github.com/SaraDrwish/template5-time", demo: "#" }
];

const freelanceProjects = [
    { 
        id: 201, 
        title_en: "Kafiil Platform", 
        title_ar: "منصة كفيل", 
        desc_en: "My profile on Kafiil platform for buying and selling micro-services.", 
        desc_ar: "حسابي على منصة كفيل لبيع وشراء الخدمات المصغرة.", 
        tech: ["Freelance", "Web Development"], 
        icon: "fas fa-handshake", 
        platformLink: "https://kafiil.com/u/sara_darwish",
        serviceLink: "https://kafiil.com/u/sara_darwish/services" 
    },
    { 
        id: 202, 
        title_en: "Mostaql Platform", 
        title_ar: "منصة مستقل", 
        desc_en: "My freelance projects and work on Mostaql platform.", 
        desc_ar: "أعمالي الحرة ومشاريعي المنفذة عبر منصة مستقل.", 
        tech: ["Freelance", "UI/UX", "Development"], 
        icon: "fas fa-briefcase", 
        platformLink: "https://mostaql.com/u/sara_darwish_98",
        serviceLink: "https://mostaql.com/u/sara_darwish_98/portfolio" 
    },
    { 
        id: 203, 
        title_en: "Nafezy Platform", 
        title_ar: "منصة نفذلي", 
        desc_en: "My profile on Nafezy platform for freelance projects.", 
        desc_ar: "حسابي على منصة نفذلي لتنفيذ المشاريع البرمجية.", 
        tech: ["Freelance", "Web Development"], 
        icon: "fas fa-code", 
        platformLink: "https://nafezly.com/u/sara_darwish",
        serviceLink: null 
    }
];

const devopsProjects = [
    { id: 101, title_en: "Depi Ultimate Pipeline", title_ar: "Depi Ultimate Pipeline", desc_en: "Complete pipeline for web application using Kubernetes, Ansible, Jenkins, Terraform, deployed on AWS.", desc_ar: "خط أنابيب متكامل لتطبيق ويب باستخدام Kubernetes, Ansible, Jenkins, Terraform ونشره على AWS.", tech: ["Kubernetes", "Ansible", "Jenkins", "Terraform", "AWS"], icon: "fas fa-rocket", github: "https://github.com/Ahmad-AbdElrahman/Depi-ultimate-pipeline", demo: "https://github.com/Ahmad-AbdElrahman/Depi-ultimate-pipeline" }
];

function renderSkillSwiper(containerId, skillsArray, swiperId, autoplay = true) {
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
        autoplay: autoplay ? { delay: 3000, disableOnInteraction: false } : false,
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
    new Swiper('.advancedSwiperNoAutoplay', {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        autoplay: false,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: { 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }
    });
    document.querySelectorAll('.advancedSwiperNoAutoplay .swiper-slide').forEach(slide => {
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
    projectDiv.innerHTML = `<h4>Related Project:</h4><p><strong>${skill.project.title}</strong> - ${skill.project.tech}</p><a href="${skill.project.repo}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a>`;
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
            const titleMatch = (currentLang === 'ar' ? p.title_ar : p.title_en).toLowerCase().includes(searchLower);
            const techMatch = p.tech.some(t => t.toLowerCase().includes(searchLower));
            if (!titleMatch && !techMatch) return false;
        }
        return true;
    });
    if (filtered.length === 0) {
        container.innerHTML = `<div class="no-results">${currentLang === 'ar' ? 'لا توجد مشاريع تطابق البحث. حاول بكلمات أخرى.' : 'No projects match your search. Please try different keywords.'}</div>`;
        return;
    }
    container.innerHTML = filtered.map(p => `
        <div class="project-card">
            <div class="project-img"><i class="${p.icon}"></i></div>
            <div class="project-info">
                <h3>${currentLang === 'ar' ? p.title_ar : p.title_en}</h3>
                <p>${currentLang === 'ar' ? p.desc_ar : p.desc_en}</p>
                <div class="project-tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
                <div class="project-links">
                    <a href="${p.github}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a>
                    ${p.demo !== '#' ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> ${currentLang === 'ar' ? 'معاينة' : 'Demo'}</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function renderSallaZidProjects() {
    const container = document.getElementById('sallaZidGrid');
    if (!container) return;
    container.innerHTML = sallaZidProjects.map(p => `
        <div class="project-card">
            <div class="project-img">${p.image ? `<img src="${p.image}" alt="${currentLang === 'ar' ? p.title_ar : p.title_en}">` : `<i class="${p.icon}"></i>`}</div>
            <div class="project-info">
                <h3>${currentLang === 'ar' ? p.title_ar : p.title_en}</h3>
                <p>${currentLang === 'ar' ? p.desc_ar : p.desc_en}</p>
                <div class="project-tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
                <div class="project-links">
                    <a href="${p.github}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a>
                    ${p.demo !== '#' ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> ${currentLang === 'ar' ? 'معاينة' : 'Demo'}</a>` : ''}
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
                <h3>${currentLang === 'ar' ? p.title_ar : p.title_en}</h3>
                <p>${currentLang === 'ar' ? p.desc_ar : p.desc_en}</p>
                <div class="project-tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
                <div class="project-links">
                    <a href="${p.github}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a>
                    ${p.demo !== '#' ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> ${currentLang === 'ar' ? 'معاينة' : 'Demo'}</a>` : ''}
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
                <h3>${currentLang === 'ar' ? p.title_ar : p.title_en}</h3>
                <p>${currentLang === 'ar' ? p.desc_ar : p.desc_en}</p>
                <div class="project-tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
                <div class="project-links">
                    <a href="${p.platformLink}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> ${currentLang === 'ar' ? 'زيارة المنصة' : 'Visit Platform'}</a>
                    ${p.serviceLink ? `<a href="${p.serviceLink}" target="_blank" rel="noopener noreferrer"><i class="fas fa-briefcase"></i> ${currentLang === 'ar' ? 'زيارة الخدمات / المعرض' : 'View Services / Portfolio'}</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function updateFilterButtons() {
    const categories = ['all', 'HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Vue.js', 'Bootstrap', 'Tailwind'];
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
        setTimeout(typeEffect, 2500);
        return;
    }
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles[currentLang].length;
        setTimeout(typeEffect, 400);
        return;
    }
    setTimeout(typeEffect, isDeleting ? 80 : 120);
}

const translations = { 
    ar: {
        nav_home: "الرئيسية", nav_about: "من أنا", nav_skills: "مهاراتي", nav_projects: "أعمالي", nav_contact: "تواصل",
        hero_greeting: "أنا", btn_work: "استعرض أعمالي", btn_cv_frontend: " Frontend السيرة الذاتية",btn_cv_devops: "السيرة الذاتية Devops ", about_title: "من أنا",
        about_text: "أنا سارة درويش، مطورة ويب ومهندسة برمجيات. أمتلك شغفاً كبيراً ببناء تطبيقات ويب حديثة باستخدام React، Next.js و Vue.js، وأتمتة العمليات وإدارة البنية التحتية السحابية عبر Docker وKubernetes وAnsible وAWS.",
        skills_title: "مهاراتي التقنية", advanced_title: "مشاريع متقدمة",
        projects_title: "أعمالي", search_placeholder: "بحث بالاسم أو التقنية...",
        salla_zid_title: "مشاريع سلة وزِد ",
        freelance_title: "أعمال حرة ومنصات", devops_title: "مشاريع DevOps والسحابة",
        contact_title: "تواصل معي", contact_desc: "يسعدني التواصل معك للمشاريع أو فرص العمل",
        footer: "جميع الحقوق محفوظة",
        hero_desc: "مطورة ويب ومهندسة برمجيات - أحول الأفكار إلى تطبيقات سحابية وتفاعلية عالية الأداء." ,
        lang_group: "لغات البرمجة", frameworks_group: "الأطر والمكتبات", devops_group: "DevOps والبنية التحتية",
        exp_years: "+3", exp_years_label: "سنوات خبرة", exp_projects: "+25", exp_projects_label: "مشروع منفذ", exp_clients: "+2", exp_clients_label: "عملاء"
    },
    en: {
        nav_home: "Home", nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_contact: "Contact",
        hero_greeting: "I'm", btn_work: "View my work", btn_cv_frontend: "Frontend Resume",btn_cv_devops: "Devops Resume", about_title: "About Me",
        about_text: "I'm Sara Darwish, a Web Developer and Software Engineer. I have a great passion for building modern web applications using React, Next.js and Vue.js, as well as automating processes and managing cloud infrastructure with Docker, Kubernetes, Ansible, and AWS.",
        skills_title: "Technical Skills", advanced_title: "Advanced Projects",
        projects_title: "Projects", search_placeholder: "Search by name or tech...",
        salla_zid_title: " Salla & Zid ",
        freelance_title: "Freelance & Platforms", devops_title: "DevOps & Cloud Projects",
        contact_title: "Contact Me", contact_desc: "I'd love to connect for projects or job opportunities",
        footer: "All rights reserved",
        hero_desc: "Web developer and software engineer - I turn ideas into high-performance cloud and interactive applications." ,
        lang_group: "Programming Languages", frameworks_group: "Frameworks & Libraries", devops_group: "DevOps & Infrastructure",
        exp_years: "+3", exp_years_label: "Years Experience", exp_projects: "+25", exp_projects_label: "Projects Completed", exp_clients: "+2", exp_clients_label: "Clients"
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
    renderProjects();
    renderSallaZidProjects();
    renderDevopsProjects();
    renderFreelance();
}

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

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }
    }, 500);
    
    renderSkillSwiper('languagesSwiper', languagesSkills, 'langSwiper', true);
    renderSkillSwiper('frameworksSwiperWrapper', frameworksSkills, 'frameworksSwiper', false);
    renderSkillSwiper('devopsSwiperWrapper', devopsSkills, 'devopsSwiper', false);
    renderAdvancedSlider();
    renderProjects();
    renderSallaZidProjects();
    renderDevopsProjects();
    renderFreelance();
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