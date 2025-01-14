const translations = {
    en: {
        title: "Nerveworks Solutions - AI Innovation",
        heroTitle: "Transforming Business Through AI",
        heroText: "We harness the power of artificial intelligence to drive innovation and create intelligent solutions for tomorrow's challenges.",
        aiConsulting: {
            title: "AI Consulting",
            text: "Strategic guidance on implementing AI solutions to optimize your business processes and drive growth."
        },
        mlSolutions: {
            title: "Machine Learning Solutions",
            text: "Custom machine learning models designed to solve your specific business challenges."
        },
        dataAnalytics: {
            title: "Data Analytics",
            text: "Transform your raw data into actionable insights with our advanced analytics capabilities."
        },
        footer: "© 2015-2025 Nerveworks Solutions SRL. All rights reserved."
    },
    ro: {
        title: "Nerveworks Solutions - Inovație în IA",
        heroTitle: "Transformăm Afacerile prin Inteligență Artificială",
        heroText: "Valorificăm puterea inteligenței artificiale pentru a stimula inovația și a crea soluții inteligente pentru provocările de mâine.",
        aiConsulting: {
            title: "Consultanță IA",
            text: "Îndrumare strategică în implementarea soluțiilor de IA pentru optimizarea proceselor de afaceri și stimularea creșterii."
        },
        mlSolutions: {
            title: "Soluții Machine Learning",
            text: "Modele personalizate de învățare automată concepute pentru a rezolva provocările specifice afacerii dvs."
        },
        dataAnalytics: {
            title: "Analiză Date",
            text: "Transformați datele brute în informații acționabile cu capacitățile noastre avansate de analiză."
        },
        footer: "© 2015-2025 Nerveworks Solutions SRL. Toate drepturile rezervate."
    }
};

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    updateContent();
}

function updateContent() {
    const currentLang = localStorage.getItem('language') || 'en';
    const content = translations[currentLang];

    // Update document title
    document.title = content.title;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = content;
        keys.forEach(k => {
            value = value[k];
        });
        element.textContent = value;
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
}); 