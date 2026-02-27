
function scrollToSection(id){
    const section = document.getElementById(id);
    if(section){
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


const links = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    const fromTop = window.scrollY + 100;

    links.forEach(link => {
        const section = document.querySelector(link.hash);

        if(section){
            if(
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ){
                link.style.color = "#ffd166";
            } else {
                link.style.color = "white";
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".slide");
    let index = 0;

    if(slides.length > 0){

        function showNextSlide(){
            slides[index].classList.remove("active");
            index = (index + 1) % slides.length;
            slides[index].classList.add("active");
        }

        setInterval(showNextSlide, 3000); 
    }

});