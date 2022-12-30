const menu = document.querySelector('#mobile-menu ');
const menuLinks = document.querySelector('.navbar__menu');

// Display Mobile Menu //

const mobileMenu = () =>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
};

menu.addEventListener('click', mobileMenu);

//show active menu when scrolling 

const highligthMenu = ()=>{
    const eleme = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const services = document.querySelector('#services-page')
    let scrollPos = window.scrollY


    //add 'highlight' class to my menu items 

    if (window.innerWidth > 960 && scrollPos < 600){
    homeMenu.classList.add('highlight')
    aboutMenu.classList.remove ('highligth')

return
}else if(window.innerWidth > 960 && scrollPos < 1400){
    aboutMenu.classList.add('highligth')
    homeMenu.classList.remove('highligth')
    servicesMenu.classList.remove('highligth')
    return
} else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highligth')
    aboutMenu.classList.remove('highligth')
    return
   }

   if((elem && window.innerWidth <960 && scrollPos < 600)||elem){
    elem.classList.remove('highligth');
   } 

}

window.addEventListener('srcoll',highligthMenu);
window.addEventListener('click',highligthMenu);


// Close mobile menu when clicking on a menu item


const hideMobileMenu = () =>{
    const menuBars = document.querySelector(".is-active")
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}


menuLinks.addEventListener('click',hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);



