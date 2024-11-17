let questionTitle = document.querySelectorAll('.question__title');
let questionButton = document.querySelector('question__arrow');
let gamesButton = document.querySelector('.filter__item_games');
let servicesButton = document.querySelector('.filter__item_services');
let programmsButton = document.querySelector('.filter__item_programms');
let gamesFilter = document.querySelector('.item__filter-title_games');
let servicesFilter = document.querySelector('.item__filter-title_services');
let programmsFilter = document.querySelector('.item__filter-title_programms');
let servicesButtonTitle = document.querySelector('.item__filter-title_services');
let gamesButtonTitle = document.querySelector('.item__filter-title_games');
let programmsButtonTitle = document.querySelector('.item__filter-title_programms');
let mainContainer = document.querySelector('.items_main');

let search = document.querySelector('.top-line__search');
let searchResultDiv = document.querySelector('.searchResult');

// FAQ

document.addEventListener('click', function (e) {
    if(e.target.classList.contains('question__title') || e.target.classList.contains('question__arrow')) {
        e.target.parentNode.nextElementSibling.classList.toggle('visible');
        e.target.parentNode.querySelector('.question__arrow').classList.toggle('rotate');
    }
})

// Поиск

search.addEventListener('input', function() {
    let searchResultArr = [];
    services.forEach(el => {
        if(el.title.toLowerCase().includes(search.value.toLowerCase())) {

            searchResultArr.push(el.title);
        } else {
            searchResultDiv.classList.remove('visible');
        }  
    })
    searchService(searchResultArr);
})

// Мобильный поиск



// Общая функция поиска

function searchService(el) {
    searchResultDiv.textContent = ''
    searchResultDiv.classList.add('visible');

el.forEach(element => {

    services.forEach(elt => {
        if(elt.title == element) {

            let title = elt.title;
            let imgLink = elt.imageLink;
            
            const itemLink = document.createElement('a');
            const itemImage = document.createElement('img');
            const itemTitle = document.createElement('h3');

            itemLink.classList.add('searchResult__item');
            itemImage.classList.add('searchResult__icon');
            itemImage.setAttribute('src', `${imgLink}`)
            itemTitle.classList.add('searchResult__title');
            itemLink.setAttribute('href', `service.html`)

            searchResultDiv.appendChild(itemLink);
            itemLink.appendChild(itemImage);
            itemLink.appendChild(itemTitle);


            itemTitle.textContent = title;
        }
    })
})



    
}

// Переключение типов сервисов

document.addEventListener('click', function(e){

if(e.target == gamesButton || e.target == gamesFilter) {
    mainContainer.textContent = '';
    gamesButton.classList.add('filter__item_active');
    gamesButtonTitle.classList.add('item__filter-title_active');
    servicesButton.classList.remove('filter__item_active');
    programmsButton.classList.remove('filter__item_active');
    servicesButtonTitle.classList.remove('item__filter-title_active');
    programmsButtonTitle.classList.remove('item__filter-title_active');
    services.forEach(el => {
        if(el.type == 'Игры') {
            createCard(mainContainer, el);
        }
    }) 
} else if(e.target == servicesButton || e.target == servicesFilter) {
    mainContainer.textContent = '';
    servicesButton.classList.add('filter__item_active');
    servicesButtonTitle.classList.add('item__filter-title_active');
    gamesButton.classList.remove('filter__item_active');
    programmsButton.classList.remove('filter__item_active');
    programmsButtonTitle.classList.remove('item__filter-title_active');
    gamesButtonTitle.classList.remove('item__filter-title_active');
    services.forEach(el => {
        if(el.type == 'Сервисы') {
            createCard(mainContainer, el);
        }
    }) 
} else if(e.target == programmsButton || e.target == programmsFilter) {
    mainContainer.textContent = '';
    programmsButton.classList.add('filter__item_active');
    programmsButtonTitle.classList.add('item__filter-title_active');
    gamesButton.classList.remove('filter__item_active');
    servicesButton.classList.remove('filter__item_active');
    servicesButtonTitle.classList.remove('item__filter-title_active');
    gamesButtonTitle.classList.remove('item__filter-title_active');
    services.forEach(el => {
        if(el.type == 'Программы') {
            createCard(mainContainer, el);
        }
    }) 
}
})

// Загрузка всех сервисов

serviceCardsLoad(services);

function serviceCardsLoad(services) {

services.forEach(el => {

    if(el.isPopular == true) {
        const container = document.querySelector('.swiper-wrapper_popular');
        createCard(container, el)
    } else if(el.type == 'Игры') {
        const container = document.querySelector('.items_main');
        createCard(container, el)
    }
}) 

}

function createCard(container, el) {
    let title = el.title;
    let imgLink = el.imageLink;
    let id = el.id;
    
    const itemLink = document.createElement('a');
    const itemContainer = document.createElement('div');
    const itemImage = document.createElement('div');
    const itemTitle = document.createElement('h3');

    itemLink.classList.add('item__link', 'swiper-slide');
    itemContainer.classList.add('items__item');
    itemImage.classList.add('item__image_div');
    itemTitle.classList.add('item__title');
    itemImage.setAttribute('style', `background-image: url(${imgLink});`)
    itemLink.setAttribute('href', `service.html`)

    container.appendChild(itemLink);
    itemLink.appendChild(itemContainer);
    itemContainer.appendChild(itemImage);
    itemContainer.appendChild(itemTitle);

    itemTitle.textContent = title;
}
