let banner = document.querySelector('main');
let bannerName = document.getElementById('name');
let bannerIntro = document.querySelector('p');

function changeBanner() {
    banner.style.opacity = '1.0';
    bannerName.style.fontSize = '2.4rem';
    bannerName.style.color = 'black';
    bannerIntro.style.color = 'black';
}

function unchangeBanner() {
    banner.style.opacity = '0.8';
    bannerName.style.fontSize = '2rem';
    bannerName.style.color = 'white';
    bannerIntro.style.color = 'white';
}

// banner.onclick = changeBanner;

banner.addEventListener('mouseover', changeBanner);
bannerName.addEventListener('mouseover', changeBanner);
bannerIntro.addEventListener('mouseover', changeBanner);

banner.addEventListener('mouseleave', unchangeBanner);
bannerName.addEventListener('mouseleave', unchangeBanner);
bannerIntro.addEventListener('mouseleave', unchangeBanner);