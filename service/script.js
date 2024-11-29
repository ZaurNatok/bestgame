
let serviceTitle = document.querySelector('.service-title');
let serviceImage = document.querySelector('.content-block__img');
let serviceSubtitle = document.querySelector('.content-block__subtitle');
let popupTypes = document.querySelector('.choose-typePopup');
let popupTypesSteam = document.querySelector('.choose-typePopup_steam');
let chooseRegion = document.querySelector('.choose-region');
let showDropdownRegionsButton = document.querySelector('.region-select__sector');
let popupTypesTitle = document.querySelector('.content-block__title_popup');
let regionContainer = document.querySelector('.content-block__description_popup-region');
let regionSelect = document.querySelector('.region-select');
let steamPay = document.querySelector('.content__parameters_pay-steam');
let voucherPay = document.querySelector('.voucherEmail');
let paymentButton = document.querySelector('.popupType__item_payment');
let voucherButton = document.querySelector('.popupType__item_voucher');
let voucherNominalsContainer = document.querySelector('.choose-sum__items');
let vouchers = document.querySelector('.choose-sum');

let regionTitle = document.querySelector('.region-select__title');

let search = document.querySelector('.topline__search');
let searchResultDiv = document.querySelector('.topline__searchResult');

const url = new URL(
    document.location.href
)

// Определяем id сервиса

let serviceId = url.searchParams.get('id');
let theService = services.find((element) => element.id == serviceId);
getService(serviceId);
loadVouchers(regionTitle.textContent);

// данные названия сервиса, субтайтл + картинка по id сервиса

function getService(id) {
    services.forEach(el => {
        if (el.id == id) {
            id = el.id;
            serviceTitle.textContent = el.title;
            serviceImage.setAttribute('src', '.' + `${el.imageLink}`)
            serviceSubtitle.textContent = el.subtitle;
            getServiceParamentres(id);
        }
    })
}

// параметры сервиса

function getServiceParamentres(id) {
    services.forEach(el => {
        if (el.id == id) {
            if(el.popupTypes.length < 2) {
                voucherPay.classList.remove('hidden');
                regionTitle.textContent = el.region[0].title;
            }
            
            // если сервис Steam
            if (el.title == 'Steam') {
                console.log('yes')
                popupTypesSteam.classList.remove('hidden');
                steamPay.classList.remove('hidden');
                vouchers.classList.add('hidden');
            }
        } if (el.id == id && el.region && el.region.length > 1) {
            chooseRegion.classList.remove('hidden');
            let regionFlag = document.querySelector('.region-flag');
            regionFlag.setAttribute('src', `.${el.region[0].img}`);
            let regionTitle = document.querySelector('.region-select__title');
            regionTitle.textContent = el.region[0].title;
            let dropDown = document.querySelector('.region-select__dropdown');

            el.region.forEach(el => {
                const dropdownRegionItem = document.createElement('div');
                const dropdownRegionImage = document.createElement('img');
                const dropdownRegionTitle = document.createElement('p');

                dropdownRegionItem.classList.add('region-item');
                dropdownRegionImage.classList.add('region-flag');
                dropdownRegionTitle.classList.add('region-title');

                dropDown.appendChild(dropdownRegionItem);
                dropdownRegionItem.appendChild(dropdownRegionImage);
                dropdownRegionItem.appendChild(dropdownRegionTitle);

                dropdownRegionImage.setAttribute('src', `.${el.img}`);
                dropdownRegionTitle.textContent = el.title;
            })

            showDropdownRegionsButton.addEventListener('click', function () {
                dropDown.classList.toggle('hidden');
            }
            )

            // Определяем выбранную в выпадающем меню страну

            dropDown.addEventListener('click', function (e) {
                if (e.target.classList.contains('region-item')) {
                    let chosenRegionTitle = e.target.querySelector('.region-title').textContent;
                    let chosenRegionFlag = e.target.querySelector('.region-flag').getAttribute('src');
                    dropDown.classList.toggle('hidden');
                    chosenRegion(chosenRegionTitle, chosenRegionFlag);
                } if (e.target.classList.contains('region-flag')) {
                    let chosenRegionTitle = e.target.nextElementSibling.textContent;
                    let chosenRegionFlag = e.target.getAttribute('src');
                    dropDown.classList.toggle('hidden');
                    chosenRegion(chosenRegionTitle, chosenRegionFlag);
                } if (e.target.classList.contains('region-title')) {
                    let chosenRegionTitle = e.target.textContent;
                    let chosenRegionFlag = e.target.previousSibling.getAttribute('src');
                    dropDown.classList.toggle('hidden');
                    chosenRegion(chosenRegionTitle, chosenRegionFlag);
                }
            })
        } 
    })
}

// Работаем с выбранным регионом из выпадающего списка

function chosenRegion(name, flag) {
    let regionTitle = document.querySelector('.region-select__title');
    let regionFlag = document.querySelector('.region-select__sector').querySelector('.region-flag');
    regionTitle.textContent = name;
    regionFlag.setAttribute('src', `${flag}`)
    loadVouchers(name);
}

// показываем номиналы ваучеров в зависимости от страны

function loadVouchers(country) {

    if(theService.popupTypes.length < 2) {
        // let regionTitle = document.querySelector('.region-select__title');
        let theCountryVouchers = theService.region.find((element) => element.title == country);
        
        voucherNominalsContainer.textContent = '';

        theCountryVouchers.voucherNominals.forEach(el => {
            let voucherNominal = document.createElement('p');
            voucherNominal.classList.add('choose-sum__item');
            voucherNominalsContainer.appendChild(voucherNominal);
            voucherNominal.textContent = el;
        })
    } else {

        let theCountryVouchers = theService.region.find((element) => element.title == country);
        
        voucherNominalsContainer.textContent = '';

        theCountryVouchers.voucherNominals.forEach(el => {
            let voucherNominal = document.createElement('p');
            voucherNominal.classList.add('choose-sum__item');
            voucherNominalsContainer.appendChild(voucherNominal);
            voucherNominal.textContent = el;
        })
    }
}

// Выбор способа пополнения

document.addEventListener('click', function(e) {

    if(e.target == paymentButton) {
        if(!paymentButton.classList.contains('popupType__item_active')) {
            paymentButton.classList.add('popupType__item_active');
            voucherButton.classList.remove('popupType__item_active');
        } if(steamPay.classList.contains('hidden')) {
            steamPay.classList.remove('hidden');
            voucherPay.classList.add('hidden');
            voucherPay.classList.add('hidden');
        }
    }

    if(e.target == voucherButton) {

        loadVouchers(regionTitle.textContent);

        // активация/деактивация кнопок выбора способа оплаты - ваучер или оплата

        if(!voucherButton.classList.contains('popupType__item_active')) {
            voucherButton.classList.add('popupType__item_active');
            paymentButton.classList.remove('popupType__item_active');
            vouchers.classList.add('hidden');
        } if(!steamPay.classList.contains('hidden')) {
            steamPay.classList.add('hidden');
            voucherPay.classList.remove('hidden');
            vouchers.classList.remove('hidden');
        }
    }
})

// Поиск

search.addEventListener('input', function () {
    let searchResultArr = [];

    services.forEach(el => {
        if (el.title.toLowerCase().includes(search.value.toLowerCase())) {
            searchResultArr.push(el.title);
        } else {
            searchResultDiv.classList.remove('visible');
            searchResultDiv.textContent = '';
        }
    })
    searchService(searchResultArr);
    if (searchResultArr.length == 0) {
        searchResultDiv.textContent = 'Ничего не найдено';
    }
})

// Общая функция поиска

function searchService(el) {

    searchResultDiv.textContent = ''
    searchResultDiv.classList.add('visible');

    el.forEach(element => {

        services.forEach(elt => {
            if (elt.title == element) {

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
                itemLink.setAttribute('href', `index.html?id=${id}`)

                searchResultDiv.appendChild(itemLink);
                itemLink.appendChild(itemImage);
                itemLink.appendChild(itemTitle);

                itemTitle.textContent = title;
            }
        })
    })

    if (search.value == '') {
        searchResultDiv.textContent = '';
        searchResultDiv.classList.remove('visible');
    }


}


