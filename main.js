//login
const login = document.querySelector('.login');

function displayLogin(){
    let loginOpen = document.querySelector('.login-open');
    loginOpen.classList.toggle('active');
};

login.addEventListener('click', displayLogin);

//slider
let currentIndex = 0;
let newIndex = 0;

const slideElements = document.getElementsByClassName('slide');
const slidesLength = slideElements.length;
let paginationElement = document.getElementsByClassName('pagination')[0];
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

function navigateSlider() {
   if (newIndex === -1) {
      newIndex = slidesLength - 1;
   }
   else if (newIndex === slidesLength) {
      newIndex = 0;
   };
   

   slideElements[newIndex].style.display = "block";
   slideElements[currentIndex].style.display = "none";
   currentIndex = newIndex;
}

prev.addEventListener('click', function() {
   newIndex--;
   navigateSlider();
});

next.addEventListener('click', function() {
   newIndex++;
   navigateSlider();
});

const paginationHTML = [];
for (let i = 0; i < slidesLength; i++){
   paginationHTML.push('<button class="pagination-button" data-index ="' + i + '"></button>');
}
paginationElement.innerHTML = paginationHTML.join('');
paginationElement.addEventListener('click', function(e){
   let target = e.target;
   if(target.classList.contains('pagination-button')){
      newIndex = Number(target.getAttribute("data-index"));
      navigateSlider();
   }
});