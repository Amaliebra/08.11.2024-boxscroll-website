const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll');
        } else {
            entry.target.classList.remove('scroll'); 
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.shape, .shape2, .shape3').forEach(element => {
    observer.observe(element);
});


