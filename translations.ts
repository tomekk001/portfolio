export type Language = 'en' | 'pl';

export const translations = {
  en: {
    // Navbar
    nav_home: 'Home',
    nav_skills: 'Skills',
    nav_experience: 'Experience',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    nav_cv: 'CV',
    nav_download_cv: 'Download CV',

    // Hero
    hero_status: 'Available for work',
    hero_greeting: "Hi, I'm Tomasz Czyż",
    hero_title_role: 'Software Engineer',
    hero_title_sub: 'Full Stack & Mainframe Developer',
    hero_description: 'Master of Science in Computer Science with a business-driven mindset. I build scalable web applications and, as a Mainframe Developer, work on core business systems on z/OS with HLASM, JCL, COBOL, CICS, DB2 and Xpediter. I focus on high-quality, performant solutions that deliver real-world value.',
    hero_btn_projects: 'View Projects',
    hero_btn_contact: 'Get in touch',

    // Skills
    skills_title: 'Skills & Technologies',
    skills_subtitle: 'The tools and technologies I use to bring ideas to life.',
    skills_frontend: 'Frontend',
    skills_backend: 'Backend & Languages',
    skills_databases: 'Databases',
    skills_tools: 'Tools & Cloud',
    skills_design: 'Design & Automation',
    skills_mainframe: 'Mainframe (z/OS)',

    // Experience
    exp_title: 'Experience & Education',
    exp_subtitle: 'Where I have worked and what I have studied.',
    exp_work: 'Professional experience',
    exp_present: 'Present',
    exp_deloitte_role: 'Mainframe Developer',
    exp_deloitte_desc: 'I design and optimize core business applications running in the z/OS ecosystem. I write and troubleshoot High Level Assembler (HLASM) code, manage execution flows with Job Control Language (JCL), and use SDSF for job monitoring and Xpediter for debugging. I also handle complex data transformations and packed decimal arithmetic to keep operations fast.',
    exp_biznesport_role: 'Junior Fullstack Developer',
    exp_biznesport_desc: 'I developed a marketplace platform for the Polish community in Denmark, implementing key features such as listing publication and search. I also optimized the application for SEO and ensured a responsive interface.',
    exp_zf_role: 'RPA Developer (internship)',
    exp_zf_desc: 'I took part in building and deploying automation solutions based on the UiPath REFramework. The RPA solutions I developed went live in production, improving process speed and stability.',
    edu_title: 'Education',
    edu_msc: 'Master of Science in Computer Science',
    edu_msc_sub: 'Business Applications and Databases · Częstochowa University of Technology',
    edu_eng: 'Computer Science Engineer',
    edu_eng_sub: 'Internet Application Programming',
    edu_tech: 'IT Technician (EE08, EE09)',
    edu_tech_sub: 'Technical School in Działoszyn',
    cert_title: 'Certificates & languages',
    cert_ssis: 'SQL Server Integration Services (SSIS)',
    cert_tsql: 'SQL Server Certification: Querying Data with Transact-SQL',
    cert_ccna: 'Cisco CCNA Routing and Switching',
    cert_english: 'English: B2',

    // Projects
    projects_title: 'Highlights',
    projects_subtitle: 'Selected projects that demonstrate my passion for building.',
    project_open: 'Open project',

    // Project Descriptions
    proj_nadwarcianskie_desc: 'A responsive website created in WordPress and Elementor for a company specializing in food processing and sales.',
    proj_learning_platform: 'An online platform for finding tutors, with a real-time chat where tutors and students can communicate.',
    proj_messagesProject: 'A full-stack CRUD application for message management with a modern React UI and a Node.js backend using Sequelize ORM, containerized with Docker.',

    // Contact
    contact_title_1: "Let's work",
    contact_title_2: 'together.',
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
    footer_built: 'Built with React, Tailwind & Vite'
  },
  pl: {
    // Navbar
    nav_home: 'Start',
    nav_skills: 'Umiejętności',
    nav_experience: 'Doświadczenie',
    nav_projects: 'Projekty',
    nav_contact: 'Kontakt',
    nav_cv: 'CV',
    nav_download_cv: 'Pobierz CV',

    // Hero
    hero_status: 'Dostępny do współpracy',
    hero_greeting: 'Cześć, jestem Tomasz Czyż',
    hero_title_role: 'Software Engineer',
    hero_title_sub: 'Full Stack & Mainframe Developer',
    hero_description: 'Magister informatyki z biznesowym podejściem. Tworzę skalowalne aplikacje webowe, a jako Mainframe Developer pracuję przy kluczowych systemach biznesowych na z/OS z użyciem HLASM, JCL, COBOL, CICS, DB2 i Xpeditera. Stawiam na wysoką jakość i wydajność rozwiązań, które dają realną wartość.',
    hero_btn_projects: 'Zobacz projekty',
    hero_btn_contact: 'Skontaktuj się',

    // Skills
    skills_title: 'Umiejętności i technologie',
    skills_subtitle: 'Narzędzia i technologie, których używam do realizacji pomysłów.',
    skills_frontend: 'Frontend',
    skills_backend: 'Backend i języki',
    skills_databases: 'Bazy danych',
    skills_tools: 'Narzędzia i chmura',
    skills_design: 'Design i automatyzacja',
    skills_mainframe: 'Mainframe (z/OS)',

    // Experience
    exp_title: 'Doświadczenie i edukacja',
    exp_subtitle: 'Gdzie pracowałem i czego się uczyłem.',
    exp_work: 'Doświadczenie zawodowe',
    exp_present: 'obecnie',
    exp_deloitte_role: 'Mainframe Developer',
    exp_deloitte_desc: 'Projektuję i optymalizuję kluczowe aplikacje biznesowe działające w ekosystemie z/OS. Piszę i diagnozuję kod w High Level Assembler (HLASM), zarządzam przepływem wykonania w Job Control Language (JCL), korzystam z SDSF do monitorowania zadań i z Xpeditera do debugowania. Zajmuję się też złożonymi transformacjami danych i arytmetyką packed decimal, aby zapewnić wysoką wydajność.',
    exp_biznesport_role: 'Junior Fullstack Developer',
    exp_biznesport_desc: 'Rozwijałem platformę marketplace dla Polonii w Danii, wdrażając kluczowe funkcje, takie jak publikowanie ogłoszeń i wyszukiwarka. Optymalizowałem też aplikację pod kątem SEO i dbałem o responsywność interfejsu.',
    exp_zf_role: 'RPA Developer (staż)',
    exp_zf_desc: 'Brałem udział w tworzeniu i wdrażaniu automatyzacji opartych na UiPath REFramework. Stworzone przeze mnie rozwiązania RPA trafiły na produkcję i poprawiły szybkość oraz stabilność procesów.',
    edu_title: 'Edukacja',
    edu_msc: 'Magister inżynier informatyki',
    edu_msc_sub: 'Aplikacje biznesowe i bazy danych · Politechnika Częstochowska',
    edu_eng: 'Inżynier informatyki',
    edu_eng_sub: 'Programowanie aplikacji internetowych',
    edu_tech: 'Technik informatyk (EE08, EE09)',
    edu_tech_sub: 'Zespół Szkół Technicznych w Działoszynie',
    cert_title: 'Certyfikaty i języki',
    cert_ssis: 'SQL Server Integration Services (SSIS)',
    cert_tsql: 'Certyfikat SQL Server: Querying Data with Transact-SQL',
    cert_ccna: 'Cisco CCNA Routing and Switching',
    cert_english: 'Angielski: B2',

    // Projects
    projects_title: 'Wybrane projekty',
    projects_subtitle: 'Projekty, które najlepiej pokazują moją pasję do tworzenia.',
    project_open: 'Otwórz projekt',

    // Project Descriptions
    proj_nadwarcianskie_desc: 'Responsywna strona internetowa stworzona w WordPress i Elementorze dla firmy specjalizującej się w przetwórstwie i sprzedaży żywności.',
    proj_learning_platform: 'Platforma internetowa do znajdowania korepetytorów z czatem w czasie rzeczywistym, na którym nauczyciel może komunikować się z uczniem.',
    proj_messagesProject: 'Aplikacja full-stack CRUD do zarządzania wiadomościami z nowoczesnym interfejsem w React i backendem w Node.js z ORM Sequelize, uruchamiana w Dockerze.',

    // Contact
    contact_title_1: 'Stwórzmy coś',
    contact_title_2: 'razem.',
    contact_desc: 'Masz pomysł na projekt lub po prostu chcesz się przywitać? Jestem zawsze otwarty na nowe możliwości i dyskusje.',
    contact_email_label: 'Email',
    contact_socials_label: 'Social Media',

    // Form
    form_label_name: 'Imię',
    form_placeholder_name: 'Jan Kowalski',
    form_label_email: 'Email',
    form_placeholder_email: 'jan@przyklad.pl',
    form_label_message: 'Wiadomość',
    form_placeholder_message: 'Opisz swój projekt...',
    form_btn_send: 'Wyślij wiadomość',
    form_btn_sending: 'Wysyłanie...',
    form_btn_success: 'Wiadomość wysłana',
    form_error: 'Coś poszło nie tak. Spróbuj ponownie.',

    // Footer
    footer_rights: 'Wszelkie prawa zastrzeżone.',
    footer_built: 'Zbudowane w React, Tailwind i Vite'
  }
};
