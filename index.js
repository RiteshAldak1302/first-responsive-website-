burger= document.querySelector('.burger');
navbar= document.querySelector('.nav-bar');
visible= document.querySelector('.visible-resp');
rightnav=  document.querySelector('.right-nav');
navlist=  document.querySelector('.nav-list');
hnavresp= document.querySelector('.h-nav-resp');


burger.addEventListener('click', myfun=()=>{
    
    rightnav.classList.toggle('visible-resp'); 
    navlist.classList.toggle('visible-resp'); 
    navbar.classList.toggle('h-nav-resp');

    /*imp- class.toggle is function which toggle the class which we write in the bracket means yaha click event h to click karne par toggle hogi class that is ek click par class include hogi and next click par exclude kar dega wahi class property */
})