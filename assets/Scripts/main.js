window.onscroll = () => {
    if (window.scrollY > 150) {
        document.querySelector('nav.navbar').classList.add('background');
    } else {
        document.querySelector('nav.navbar').classList.remove('background');
    }
};