function highlightCurrentPage() {
    const links = document.querySelectorAll('#main-header nav a'); // Adjust selector for your setup
    const currentUrl = window.location.href;
    const homepageUrl = new URL(links[0].href);

    if (currentUrl === homepageUrl.href || currentUrl === homepageUrl.origin + '/') {
        links[0].classList.add('current');
    } else {
        links.forEach(link => {
            if (link.href === currentUrl) {
                link.classList.add('current');
            }
        });
    }
}