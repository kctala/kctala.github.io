//////// CHANGE HEADER BACKGROUND - DESKTOP ////////
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

//////// CHANGE HEADER BACKGROUND - MOBILE ////////
let mobileNav = document.getElementById('mobile');

window.addEventListener('scroll', function() {

    if (window.scrollY >= 100) {
        mobileNav.classList.add('scrolled');
    } else {
        mobileNav.classList.remove('scrolled');
    }
});

//////// MOBILE DROPDOWN MENU ////////
function menuDropdown() {
    document.getElementById('myDropdown').classList.toggle("show");
};

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName('dropdown-content');
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

//////// ABOUT ME - READ MORE ////////
function readFunction() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more-text");
    let btnText = document.getElementById("read-more-btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }


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