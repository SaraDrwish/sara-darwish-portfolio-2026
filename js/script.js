(function() {
    const languagesSkills = [
        { name: "HTML", icon: "fab fa-html5", percent: 95 },
        { name: "CSS", icon: "fab fa-css3-alt", percent: 90 },
        { name: "JavaScript", icon: "fab fa-js", percent: 88 },
        { name: "TypeScript", icon: "fa fa-js", percent: 75 },
        { name: "PHP", icon: "fab fa-php", percent: 70 },
        { name: "Python", icon: "fab fa-python", percent: 80 },
        { name: "SQL", icon: "fas fa-database", percent: 75 },
    ];

    const frameworksSkills = [
        { name: "React", icon: "fab fa-react", percent: 85 },
        { name: "Next.js", icon: "fas fa-code-branch", percent: 80 },
        { name: "Vue.js", icon: "fab fa-vuejs", percent: 82 },
        { name: "jQuery", icon: "fab fa-js", percent: 70 },
        { name: "Express.js", icon: "fab fa-node-js", percent: 60 },
        { name: "Bootstrap", icon: "fab fa-bootstrap", percent: 88 },
        { name: "Tailwind CSS", icon: "fab fa-css3-alt", percent: 82 },
    ];

    const devopsSkills = [
        { name: "Git/GitHub", icon: "fab fa-git-alt", percent: 85 },
        { name: "Postman", icon: "fas fa-vial", percent: 80 },
        { name: "JSON", icon: "fas fa-code", percent: 85 },
        { name: "Docker", icon: "fab fa-docker", percent: 75 },
        { name: "Linux", icon: "fab fa-linux", percent: 80 },
        { name: "AWS", icon: "fab fa-aws", percent: 70 },
        { name: "Ansible", icon: "fas fa-code-branch", percent: 65 }
    ];

    const ecommerceSkills = [
        { name: "WordPress", icon: "fab fa-wordpress", percent: 77 },
        { name: "Salla", icon: "fas fa-store", percent: 98 },
        { name: "Zid", icon: "fas fa-shopping-bag", percent: 95 }
    ];

    const advancedSkills = [
        { name: "Depi Ultimate Pipeline", icon: "fas fa-rocket", desc: "End-to-end pipeline using Kubernetes, Ansible, Jenkins, Terraform, and AWS.", project: { title: "Depi Ultimate Pipeline", repo: "https://github.com/Ahmad-AbdElrahman/Depi-ultimate-pipeline", tech: "K8s, Ansible, Jenkins" } },
        { name: "React Patterns", icon: "fab fa-react", desc: "Advanced React patterns including HOCs and Custom Hooks.", project: { title: "React Patterns", repo: "#", tech: "React" } },
        { name: "Vuex State Management", icon: "fab fa-vuejs", desc: "State management with Vuex and Pinia.", project: { title: "Vuex Demo", repo: "#", tech: "Vue.js, Vuex" } },
        { name: "AWS Architecture", icon: "fab fa-aws", desc: "Scalable cloud architecture on AWS.", project: { title: "AWS Design", repo: "#", tech: "AWS, EC2, S3" } }
    ];

    const sallaZidProjects = [
        {
            id: 1,
            title_en: "Salla Stores",
            title_ar: "متاجر سلة",
            desc_en: "Customized and developed multiple e-commerce stores on the Salla platform.",
            desc_ar: "قمت بتخصيص وتطوير عدة متاجر إلكترونية على منصة سلة.",
            icon: "fas fa-store",
            stores: [
                { name_en: "Sotion Store", name_ar: "متجر سوشن", url: "https://sotionsa.com/ar/cart" },
                { name_en: "Woodlife Store", name_ar: "متجر وود لايف", url: "https://woodlife.sa/" },
                { name_en: "The Velours Store", name_ar: "متجر ذا فيلفور", url: "https://thevelours.com/ar" }
            ],
            image: "https://asas-tools.com/u/uploads/sara_craffo/sallah-logo.png"
        },
        {
            id: 2,
            title_en: "Zid Stores",
            title_ar: "متاجر زِد",
            desc_en: "Developed and customized e-commerce stores on the Zid platform.",
            desc_ar: "تطوير وتخصيص متاجر إلكترونية على منصة زِد.",
            icon: "fas fa-shopping-bag",
            stores: [
                { name_en: "Nuvaya Store", name_ar: "متجر نوفايا", url: "https://nuvaya-sa.com/" }
            ],
            image: "https://asas-tools.com/u/uploads/sara_craffo/zid-logo.png"
        }
    ];

    const projectsData = [
        { id: 4, title_en: "Nuvaya", title_ar: "نوفايا", desc_en: "Designing the Novaya website using the Start theme in ZID and adjusting the CSS design.", desc_ar: "تصميم موقع نوفايا على ثيم بداية في زد وضبط التصميم  CSS  ", tech: ["Zid", "CSS3", "JavaScript" ], icon: "fas fa-building", demo: "https://nuvaya-sa.com/" },
        { id: 5, title_en: "Woodlife", title_ar: "وود لايف", desc_en: "Designing a wood-themed website using the Faten theme in Salla, and adjusting the content and CSS design.", desc_ar: "تصميم موقع الخشب على ثيم فاتن في سلة وضبط المحتوى والتصميم  CSS ", tech: ["CSS3", "JavaScript", "Design" , "Salla"], icon: "fas fa-tree" , demo: "https://woodlife.sa/" },
        { id: 6, title_en: "The Velours", title_ar: "ذا فيلفور", desc_en: "Designing an abaya website based on the Abayas in Salla theme, including content and CSS design settings", desc_ar: "تصميم موقع العبايات على ثيم عبايات في سلة وضبط المحتوى والتصميم  CSS  ", tech: ["Salla", "CSS3", "JavaScript" ], icon: "fas fa-crown",  demo: "https://thevelours.com/ar" },
        { id: 7, title_en: "Depi Ultimate Pipeline", title_ar: "Depi Ultimate Pipeline", desc_en: "Complete pipeline using Kubernetes, Ansible, Jenkins, Terraform, deployed on AWS.", desc_ar: "خط أنابيب متكامل باستخدام Kubernetes, Ansible, Jenkins, Terraform ونشره على AWS.", tech: ["Kubernetes", "Ansible", "Jenkins", "Terraform", "AWS"], icon: "fas fa-rocket", github: "https://github.com/Ahmad-AbdElrahman/Depi-ultimate-pipeline", demo: "https://github.com/Ahmad-AbdElrahman/Depi-ultimate-pipeline" },
        { id: 8, title_en: "React Portfolio", title_ar: "بورتفوليو React", desc_en: "Personal portfolio built with React and Framer Motion animations.", desc_ar: "بورتفوليو شخصي مبني على React مع تأثيرات حركية باستخدام Framer Motion.", tech: ["React", "Framer Motion", "CSS3"], icon: "fas fa-layer-group", github: "https://github.com/SaraDrwish/react3Porto", demo: "#" },
        { id: 9, title_en: "Vue.js Landing Page", title_ar: "صفحة هبوط Vue.js", desc_en: "Interactive landing page using Vue.js and Tailwind CSS.", desc_ar: "صفحة هبوط تفاعلية باستخدام Vue.js و Tailwind CSS.", tech: ["Vue.js", "Tailwind", "Figma"], icon: "fab fa-vuejs", github: "https://github.com/SaraDrwish/sara-s-task1-1-vueJs", demo: "#" },
        { id: 10, title_en: "MyDream Place Vue.js", title_ar: "MyDream Place", desc_en: "Full Vue.js application with Pinia for state management.", desc_ar: "تطبيق Vue.js متكامل مع Pinia لإدارة الحالة.", tech: ["Vue.js", "Pinia", "Tailwind"], icon: "fas fa-cloud-moon", github: "https://github.com/SaraDrwish/algoriza-internship-FE204", demo: "#" },
        { id: 11, title_en: "React Project 1", title_ar: "مشروع React 1", desc_en: "React application with Bootstrap for modern interfaces.", desc_ar: "تطبيق React مع Bootstrap لبناء واجهات حديثة.", tech: ["React", "Bootstrap", "CSS3", "HTML5"], icon: "fab fa-react", github: "https://github.com/SaraDrwish/reaaaacttttt23", demo: "https://saradrwish.github.io/reaaaacttttt23/" },
        { id: 12, title_en: "React Project 2", title_ar: "مشروع React 2", desc_en: "Another React application with advanced features.", desc_ar: "تطبيق React آخر مع ميزات متقدمة.", tech: ["React", "CSS3", "HTML5"], icon: "fab fa-react", github: "https://github.com/SaraDrwish/srpo-react", demo: "#" },
        { id: 13, title_en: "Ghost Template", title_ar: "قالب Ghost", desc_en: "Modern responsive template for Ghost CMS.", desc_ar: "قالب Ghost CMS بتصميم عصري ومتجاوب.", tech: ["CSS3", "HTML5"], icon: "fab fa-ghost", github: "https://github.com/SaraDrwish/template3ghost", demo: "https://saradrwish.github.io/template3ghost/" },
        { id: 14, title_en: "Leon Template", title_ar: "قالب Leon", desc_en: "Creative template with advanced CSS effects.", desc_ar: "قالب إبداعي مع تأثيرات CSS متقدمة.", tech: ["CSS3", "HTML5", "JavaScript"], icon: "fas fa-rocket", github: "https://github.com/SaraDrwish/leonjs5", demo: "https://saradrwish.github.io/leonjs5/" },
        { id: 15, title_en: "Todo List", title_ar: "قائمة المهام", desc_en: "Task management application with local storage.", desc_ar: "تطبيق قائمة المهام مع حفظ محلي.", tech: ["JavaScript", "CSS3", "HTML5", "LocalStorage"], icon: "fas fa-check-circle", github: "https://github.com/SaraDrwish/todo2023", demo: "https://saradrwish.github.io/todo2023/" }
     ];

    const freelanceProjects = [
        { id: 201, title_en: "Kafiil Platform", title_ar: "منصة كفيل", desc_en: "My profile on Kafiil platform for buying and selling micro-services.", desc_ar: "حسابي على منصة كفيل لبيع وشراء الخدمات المصغرة.", tech: ["Freelance", "Web Development"], icon: "fas fa-handshake", platformLink: "https://kafiil.com/u/sara_darwish", serviceLink: "https://kafiil.com/u/sara_darwish/services" },
        { id: 202, title_en: "Mostaql Platform", title_ar: "منصة مستقل", desc_en: "My freelance projects and work on Mostaql platform.", desc_ar: "أعمالي الحرة ومشاريعي المنفذة عبر منصة مستقل.", tech: ["Freelance", "UI/UX", "Development"], icon: "fas fa-briefcase", platformLink: "https://mostaql.com/u/sara_darwish_98", serviceLink: "https://mostaql.com/u/sara_darwish_98/portfolio" },
        { id: 203, title_en: "Nafezy Platform", title_ar: "منصة نفذلي", desc_en: "My profile on Nafezy platform for freelance projects.", desc_ar: "حسابي على منصة نفذلي لتنفيذ المشاريع البرمجية.", tech: ["Freelance", "Web Development"], icon: "fas fa-code", platformLink: "https://nafezly.com/u/sara_darwish", serviceLink: null }
    ];

    const devopsProjects = [
        { id: 101, title_en: "Depi Ultimate Pipeline", title_ar: "Depi Ultimate Pipeline", desc_en: "Complete pipeline for web application using Kubernetes, Ansible, Jenkins, Terraform, deployed on AWS.", desc_ar: "خط أنابيب متكامل لتطبيق ويب باستخدام Kubernetes, Ansible, Jenkins, Terraform ونشره على AWS.", tech: ["Kubernetes", "Ansible", "Jenkins", "Terraform", "AWS"], icon: "fas fa-rocket", github: "https://github.com/Ahmad-AbdElrahman/Depi-ultimate-pipeline", demo: "https://github.com/Ahmad-AbdElrahman/Depi-ultimate-pipeline" }
    ];

    let currentLang = "ar";
    let currentFilter = 'all';
    let currentSearch = '';
    let allProjects = [...projectsData];

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
        setTimeout(() => {
            new Swiper(`#${swiperId}`, {
                slidesPerView: 2,
                spaceBetween: 20,
                loop: true,
                autoplay: autoplay ? { delay: 3000, disableOnInteraction: false } : false,
                pagination: { el: '.swiper-pagination', clickable: true },
                navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
                breakpoints: { 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }
            });
        }, 100);
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
        setTimeout(() => {
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
        }, 100);
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
            container.innerHTML = `<div class="no-results">${currentLang === 'ar' ? 'لا توجد مشاريع تطابق البحث' : 'No projects match your search'}</div>`;
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
                        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a>` : ''}
                        ${p.demo && p.demo !== '#' ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> ${currentLang === 'ar' ? 'معاينة' : 'Demo'}</a>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }

    function renderSallaZidProjects() {
        const container = document.getElementById('sallaZidGrid');
        if (!container) return;
        container.innerHTML = sallaZidProjects.map(p => `
            <div class="project-card salla-zid-card">
                <div class="project-img">${p.image ? `<img src="${p.image}" alt="${currentLang === 'ar' ? p.title_ar : p.title_en}" loading="lazy">` : `<i class="${p.icon}"></i>`}</div>
                <div class="project-info">
                    <h3>${currentLang === 'ar' ? p.title_ar : p.title_en}</h3>
                    <p>${currentLang === 'ar' ? p.desc_ar : p.desc_en}</p>
                    <div class="stores-list">
                        <h4>${currentLang === 'ar' ? 'المتاجر المنفذة' : 'Implemented Stores'}</h4>
                        <ul>
                            ${p.stores.map(store => `
                                <li>
                                    <i class="fas fa-store"></i>
                                    <span>${currentLang === 'ar' ? store.name_ar : store.name_en}</span>
                                    <a href="${store.url}" target="_blank" rel="noopener noreferrer">
                                        ${currentLang === 'ar' ? 'زيارة المتجر' : 'Visit Store'} <i class="fas fa-external-link-alt"></i>
                                    </a>
                                </li>
                            `).join('')}
                        </ul>
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
        const categories = ['all', 'HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Vue.js', 'Bootstrap', 'Tailwind' ];
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
            hero_greeting: "أنا", btn_work: "استعرض أعمالي", btn_cv_frontend: "السيرة الذاتية (Frontend)", btn_cv_devops: "السيرة الذاتية (DevOps)",
            about_title: "من أنا", about_text: "أنا سارة درويش، مطورة ويب ومهندسة برمجيات. أمتلك شغفاً كبيراً ببناء تطبيقات ويب حديثة باستخدام React، Next.js و Vue.js، وأتمتة العمليات وإدارة البنية التحتية السحابية عبر Docker وKubernetes وAnsible وAWS. كما أمتلك خبرة لأكثر من عام في تصميم وتطوير متاجر إلكترونية على منصتي سلة وزِد.",
            skills_title: "مهاراتي التقنية", advanced_title: "مشاريع متقدمة",
            projects_title: "أعمالي", search_placeholder: "بحث بالاسم أو التقنية...",
            salla_zid_title: "مشاريع سلة وزِد", freelance_title: "أعمال حرة ومنصات", devops_title: "مشاريع DevOps والسحابة",
            contact_title: "تواصل معي", contact_desc: "يسعدني التواصل معك للمشاريع أو فرص العمل",
            footer: "جميع الحقوق محفوظة",
            lang_group: "لغات البرمجة", frameworks_group: "الأطر والمكتبات", devops_group: "DevOps والبنية التحتية", ecommerce_group: "منصات المتاجر الإلكترونية",
            exp_years: "+3", exp_years_label: "سنوات خبرة", exp_projects: "+25", exp_projects_label: "مشروع منفذ", exp_stores: "+5", exp_stores_label: "متجر إلكتروني"
        },
        en: {
            nav_home: "Home", nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_contact: "Contact",
            hero_greeting: "I'm", btn_work: "View my work", btn_cv_frontend: "Resume (Frontend)", btn_cv_devops: "Resume (DevOps)",
            about_title: "About Me", about_text: "I'm Sara Darwish, a Web Developer and Software Engineer. I have a great passion for building modern web applications using React, Next.js and Vue.js, as well as automating processes and managing cloud infrastructure with Docker, Kubernetes, Ansible, and AWS. I also have over a year of experience in designing and developing e-commerce stores on Salla and Zid platforms, in addition to WordPress website design.",
            skills_title: "Technical Skills", advanced_title: "Advanced Projects",
            projects_title: "Projects", search_placeholder: "Search by name or tech...",
            salla_zid_title: "Salla & Zid Projects", freelance_title: "Freelance & Platforms", devops_title: "DevOps & Cloud Projects",
            contact_title: "Contact Me", contact_desc: "I'd love to connect for projects or job opportunities",
            footer: "All rights reserved",
            lang_group: "Programming Languages", frameworks_group: "Frameworks & Libraries", devops_group: "DevOps & Infrastructure", ecommerce_group: "E-commerce Platforms",
            exp_years: "+3", exp_years_label: "Years Experience", exp_projects: "+25", exp_projects_label: "Projects Completed", exp_stores: "+5", exp_stores_label: "E-commerce Stores"
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
        
        setTimeout(() => {
            reinitAllSwipers();
        }, 100);
        
        renderProjects();
        renderSallaZidProjects();
        renderDevopsProjects();
        renderFreelance();
    }
    
    function reinitAllSwipers() {
        if (window.langSwiper) window.langSwiper.destroy(true, true);
        if (window.frameworksSwiper) window.frameworksSwiper.destroy(true, true);
        if (window.devopsSwiper) window.devopsSwiper.destroy(true, true);
        if (window.ecommerceSwiper) window.ecommerceSwiper.destroy(true, true);
        if (window.advancedSwiper) window.advancedSwiper.destroy(true, true);
        
        const isRTL = currentLang === 'ar';
        
        window.langSwiper = new Swiper('#langSwiper', {
            slidesPerView: 2, spaceBetween: 20, loop: true,
            autoplay: { delay: 3000, disableOnInteraction: false },
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            breakpoints: { 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } },
            rtl: isRTL
        });
        
        window.frameworksSwiper = new Swiper('#frameworksSwiper', {
            slidesPerView: 2, spaceBetween: 20, loop: true, autoplay: false,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            breakpoints: { 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } },
            rtl: isRTL
        });
        
        window.devopsSwiper = new Swiper('#devopsSwiper', {
            slidesPerView: 2, spaceBetween: 20, loop: true, autoplay: false,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            breakpoints: { 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } },
            rtl: isRTL
        });
        
        window.ecommerceSwiper = new Swiper('#ecommerceSwiper', {
            slidesPerView: 2, spaceBetween: 20, loop: true, autoplay: false,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            breakpoints: { 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } },
            rtl: isRTL
        });
        
        window.advancedSwiper = new Swiper('.advancedSwiperNoAutoplay', {
            slidesPerView: 2, spaceBetween: 20, loop: true, autoplay: false,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            breakpoints: { 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } },
            rtl: isRTL
        });
    }

    function initMobileMenu() {
        const toggle = document.getElementById('mobileMenuToggle');
        const nav = document.getElementById('mainNav');
        const overlay = document.getElementById('mobileMenuOverlay');
        if (!toggle || !nav) return;
        function closeMenu() {
            nav.classList.remove('active');
            toggle.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
        function openMenu() {
            nav.classList.add('active');
            toggle.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (nav.classList.contains('active')) closeMenu();
            else openMenu();
        });
        overlay.addEventListener('click', closeMenu);
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && nav.classList.contains('active')) closeMenu();
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

    function initScrollTop() {
        const scrollBtn = document.getElementById('scrollTop');
        const circle = document.querySelector('.progress-ring-circle');
        const radius = 22;
        const circumference = 2 * Math.PI * radius;
        if (circle) {
            circle.style.strokeDasharray = `${circumference} ${circumference}`;
            circle.style.strokeDashoffset = circumference;
        }
        function setProgress(percent) {
            if (!circle) return;
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
        renderSkillSwiper('ecommerceSwiperWrapper', ecommerceSkills, 'ecommerceSwiper', false);
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
        
        window.langSwiper = new Swiper('#langSwiper', {
            slidesPerView: 2, spaceBetween: 20, loop: true,
            autoplay: { delay: 3000, disableOnInteraction: false },
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            breakpoints: { 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } },
            rtl: true
        });
        window.frameworksSwiper = new Swiper('#frameworksSwiper', {
            slidesPerView: 2, spaceBetween: 20, loop: true, autoplay: false,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            breakpoints: { 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } },
            rtl: true
        });
        window.devopsSwiper = new Swiper('#devopsSwiper', {
            slidesPerView: 2, spaceBetween: 20, loop: true, autoplay: false,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            breakpoints: { 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } },
            rtl: true
        });
        window.ecommerceSwiper = new Swiper('#ecommerceSwiper', {
            slidesPerView: 2, spaceBetween: 20, loop: true, autoplay: false,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            breakpoints: { 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } },
            rtl: true
        });
        window.advancedSwiper = new Swiper('.advancedSwiperNoAutoplay', {
            slidesPerView: 2, spaceBetween: 20, loop: true, autoplay: false,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            breakpoints: { 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } },
            rtl: true
        });
        
        setLanguage('ar');
        document.getElementById('langToggle').addEventListener('click', () => setLanguage(currentLang === 'ar' ? 'en' : 'ar'));
    });
})();