    // Theme switcher
    function setTheme(isDark) {
      document.body.classList.toggle('light-mode', !isDark);
      document.getElementById('themeToggle').textContent = isDark ? '🌙' : '☀️';
      localStorage.setItem('preferredTheme', isDark ? 'dark' : 'light');
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Initialize preferences
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    const savedTheme = localStorage.getItem('preferredTheme');
    const prefersDark = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    document.getElementById('langSelect').value = savedLanguage;
    setLanguage(savedLanguage);
    setTheme(prefersDark);

    // Event listeners
    document.getElementById('langSelect').addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });

    document.getElementById('themeToggle').addEventListener('click', () => {
      const isCurrentlyDark = !document.body.classList.contains('light-mode');
      setTheme(!isCurrentlyDark);
    });

    // Detect system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('preferredTheme')) {
        setTheme(e.matches);
      }
    });
