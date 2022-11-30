
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



//              Changing Project Look               //

//First Attempt:
// let eachProject = document.querySelectorAll('div.project');
// let eachProject = document.getElementsByClassName("project");
// console.log(eachProject);

// function changeBackground() {
//      eachProject.style.backgroundColor = 'white';
//  }
// eachProject.addEventListener('mouseover', changeBackground);

//              Project #1          //


let project1 = document.getElementById('pro1');
let title1 = project1.querySelector('h4');
let image1 = project1.querySelector('img');
let caption1 = project1.querySelector('figcaption');

// console.log(project1);
// console.log(title1);

function changeProject1() {
    project1.style.backgroundColor = 'rgb(225, 225, 225)';
    project1.style.borderColor = 'gray';
    title1.style.color = 'black';
    title1.style.fontSize = '1.3rem';
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
    title1.style.fontSize = '1rem';
    image1.style.height = '15rem';
    image1.style.width = '55%';
    image1.style.opacity = '0.8';
    image1.style.borderWidth = '0.5rem';
    image1.style.borderColor = 'white';
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
let title2 = project2.querySelector('h4');
let image2 = project2.querySelector('img');
let caption2 = project2.querySelector('figcaption');

// console.log(project1);
// console.log(title1);

function changeProject2() {
    project2.style.backgroundColor = 'rgb(225, 225, 225)';
    project2.style.borderColor = 'gray';
    title2.style.color = 'black';
    title2.style.fontSize = '1.3rem';
    image2.style.height = '19rem';
    image2.style.width = '75%';
    image2.style.opacity = '1.0';
    image2.style.borderWidth = '0.5rem';
    image2.style.borderColor = 'white';
    caption2.style.color = 'black';
}

function resetProject2() {
    project2.style.backgroundColor = 'rgb(103, 101, 101)';
    project2.style.borderColor = 'black';
    title2.style.color = 'white';
    title2.style.fontSize = '1rem';
    image2.style.height = '15rem';
    image2.style.width = '55%';
    image2.style.opacity = '0.8';
    image2.style.border = '0.5rem white grove';
    caption2.style.color = 'white';
}

project2.addEventListener('mouseover', changeProject2);
project2.addEventListener('mouseleave', resetProject2);

//          Project #3          //

let project3 = document.getElementById('pro3');
let title3 = project3.querySelector('h4');
let image3 = project3.querySelector('img');
let caption3 = project3.querySelector('figcaption');


function changeProject3() {
    project3.style.backgroundColor = 'rgb(225, 225, 225)';
    project3.style.borderColor = 'gray';
    title3.style.color = 'black';
    title3.style.fontSize = '1.3rem';
    image3.style.height = '19rem';
    image3.style.width = '75%';
    image3.style.opacity = '1.0';
    image3.style.border = '5px black double';
    caption3.style.color = 'black';
}

function resetProject3() {
    project3.style.backgroundColor = 'rgb(103, 101, 101)';
    project3.style.borderColor = 'black';
    title3.style.color = 'white';
    title3.style.fontSize = '1rem';
    image3.style.height = '15rem';
    image3.style.width = '55%';
    image3.style.opacity = '0.8';
    image3.style.borderWidth = '0.5rem';
    image3.style.borderColor = 'white';
    caption3.style.color = 'white';
}

project3.addEventListener('mouseover', changeProject3);
project3.addEventListener('mouseleave', resetProject3);





//          Project #4          //

let project4 = document.getElementById('pro4');
let title4 = project4.querySelector('h4');
let image4 = project4.querySelector('img');
let caption4 = project4.querySelector('figcaption');


function changeProject4() {
    project4.style.backgroundColor = 'rgb(225, 225, 225)';
    project4.style.borderColor = 'gray';
    title4.style.color = 'black';
    title4.style.fontSize = '1.3rem';
    image4.style.height = '19rem';
    image4.style.width = '75%';
    image4.style.opacity = '1.0';
    image4.style.border = '5px black double';
    caption4.style.color = 'black';
}

function resetProject4() {
    project4.style.backgroundColor = 'rgb(103, 101, 101)';
    project4.style.borderColor = 'black';
    title4.style.color = 'white';
    title4.style.fontSize = '1rem';
    image4.style.height = '15rem';
    image4.style.width = '55%';
    image4.style.opacity = '0.8';
    image4.style.borderWidth = '0.5rem';
    image4.style.borderColor = 'white';
    caption4.style.color = 'white';
}

project4.addEventListener('mouseover', changeProject4);
project4.addEventListener('mouseleave', resetProject4);



//          Project #5         //

let project5 = document.getElementById('pro5');
let title5 = project5.querySelector('h4');
let image5 = project5.querySelector('img');
let caption5 = project5.querySelector('figcaption');


function changeProject5() {
    project5.style.backgroundColor = 'rgb(225, 225, 225)';
    project5.style.borderColor = 'gray';
    title5.style.color = 'black';
    title5.style.fontSize = '1.3rem';
    image5.style.height = '19rem';
    image5.style.width = '75%';
    image5.style.opacity = '1.0';
    image5.style.border = '5px black double';
    caption5.style.color = 'black';
}

function resetProject5() {
    project5.style.backgroundColor = 'rgb(103, 101, 101)';
    project5.style.borderColor = 'black';
    title5.style.color = 'white';
    title5.style.fontSize = '1rem';
    image5.style.height = '15rem';
    image5.style.width = '55%';
    image5.style.opacity = '0.8';
    image5.style.borderWidth = '0.5rem';
    image5.style.borderColor = 'white';
    caption5.style.color = 'white';
}

project5.addEventListener('mouseover', changeProject5);
project5.addEventListener('mouseleave', resetProject5);


// Creating click event to show image of Petunia //

let revealPetunia = document.getElementById('flex-1');