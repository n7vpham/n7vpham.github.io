let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        header.style.top = '-76px';
    } else {
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});