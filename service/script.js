
let serviceTitle = document.querySelector('.service-title');
let serviceImage = document.querySelector('.content-block__img');
let serviceSubtitle = document.querySelector('.content-block__subtitle');

let search = document.querySelector('.topline__search');
let searchResultDiv = document.querySelector('.topline__searchResult');

const url = new URL(
    document.location.href
)

let serviceId = url.searchParams.get('id');

getService(serviceId);

function getService(id) {
    services.forEach(el => {
        if(el.id == id) {
            serviceTitle.textContent = el.title;
            serviceImage.setAttribute('src', '.' + `${el.imageLink}`)
            serviceSubtitle.textContent = el.subtitle;
        }
    })
}

// Поиск

search.addEventListener('input', function() {
    let searchResultArr = [];

    services.forEach(el => {
        if(el.title.toLowerCase().includes(search.value.toLowerCase())) {
            searchResultArr.push(el.title);
        } else {
            searchResultDiv.classList.remove('visible');
            searchResultDiv.textContent = '';
        }  
    })
    searchService(searchResultArr);
    if(searchResultArr.length == 0) {
        searchResultDiv.textContent = 'Ничего не найдено';
    }
})

// Общая функция поиска

function searchService(el) {

    searchResultDiv.textContent = ''
    searchResultDiv.classList.add('visible');

el.forEach(element => {

    services.forEach(elt => {
        if(elt.title == element) {

            let title = elt.title;
            let imgLink = elt.imageLink;
            let id = elt.id;
            
            const itemLink = document.createElement('a');
            const itemImage = document.createElement('img');
            const itemTitle = document.createElement('h3');

            itemLink.classList.add('searchResult__item');
            itemImage.classList.add('searchResult__icon');
            itemImage.setAttribute('src', `../${imgLink}`)
            itemTitle.classList.add('searchResult__title');
            itemLink.setAttribute('href', `service/index.html?id=${id}`)

            searchResultDiv.appendChild(itemLink);
            itemLink.appendChild(itemImage);
            itemLink.appendChild(itemTitle);

            itemTitle.textContent = title;
        }
    })
})

if(search.value == '') {
    searchResultDiv.textContent = '';
    searchResultDiv.classList.remove('visible');
}

    
}

// console.log(getService(serviceId));

