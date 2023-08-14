

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
// Javascript for Login & Registration //
const Dftrmsk = document.querySelector(".Dftrmsk-form");
const mskform = document.querySelector(".masuk-formbox");
const dftform = document.querySelector(".daftar-formbox");
const linkmasuk = document.querySelector(".link-masuk");
const linkdaftar = document.querySelector(".link-daftar");
const btnmasuk = document.querySelector(".btn-masuk");
const btndaftar = document.querySelector("button.btn-daftar");
const iconclose =document.querySelector(".icon-close");
btndaftar.onclick = (()=>{
    Dftrmsk.classList.add("active-popup");
    Dftrmsk.classList.add("active");
    mskform.style.transform = "translateX(-400px)";
    dftform.style.transform = "translateX(0)";
    btndaftar.classList.add("active");
});
btnmasuk.onclick = (()=>{
    Dftrmsk.classList.add("active-popup");
    Dftrmsk.classList.remove("active");
    mskform.style.transform = "translateX(0)";
    dftform.style.transform = "translateX(400px)"
    btnmasuk.classList.add("active");
});
linkdaftar.onclick = (()=>{
    btndaftar.click();
    return false;
});
linkmasuk.onclick = (()=>{
    btnmasuk.click();
    return false;
})
iconclose.onclick =(() =>{
    Dftrmsk.classList.remove("active-popup");
    btndaftar.classList.remove("active");
    btnmasuk.classList.remove("active");
})
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
// Javascript for Sepeda Motor //
const navspdmotor = document.querySelector("#sepedamotor-disp");
const dispmotor = document.querySelector(".Layanan-motor");
const terpopuler = document.querySelector(".terpopuler");
const terkait = document.querySelector(".terkait");
const populermotor = document.querySelector(".Populer-motor");
const terkaitmotor = document.querySelector(".Terkait-motor"); 

navspdmotor.onclick = (()=>{
    navspdmotor.classList.add('active');
    dispmotor.classList.add('active');
    navmobil.classList.remove('active');
    dispmobil.classList.remove('active');
});

terkait.onclick = (()=>{
    terkait.classList.add('active');
    terpopuler.classList.remove('active');
    terkaitmotor.classList.add('active');
    populermotor.classList.remove('active');
});
terpopuler.onclick = (()=>{
    terkait.classList.remove('active');
    terpopuler.classList.add('active');
    terkaitmotor.classList.remove('active');
    populermotor.classList.add('active');
});

//Javascript for Mobil//
const navsmobil = document.querySelector("#mobil-disp");
const dispmobil = document.querySelector(".Layanan-mobil");
const terpopulerm = document.querySelector(".Layanan-mobil .terpopuler");
const terkaitm = document.querySelector(".Layanan-mobil .terkait");
const populermobil = document.querySelector(".Populer-mobil");
const terkaitmobil = document.querySelector(".Terkait-mobil"); 
const menunavmobil = document.querySelector (".navmenumobil");
const navmobil = document.querySelector(".nav-m");
const navdmobil = document.querySelector(".nav-dm");
const dispjm = document.querySelector(".dispjm");
const dispjdm = document.querySelector(".dispjdm");
const backnavm = document.querySelector(".dispjm .backnav");
const backnavdm = document.querySelector(".dispjdm .backnav");

navsmobil.onclick = (()=>{
    navsmobil.classList.add('active');
    dispmobil.classList.add('active');
    navspdmotor.classList.remove('active');
    dispmotor.classList.remove('active');
});

terkaitm.onclick = (()=>{
    terkaitm.classList.add('active');
    terpopulerm.classList.remove('active');
    terkaitmobil.classList.add('active');
    populermobil.classList.remove('active');
});
terpopulerm.onclick = (()=>{
    terkaitm.classList.remove('active');
    terpopulerm.classList.add('active');
    terkaitmobil.classList.remove('active');
    populermobil.classList.add('active');
});
navmobil.onclick = (()=>{
    menunavmobil.classList.remove('active');
    dispjm.classList.add('active');
});
navdmobil.onclick = (()=>{
    menunavmobil.classList.remove('active');
    dispjdm.classList.add('active');
});
backnavm.onclick = (()=>{
    menunavmobil.classList.add('active');
    dispjm.classList.remove('active');
});
backnavdm.onclick = (()=>{
    menunavmobil.classList.add('active');
    dispjdm.classList.remove('active');
})




// Javascript for Location //
// const inputkabkota = document.querySelector("#inkabkota-input");

// inputkabkota.addEventListener("input", onInputChange);
// getKabKota();
// let namakabkota = [];
// async function getKabKota () {
//     const KabKota = await fetch (`https://ibnux.github.io/data-indonesia/kabupaten/35.json`);
//     const data = await KabKota.json();
//     namakabkota = data.map(x => x.nama);
// }
// function onInputChange() {
//     const value = inputkabkota.value.toLowerCase();
//     const filteredNames = [];
//     namakabkota.forEach((nkabkota) => {
//         if (nkabkota.substr(0, value.length).toLowerCase() === value)
//         filteredNames.push(nkabkota);
//     });
//     createAutocompletedropdown (filteredNames);
// }
// function createAutocompletedropdown(list) {
//     const listEl = document.createElement("ul");
//     listEl.className = "resultlokasi";
//     list.forEach((city)=> {
//         const listItem = document.createElement("li");
//         const citybutton = document.createElement("button");
//         citybutton.className = "btn-kabkota";
//         citybutton.innerHTML = city;
//         listItem.appendChild(citybutton);
//         listEl.appendChild(listItem);
//     });
//     document.querySelector("#inputgrup2").appendChild(listEl);
// }