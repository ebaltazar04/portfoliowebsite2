
// Changing Banner Dsiplay when hovering over with mouse
let banner = document.querySelector('main');
let bannerName = document.getElementById('name');
let bannerIntro = document.querySelector('p');


function changeBanner() {
    banner.style.opacity = '1.0';
    bannerName.style.fontSize = '2.2rem';
    bannerName.style.color = 'black';
    bannerIntro.style.color = 'black';
    bannerIntro.style.fontSize = '1.2rem';
}

function unchangeBanner() {
    banner.style.opacity = '0.8';
    bannerName.style.fontSize = '2rem';
    bannerName.style.color = 'white';
    bannerIntro.style.color = 'white';
    bannerIntro.style.fontSize = '1rem';
}

// banner.onclick = changeBanner;

banner.addEventListener('mouseover', changeBanner);
bannerName.addEventListener('mouseover', changeBanner);
bannerIntro.addEventListener('mouseover', changeBanner);

banner.addEventListener('mouseleave', unchangeBanner);
bannerName.addEventListener('mouseleave', unchangeBanner);
bannerIntro.addEventListener('mouseleave', unchangeBanner);



// Changing Project Look

//              Project #1
// let eachProject = document.querySelectorAll('div.project');
// let eachProject = document.getElementsByClassName("project");


// console.log(eachProject);

// function changeBackground() {
//      eachProject.style.backgroundColor = 'white';
//  }

// eachProject.addEventListener('mouseover', changeBackground);

let project1 = document.getElementById('pro1');
let title1 = project1.querySelector('h4');
let image1 = project1.querySelector('img');
let caption1 = project1.querySelector('figcaption');

// console.log(project1);
// console.log(title1);

function changeProject1() {
    project1.style.backgroundColor = 'rgb(224, 224, 224)';
    project1.style.borderColor = 'gray';
    title1.style.color = 'black';
    image1.style.height = '19rem';
    image1.style.width = '75%';
    image1.style.opacity = '1.0';
    image1.style.border = '5px black double';
    caption1.style.color = 'black';
}

function resetProject1() {
    project1.style.backgroundColor = 'rgb(103, 101, 101)';
    project1.style.borderColor = 'black';
    title1.style.color = 'white';
    image1.style.height = '15rem';
    image1.style.width = '55%';
    image1.style.opacity = '0.8';
    image1.style.border = '.5rem white grove';
    caption1.style.color = 'white';
}

project1.addEventListener('mouseover', changeProject1);
project1.addEventListener('mouseleave', resetProject1);

// function changeProject() {}
//     for (i = 0; i < eachProject.length; i++) {
        
//     eachProject[i].style.backgroundColor = "white";

//     }


//              Project #2

let project2 = document.getElementById('pro2');

// console.log(project1);

function changeProject2() {
    project2.style.backgroundColor = 'white';
    project2.style.borderColor = 'gray';
}

function resetProject2() {
    project2.style.backgroundColor = 'rgb(103, 101, 101)';
    project2.style.borderColor = 'black';
}

project2.addEventListener('mouseover', changeProject2);
project2.addEventListener('mouseleave', resetProject2);