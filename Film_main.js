let film_cover = document.querySelector('.cover-1')
let logo = document.querySelector('.logo')
let sub_catalog = document.querySelectorAll('.sub-catalog')
let nav_btn = document.querySelectorAll('.nav_button')


film_cover.addEventListener('click', function(){
    window.location.href = 'Film_player.html'
})

logo.addEventListener('click', function(){
    window.location.href = 'Film_main.html'
})

sub_catalog.forEach(sub_catalog => {
  sub_catalog.addEventListener("click", () => {
    window.location.href = 'under_work.html'
    });
});

nav_btn.forEach(nav_btn => {
  nav_btn.addEventListener("click", () => {
    window.location.href = 'under_work.html'
    });
});