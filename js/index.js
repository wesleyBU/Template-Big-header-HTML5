document.addEventListener('DOMContentLoaded',function () {
    var header = document.getElementById('headerPage');
    var navbar = document.getElementById('navbar');

    window.onscroll = function () {
        if (window.scrollY >= header.offsetHeight){
            navbar.classList.add('navbar-scrolled');
        }else{
            navbar.classList.remove('navbar-scrolled');
        }
    }
});