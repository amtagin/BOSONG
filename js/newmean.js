document.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('.new');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.setAttribute('data-scroll', 'in');
        } else {
          el.setAttribute('data-scroll', 'out');
        }
      });
    }, {
      threshold: 1
    });
  
    observer.observe(el);
  });