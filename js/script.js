const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll');
  
      }
    });
  });

observer.observe(document.querySelector('.shine, .shape, .last'));