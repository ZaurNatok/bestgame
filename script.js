let questionTitle = document.querySelectorAll('.question__title');
let questionButton = document.querySelector('question__arrow');

console.log(questionTitle)

document.addEventListener('click', function (e) {
    if(e.target.classList.contains('question__title') || e.target.classList.contains('question__arrow')) {
        e.target.parentNode.nextElementSibling.classList.toggle('visible');
        e.target.parentNode.querySelector('.question__arrow').classList.toggle('rotate');
    }
})