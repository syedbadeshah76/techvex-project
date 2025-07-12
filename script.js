  document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.getElementById('menu-toggle');
            const navbar = document.getElementById('navbar');

            if (menuToggle && navbar) {
                menuToggle.addEventListener('click', () => {
                    navbar.classList.toggle('active');
                    const menuIcon = menuToggle.querySelector('i');
                    if (navbar.classList.contains('active')) {
                        menuIcon.classList.remove('ri-menu-line');
                        menuIcon.classList.add('ri-close-line');
                    } else {
                        menuIcon.classList.remove('ri-close-line');
                        menuIcon.classList.add('ri-menu-line');
                    }
                });

                // Close navbar when a link is clicked (for smooth scrolling)
                navbar.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        if (navbar.classList.contains('active')) {
                            navbar.classList.remove('active');
                            const menuIcon = menuToggle.querySelector('i');
                            menuIcon.classList.remove('ri-close-line');
                            menuIcon.classList.add('ri-menu-line');
                        }
                    });
                });
            }
        });