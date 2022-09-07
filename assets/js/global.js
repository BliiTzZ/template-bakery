document.addEventListener("DOMContentLoaded", function() {
    // Navigation Scroll
    window.addEventListener('scroll', (e)=> {
        const nav = document.querySelector('nav');

        if(window.pageYOffset>0){
          nav.classList.add("add-shadow");
        } else {
          nav.classList.remove("add-shadow");
        }
    });
});