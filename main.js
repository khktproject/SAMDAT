window.addEventListener('DOMContentLoaded', event => {

    // 1. Hiệu ứng thu nhỏ Navbar khi cuộn trang
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-scrolled');
        } else {
            navbarCollapsible.classList.add('navbar-scrolled');
        }
    };

    // Chạy hàm lần đầu
    navbarShrink();

    // Chạy hàm mỗi khi cuộn
    document.addEventListener('scroll', navbarShrink);

    // 2. Tự động đóng menu mobile khi nhấn vào một mục
    const navLinks = document.querySelectorAll('.nav-link:not(.btn-contact)'); // Trừ nút contact
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });
});