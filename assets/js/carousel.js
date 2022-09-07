document.addEventListener("DOMContentLoaded", function() {
    // Carousel
    const carouselContainer = document.getElementsByClassName("carousel-container");
    const page = document.querySelector(".page");
    const leftButton = document.getElementById("carousel-left");
    const rightButton = document.getElementById("carousel-right");

    rightButton.addEventListener("click", () => {
        const pageWidth = page.clientWidth;
        carouselContainer[0].scrollLeft += pageWidth;
    });

    leftButton.addEventListener("click", () => {
        const pageWidth = page.clientWidth;
        carouselContainer[0].scrollLeft -= pageWidth;
    });
});
