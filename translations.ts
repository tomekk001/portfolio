
export type Language = 'en' | 'pl';

export const translations = {
  en: {
    // Navbar
    nav_home: 'Home',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    nav_cv: 'CV',
    nav_download_cv: 'Download CV',

    // Hero
    hero_status: 'Available for work',
    hero_title_role: 'Full Stack Developer',
    hero_description: 'I am an engineer and passionate programmer focused on creating scalable web applications. While I specialize in web development, my skills extend beyond that scope. As a future Master of Engineering, I am dedicated to continuous learning and refining my craft, treating coding as my true passion.',
    hero_btn_projects: 'View Projects',

    // Skills
    skills_title: 'Essential Tools',
    skills_subtitle: 'The technologies I use to bring ideas to life.',
    cat_frontend: 'Frontend',
    cat_backend: 'Backend',
    cat_database: 'Database',
    cat_language: 'Language',
    cat_framework: 'Framework',
    cat_design: 'Design',
    cat_styling: 'Styling',
    cat_automation: 'Automation',
    cat_version_control: 'Version Control',
    cat_management: 'Management',

    // Projects
    projects_title: 'Highlights',
    projects_subtitle: 'Selected projects that demonstrate my passion for building.',
    
    // Project Descriptions (Keys correspond to specific projects)
    proj_nadwarcianskie_desc: 'A responsive website design created in WordPress and Elementor. The site was created for a company specializing in food processing and sales.',
    proj_task_desc: 'Collaborative task manager featuring drag-and-drop kanban boards and team workspaces.',
    proj_ai_desc: 'SaaS platform allowing users to generate and edit images using OpenAI\'s DALL-E API.',
    proj_finance_desc: 'Personal finance application with budget planning, expense tracking, and visual reports.',
    proj_learning_platform:'An online platform designed for finding tutors. It includes an online chat feature where tutors and students can communicate.',
    proj_messagesProject: 'A full-stack CRUD application for message management built with Docker, Node.js, and NextJS. Features a modern UI using ShadCN and a robust backend with Sequelize ORM.',

    // Contact
    contact_title_1: "Let's work",
    contact_title_2: "together.",
    contact_desc: "Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and ideas.",
    contact_email_label: 'Email',
    contact_socials_label: 'Socials',
    
    // Form
    form_label_name: 'Name',
    form_placeholder_name: 'John Doe',
    form_label_email: 'Email',
    form_placeholder_email: 'john@example.com',
    form_label_message: 'Message',
    form_placeholder_message: 'Tell me about your project...',
    form_btn_send: 'Send Message',
    form_btn_sending: 'Sending...',
    form_btn_success: 'Message Sent',
    form_error: 'Something went wrong. Please try again.',

    // Footer
    footer_rights: 'All rights reserved.',
    footer_built: 'Built with React, Tailwind & Node.js'
  },
  pl: {
    // Navbar
    nav_home: 'Start',
    nav_skills: 'Umiejętności',
    nav_projects: 'Projekty',
    nav_contact: 'Kontakt',
    nav_cv: 'CV',
    nav_download_cv: 'Pobierz CV',

    // Hero
    hero_status: 'Dostępny do współpracy',
    hero_title_role: 'Frontend Developer',
    hero_title_sub: '& UI/UX Designer.',
    hero_description: 'Jestem inżynierem i programistą z pasją do tworzenia skalowalnych aplikacji. Choć skupiam się na technologiach webowych, moje umiejętności wykraczają poza tę dziedzinę. Jako przyszły magister inżynier, nieustannie poszerzam wiedzę, traktując programowanie nie tylko jako pracę, ale przede wszystkim jako pasję.',
    hero_btn_projects: 'Zobacz Projekty',

    // Skills
    skills_title: 'Narzędzia',
    skills_subtitle: 'Technologie, których używam do realizacji pomysłów.',
    cat_frontend: 'Frontend',
    cat_backend: 'Backend',
    cat_database: 'Baza Danych',
    cat_language: 'Język',
    cat_framework: 'Framework',
    cat_design: 'Design',
    cat_styling: 'Stylowanie',
    cat_automation: 'Automatyzacja',
    cat_version_control: 'Kontrola Wersji',
    cat_management: 'Zarządzanie',

    // Projects
    projects_title: 'Wybrane Projekty',
    projects_subtitle: 'Projekty, które najlepiej pokazują moją pasję do tworzenia.',

    // Project Descriptions
    proj_nadwarcianskie_desc: 'Responsywna strona internetowa stworzona w WordPress i Elementorze. Witryna powstała dla firmy specjalizującej się w przetwórstwie i sprzedaży żywności.',
    proj_task_desc: 'Aplikacja do zarządzania zadaniami z tablicami kanban drag-and-drop i przestrzeniami dla zespołów.',
    proj_ai_desc: 'Platforma SaaS umożliwiająca generowanie i edycję obrazów przy użyciu API OpenAI DALL-E.',
    proj_finance_desc: 'Aplikacja do finansów osobistych z planowaniem budżetu, śledzeniem wydatków i raportami wizualnymi.',
    proj_learning_platform:'Platforma internetowa online stworzona do znajdowania korepetycji. Zawiera czat internetowy gdzie może komunikowac się nauczyciel z uczniem',
    proj_messagesProject: 'Pełnowymiarowa aplikacja CRUD do zarządzania wiadomościami zbudowana w oparciu o Docker, Node.js i NextJS. Oferuje nowoczesny interfejs użytkownika z wykorzystaniem ShadCN i solidne zaplecze z systemem ORM Sequelize',

    // Contact
    contact_title_1: "Stwórzmy coś",
    contact_title_2: "razem.",
    contact_desc: "Masz pomysł na projekt lub po prostu chcesz się przywitać? Jestem zawsze otwarty na nowe możliwości i dyskusje.",
    contact_email_label: 'Email',
    contact_socials_label: 'Social Media',

    // Form
    form_label_name: 'Imię',
    form_placeholder_name: 'Jan Kowalski',
    form_label_email: 'Email',
    form_placeholder_email: 'jan@przyklad.pl',
    form_label_message: 'Wiadomość',
    form_placeholder_message: 'Opisz swój projekt...',
    form_btn_send: 'Wyślij Wiadomość',
    form_btn_sending: 'Wysyłanie...',
    form_btn_success: 'Wiadomość Wysłana',
    form_error: 'Coś poszło nie tak. Spróbuj ponownie.',

    // Footer
    footer_rights: 'Wszelkie prawa zastrzeżone.',
    footer_built: 'Zbudowane w React, Tailwind i Node.js'
  }
};
