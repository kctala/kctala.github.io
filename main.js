//////// CHANGE HEADER BACKGROUND ////////
let nav = document.querySelector('nav');

window.addEventListener('scroll', function(event) {
    event.preventDefault();

    if (window.scrollY >= 100) {
        nav.style.backgroundColor = '#99C0E4';
        nav.style.height = '4em';
    } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.height = '10em';
    }
});

//////// UPDATE PROJECT IMAGE WITH DESCRIPTION ////////
function setNewImage1() {
    document.getElementById('project-img1').src = "./img/project-talaMindfulness-desc.png";
};
function setOldImage1() {
    document.getElementById('project-img1').src = "./img/project-talaMindfulness.png";
};
function setNewImage2() {
    document.getElementById('project-img2').src = "./img/project-MeridianDogTraining-desc.png";
};
function setOldImage2() {
    document.getElementById('project-img2').src = "./img/project-MeridianDogTraining.png";
};
function setNewImage3() {
    document.getElementById('project-img3').src = "./img/project-ForestDesigns-desc.png";
};
function setOldImage3() {
    document.getElementById('project-img3').src = "./img/project-ForestDesigns.png";
};