let logo = document.querySelector('.logo')
let sub_catalog = document.querySelectorAll('.sub-catalog')
let nav_btn = document.querySelectorAll('.nav_button')
let likes_count = document.querySelector('.likes')
let dislikes_count = document.querySelector('.dislikes')
let likes_check = document.querySelector('.check-1')
let dislikes_check = document.querySelector('.check-2')

let like = false 
let likes_num = 0
likes_check.addEventListener('click', function(){
    if (like == false){
        likes_num += 1
        likes_count.innerHTML = likes_num
        like = true
    } else if(like == true){
        likes_num -= 1
        likes_count.innerHTML = likes_num
        like = false
    }
})

let dislike = false 
let dislikes_num = 0
dislikes_check.addEventListener('click', function(){
    if (dislike == false){
        dislikes_num += 1
        dislikes_count.innerHTML = dislikes_num
        dislike = true
    } else if(dislike == true){
        dislikes_num -= 1
        dislikes_count.innerHTML = dislikes_num
        dislike = false
    }
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