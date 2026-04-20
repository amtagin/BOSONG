const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('.open_btn');
const modalClose = document.querySelector('.close_btn');

modalOpen.addEventListener('click',function(){
    modal.classList.add('on');
});

modalClose.addEventListener('click',function(){
    modal.classList.remove('on');
});