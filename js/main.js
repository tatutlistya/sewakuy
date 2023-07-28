// Javascript of Resposnsive Navigation Menu //
let menu = document.querySelector ('#menu-icon');
let navbar = document.querySelector ('.navbar1');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

// Javascript for Nav-link on scroll //
let section= document.querySelectorAll("section");
let navLink=document.querySelectorAll(".navbar1 a");

window.onscroll = () => {
    section.forEach(sec => {
        let top= window.scrollY;
        let offset= sec.offsetTop-150;
        let height= sec.offsetHeight;
        let id= sec.getAttribute("id")

        if(top >= offset && top < offset + height){
            navLink.forEach(links => {
                links.classList.remove("active");
                document.querySelector(".navbar1 a[href*="+id+"]").classList.add("active");
            })
        }
    })
}

// Javascript for Image Slider //
const btns = document.querySelectorAll(".nav-btnsldr");
const slides = document.querySelectorAll(".img-slide");
const texts = document.querySelectorAll(".text-slide");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    texts.forEach((text) => {
        text.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    texts[manual].classList.add("active");
}

btns.forEach((btn, i) =>{
    btn.addEventListener("click", () =>{
        sliderNav(i);
    });
});

// Javascript for Artikel //
const tabs= document.querySelectorAll(".nav-article-btn");
const all_artikel_text= document.querySelectorAll(".article-text");

tabs.forEach((tab, index)=>{
    tab.addEventListener('click', ()=>{
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');

        all_artikel_text.forEach(article_text=>{article_text.classList.remove('active')});
        all_artikel_text[index].classList.add('active');
    });
})