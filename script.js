// Animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.section-fade').forEach(el => observer.observe(el));

        // Mobile Menu toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            // Disable scroll when menu is open
            document.body.style.overflow = menu.classList.contains('hidden') ? 'auto' : 'hidden';
        });

        // Close menu on navigation
        menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                menu.classList.add('hidden');
                document.body.style.overflow = 'auto';
            });
        });