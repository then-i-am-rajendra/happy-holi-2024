/* ====================== toogle icon navbar =======================*/

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick =() => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};




/* ====================== scroill section avtive link =======================*/
let section = document.querySelectorAll( 'section');
let navlink = document.querySelectorAll( 'header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top =window.scrollY;
        let offset =sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset  && top < offset+ height){
            navlink.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +  ']').classList.add('active');

        });

        };

    });