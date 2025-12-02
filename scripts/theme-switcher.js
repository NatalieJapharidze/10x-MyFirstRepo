(function() {
    'use strict';

    const themeToggle = document.getElementById('theme-toggle');
    const themeStylesheet = document.getElementById('theme-style');
    
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
        themeStylesheet.setAttribute('href', 'styles/light-theme.css');
    } else {
        document.body.classList.remove('light-theme');
        themeStylesheet.setAttribute('href', 'styles/dark-theme.css');
    }

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        
        let theme = 'dark';
        if (document.body.classList.contains('light-theme')) {
            theme = 'light';
            themeStylesheet.setAttribute('href', 'styles/light-theme.css');
        } else {
            themeStylesheet.setAttribute('href', 'styles/dark-theme.css');
        }
        
        localStorage.setItem('theme', theme);
    });
})();