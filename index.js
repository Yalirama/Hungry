window.onscroll = function headerA() {

    var header = document.querySelector('header');

    if(window.pageYOffset > 200) { 
        header.classList.add("header-f");
    } else {
        header.classList.remove("header-f");
    }

};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            document.querySelectorAll('nav a').forEach((link) => {
                if (link.getAttribute('href').replace('#', '') === entry.target.id) {
                    link.classList.add('nav-active');
                } else {
                    link.classList.remove('nav-active');
                }
            });
        }
    });
}, {    
    threshold: 0.7,
});

document.querySelectorAll('.section').forEach(
    (section) => observer.observe(section),
);

let burger = document.getElementById('burger'),
	nav    = document.getElementById('main-nav');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

