const titles = document.querySelectorAll('.decs_title');

titles.forEach(title => {
    title.addEventListener('click', () => {
        const parent = title.closest('.service_decs');
        const icon = title.querySelector('img');

        parent.classList.toggle('active');
        icon.classList.toggle('turn');
    });
});