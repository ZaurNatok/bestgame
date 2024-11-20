
let serviceTitle = document.querySelector('.service-title');
let serviceImage = document.querySelector('.content-block__img');
let serviceSubtitle = document.querySelector('.content-block__subtitle');

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

// console.log(getService(serviceId));

