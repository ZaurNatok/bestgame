const services = [ 
    {
        type: 'Игры',
        title: 'Valorant',
        subtitle: 'Для аккаунтов США, Европы и Турции',
        addInfo: 'Официальный партнер',
        popupTypes: ['Ваучер'],
        region: [ 
            {
                title: 'США',
                img: './img/usa.jpg'
            }, 
            {
                title: 'Европа',
                img: './img/europe.png'
            }, 
            {
                title: 'Турция',
                img: './img/turkey.webp'
            }],
        isVoucher: true,
        clientInfo: 'email',
        voucherNominalsUSD: ['5$', '10$', '20$', '25$', '35$', '50$', '100$'],
        voucherNominalsEUR: ['5€', '10€', '20€', '50€', '100€'],
        voucherNominalsTRY: ['150VP', '515VP', '1200VP', '1835VP', '2950VP', '6115VP'],
        isPopular: false,
        imageLink: './img/valorant.jpg',
        id: 1
    },
    {
        type: 'Игры',
        title: 'Roblox',
        subtitle: 'При регистрации нового аккаунта используйте почту с доменом gmail.com',
        addInfo: 'Официальный партнер',
        popupTypes: ['Ваучер'],
        region: ['США'],
        isVoucher: true,
        clientInfo: 'email',
        voucherNominalsUSD: ['10$', '20$'],
        isPopular: true,
        imageLink: './img/roblox.jpg',
        id: 2
    },
    {
        type: 'Игры',
        title: 'Razer Gold',
        subtitle: 'Для аккаунтов любого региона. При регистрации нового аккаунта использовать почту с доменом gmail.com',
        addInfo: 'Официальный партнер',
        popupTypes: ['Ваучер'],
        region: [ 
            {
                title: 'Любой регион',
                img: './img/russia.webp'
            }, 
            {
                title: 'Турция',
                img: './img/turkey.webp'
            }],
        isVoucher: true,
        clientInfo: 'email',
        voucherNominalsUSD: ['10$', '20$'],
        voucherNominalsTRY: ['50₺', '100₺', '250₺', '500₺'],
        isPopular: false,
        imageLink: './img/RazerGold.jpg',
        id: 3
    },
    {
        type: 'Игры',
        title: 'PUBG mobile',
        subtitle: 'Для аккаунтов любого региона. При регистрации нового аккаунта использовать почту с доменом gmail.com',
        addInfo: 'Официальный партнер',
        popupTypes: ['Ваучер'],
        region: ['Любой регион'],
        isVoucher: true,
        clientInfo: 'email',
        voucherNominalsANY: ['60UC', '300 + 25UC', '600 + 60UC', '1500 + 300UC', '3000 + 850UC'],
        isPopular: false,
        imageLink: './img/PUBGmobile.jpg',
        id: 4
    },
    {
        type: 'Игры',
        title: 'Point Blank',
        subtitle: 'Для аккаунтов Турции. При регистрации нового аккаунта используйте почту с доменом gmail.com',
        addInfo: 'Официальный партнер',
        popupTypes: ['Ваучер'],
        region: ['Турция'],
        isVoucher: true,
        clientInfo: 'email',
        voucherNominalsTRY: ['900', '1800', '4500', '10400', '21000'],
        voucherCurrency: ['TG'],
        isPopular: false,
        imageLink: './img/Point_Blank.jpg',
        id: 5
    },
    {
        type: 'Игры',
        title: 'Mobile Legends',
        subtitle: 'Для аккаунтов любого региона. При регистрации нового аккаунта использовать почту с доменом gmail.com',
        addInfo: 'Официальный партнер',
        popupTypes: ['Ваучер'],
        region: ['Любой регион'],
        isVoucher: true,
        clientInfo: 'email',
        voucherNominalsTRY: ['56', '278', '571', '1167', '1783', '3005', '4770', '6012'],
        voucherCurrency: ['Diamonds'],
        voucherCurrency: ['TG'],
        isPopular: false,
        imageLink: './img/Mobile_Legends.jpg',
        id: 15
    },
    {
        type: 'Игры',
        title: 'Minecraft',
        subtitle: 'Для аккаунтов любого региона. При регистрации нового аккаунта использовать почту с доменом gmail.com',
        addInfo: 'Официальный партнер',
        popupTypes: ['Ваучер'],
        region: ['Любой регион'],
        isVoucher: true,
        clientInfo: 'email',
        voucherNominalsANY: ['1720'],
        voucherCurrency: ['Coins'],
        isPopular: false,
        imageLink: './img/Minecraft.jpg',
        id: 6
    },
    {
        type: 'Игры',
        title: 'League of Legends',
        subtitle: 'При регистрации нового аккаунта используйте почту с доменом gmail.com',
        addInfo: 'Официальный партнер',
        popupTypes: ['Ваучер'],
        isVoucher: true,
        clientInfo: 'email',
        region: [ 
            {
                title: 'США',
                img: './img/usa.jpg'
            }, 
            {
                title: 'Европа',
                img: './img/europe.png'
            }],
        voucherNominalsUSD: ['5$', '10$', '20$', '50$'],
        voucherNominalsEUR: ['5€', '10€', '20€', '50€'],
        isPopular: false,
        imageLink: './img/LeagueofLegends.jpg',
        id: 7
    },
    {
        type: 'Игры',
        title: 'HearthStone',
        subtitle: 'Для аккаунтов США и Европы. При регистрации нового аккаунта используйте почту с доменом gmail.com',
        addInfo: 'Официальный партнер',
        popupTypes: ['Ваучер'],
        isVoucher: true,
        clientInfo: 'email',
        region: [ 
            {
                title: 'США',
                img: './img/usa.jpg'
            }, 
            {
                title: 'Европа',
                img: './img/europe.png'
            }],
        voucherNominalsANY: ['1 Pack'],
        isPopular: false,
        imageLink: './img/Hearthstone.jpg',
        id: 8
    },
    {
        type: 'Игры',
        title: 'Genshin Impact',
        subtitle: 'Для аккаунтов любого региона',
        addInfo: 'Новинка',
        popupTypes: ['Ваучер'],
        isVoucher: false,
        clientInfo: ['UID', 'Server'],
        region: null,
        voucherNominalsANY: [{
            type: 'Кристаллы',
            sum: '60 кристаллов',
            priceRUR: 81,
            comission: 0
        },
        {
            type: 'Кристаллы',
            sum: '300 + 30 кристаллов',
            priceRUR: 416,
            comission: 0 
        },
        {
            type: 'Кристаллы',
            sum: '980 + 110 кристаллов',
            priceRUR: 1252,
            comission: 0
        },
        {
            type: 'Кристаллы',
            sum: '1280 + 140 кристаллов',
            priceRUR: 1669,
            comission: 0
        },
        {
            type: 'Кристаллы',
            sum: '1980 + 260 кристаллов',
            priceRUR: 2715,
            comission: 0
        },
        {
            type: 'Кристаллы',
            sum: '3280 + 600 кристаллов',
            priceRUR: 4179,
            comission: 0
        },
        {
            type: 'Кристаллы',
            sum: '6480 + 1600 кристаллов',
            priceRUR: 8360,
            comission: 0
        },
        {
            type: 'Кристаллы',
            sum: '9760 + 2200 кристаллов',
            priceRUR: 12540,
            comission: 0
        },
        {
            type: 'Кристаллы',
            sum: '6480 + 1600 кристаллов x 2',
            priceRUR: 16720,
            comission: 0
        },
        {
            type: 'Кристаллы',
            sum: '6480 + 1600 кристаллов x 3',
            priceRUR: 25080,
            comission: 0
        },
        {
            type: 'Кристаллы',
            sum: '6480 + 1600 кристаллов x 4',
            priceRUR: 33440,
            comission: 0
        },
        {
            type: 'Кристаллы',
            sum: '6480 + 1600 кристаллов x 5',
            priceRUR: 41800,
            comission: 0
        },
        {
            type: 'Кристаллы',
            sum: '6480 + 1600 кристаллов x 10',
            priceRUR: 83601,
            comission: 0
        },
        {
            type: 'Кристаллы',
            sum: '6480 + 1600 кристаллов x 15',
            priceRUR: 125401,
            comission: 0
        },
        {
            type: 'Кристаллы',
            sum: '6480 + 1600 кристаллов x 20',
            priceRUR: 167201,
            comission: 0
        },
        {
            type: 'Кристаллы',
            sum: '6480 + 1600 кристаллов x 25',
            priceRUR: 209001,
            comission: 0
        },
        {
            type: 'Кристаллы',
            sum: '6480 + 1600 кристаллов x 50',
            priceRUR: 418003,
            comission: 0
        }
    ],
        isPopular: true,
        imageLink: './img/Genshin_impact.png',
        id: 9
    },
    {
        type: 'Игры',
        title: 'Free Fire',
        subtitle: 'Для аккаунтов любого региона. При регистрации нового аккаунта использовать почту с доменом gmail.com',
        addInfo: 'Официальный партнер',
        popupTypes: ['Ваучер'],
        isVoucher: true,
        clientInfo: 'email',
        region: ['Любой регион'],
        voucherNominalsUSD: ['5$', '10$', '20$', '50$'],
        voucherNominalsEUR: ['5€', '10€', '20€', '50€'],
        isPopular: false,
        imageLink: './img/FreeFire.jpg',
        id: 10
    },
    {
        type: 'Игры',
        title: 'Fortnite',
        subtitle: 'Для аккаунтов любого региона. При регистрации нового аккаунта использовать почту с доменом gmail.com',
        addInfo: 'Официальный партнер',
        popupTypes: ['Ваучер'],
        isVoucher: true,
        clientInfo: 'email',
        region: ['США'],
        voucherNominalsUSD: ['5$', '10$', '20$', '50$'],
        voucherNominalsEUR: ['5€', '10€', '20€', '50€'],
        isPopular: false,
        imageLink: './img/Fortnite.jpg',
        id: 11
    },
    {
        type: 'Игры',
        title: 'Black Desert',
        subtitle: 'Для аккаунтов Турции. При регистрации нового аккаунта использовать почту с доменом gmail.com',
        addInfo: 'Официальный партнер',
        popupTypes: ['Ваучер'],
        isVoucher: true,
        clientInfo: 'email',
        region: ['Турция'],
        voucherNominalsUSD: ['5$', '10$', '20$', '50$'],
        voucherNominalsEUR: ['5€', '10€', '20€', '50€'],
        isPopular: false,
        imageLink: './img/BlackDesert.png',
        id: 12
    },
    {
        type: 'Игры',
        title: 'Apex Legends Mobile',
        subtitle: 'Для аккаунтов Германии. При регистрации нового аккаунта использовать почту с доменом gmail.com',
        addInfo: 'Официальный партнер',
        popupTypes: ['Ваучер'],
        isVoucher: true,
        clientInfo: 'email',
        region: ['Германия'],
        voucherNominalsUSD: ['5$', '10$', '20$', '50$'],
        voucherNominalsEUR: ['5€', '10€', '20€', '50€'],
        isPopular: false,
        imageLink: './img/ApexLegendsMobile.jpg',
        id: 13
    },
    {
        type: 'Сервисы',
        title: 'Steam',
        subtitle: 'Аккаунты РФ и стран СНГ. Деньги поступят на аккаунт в течение 15 мин. В редких случаях — до 2 часов.',
        addInfo: 'Официальный партнер',
        popupTypes: ['Пополнить аккаунт', 'Ваучер'],
        isVoucher: true,
        accountPopup: true,
        accountPopupInfo: 'логин Steam',
        clientInfo: 'email',
        region: [ 
            {
                title: 'Россия',
                img: './img/russia.webp'
            }, 
            {
                title: 'Казахстан',
                img: './img/kz.jpg'
            }, 
            {
                title: 'Страны СНГ',
                img: './img/cia.jpg'
            }],
        voucherNominalsUSD: ['5$', '10$', '20$', '50$'],
        voucherNominalsEUR: ['5€', '10€', '20€', '50€'],
        isPopular: true,
        imageLink: './img/steam.png',
        id: 14
    },
    {
        type: 'Сервисы',
        title: 'Playstation Network',
        subtitle: 'При регистрации нового аккаунта используйте почту с доменом gmail.com',
        addInfo: 'Официальный партнер',
        popupTypes: ['Ваучер'],
        isVoucher: true,
        accountPopup: false,
        accountPopupInfo: '',
        clientInfo: 'email',
        region: [ 
            {
                title: 'США',
                img: './img/usa.jpg'
            }, 
            {
                title: 'Индия',
                img: './img/india.png'
            }, 
            {
                title: 'Польша',
                img: './img/poland.png'
            }, 
            {
                title: 'Бельгия',
                img: './img/belgium.webp'
            }, 
            {
                title: 'Франция',
                img: './img/france.webp'
            }, 
            {
                title: 'Нидерланды',
                img: './img/holland.png'
            }, 
            {
                title: 'Австрия',
                img: './img/austria.png'
            }, 
            {
                title: 'Германия',
                img: './img/germany.webp'
            }, 
            {
                title: 'Великобритания',
                img: './img/uk.jpg'
            }, 
            {
                title: 'Бразилия',
                img: './img/brazil.png'
            }, 
            {
                title: 'Ливан',
                img: './img/livan.jpg'
            }, 
            {
                title: 'Арабские Эмираты',
                img: './img/uae.png'
            }, 
            {
                title: 'Финляндия',
                img: './img/finland.jpg'
            }],
        voucherNominalsUSD: ['10$', '25$', '50$', '75$', '100$'],
        isPopular: true,
        imageLink: './img/playstation.png',
        id: 16
    },
    {
        type: 'Сервисы',
        title: 'Battle.net',
        subtitle: 'Для аккаунтов США и Европы. При регистрации нового аккаунта используйте почту с доменом gmail.com',
        addInfo: 'Официальный партнер',
        popupTypes: ['Ваучер'],
        isVoucher: true,
        accountPopup: false,
        accountPopupInfo: '',
        clientInfo: 'email',
        region: [ 
            {
                title: 'США',
                img: './img/usa.jpg'
            }, 
            {
                title: 'Европа',
                img: './img/europe.png'
            }],
        voucherNominalsUSD: ['20$', '50$'],
        voucherNominalsEUR: ['20€', '50€'],
        isPopular: true,
        imageLink: './img/battlenet.png',
        id: 17
    },
    {
        type: 'Сервисы',
        title: 'Xbox',
        subtitle: 'Для аккаунтов США или Турции. При регистрации нового аккаунта используйте почту с доменом gmail.com',
        addInfo: 'Официальный партнер',
        popupTypes: ['Ваучер'],
        isVoucher: true,
        accountPopup: false,
        accountPopupInfo: '',
        clientInfo: 'email',
        region: [ 
            {
                title: 'США',
                img: './img/usa.jpg'
            },
            {
                title: 'Турция',
                img: './img/turkey.webp'
            }
        ],
        voucherNominalsUSD: ['10$', '15$'],
        voucherNominalsTRY: ['Turkey Ultimate 1 Month'],
        isPopular: true,
        imageLink: './img/xbox.png',
        id: 18
    },
    {
        type: 'Сервисы',
        title: 'Airbnb',
        subtitle: 'Для аккаунтов США. При регистрации нового аккаунта используйте почту с доменом gmail.com',
        addInfo: 'Официальный партнер',
        popupTypes: ['Ваучер'],
        isVoucher: true,
        accountPopup: false,
        accountPopupInfo: '',
        clientInfo: 'email',
        region: ['США'],
        voucherNominalsUSD: ['25$', '50$', '100$'],
        isPopular: false,
        imageLink: './img/Airbnb.jpg',
        id: 19
    },
    {
        type: 'Сервисы',
        title: 'Amazon',
        subtitle: 'Для аккаунтов США. При регистрации нового аккаунта используйте почту с доменом gmail.com',
        addInfo: 'Официальный партнер',
        popupTypes: ['Ваучер'],
        isVoucher: true,
        accountPopup: false,
        accountPopupInfo: '',
        clientInfo: 'email',
        region: ['США'],
        voucherNominalsUSD: ['5$', '10$', '15$', '50$', '100$'],
        isPopular: false,
        imageLink: './img/Amazon.jpg',
        id: 20
    },
    {
        type: 'Сервисы',
        title: 'App Store',
        subtitle: 'Активировать ваучер можно только для аккаунта США или Турции.',
        addInfo: 'Официальный партнер',
        popupTypes: ['Ваучер'],
        isVoucher: true,
        accountPopup: false,
        accountPopupInfo: '',
        clientInfo: 'email',
        region: [ 
            {
                title: 'Россия',
                img: './img/russia.webp'
            }, 
            {
                title: 'США',
                img: './img/usa.jpg'
            }, 
            {
                title: 'Турция',
                img: './img/turkey.webp'
            }, 
            {
                title: 'Бельгия',
                img: './img/belgium.webp'
            }, 
            {
                title: 'Польша',
                img: './img/poland.png'
            },
            {
                title: 'Арабские Эмираты',
                img: './img/uae.png'
            }],
        voucherNominalsRUR: ['500 ₽', '1000 ₽'],
        voucherNominalsUSD: ['2$', '3$', '4$', '5$', '10$', '15$', '20$', '25$', '30$', '40$', '50$', '60$', '70$', '100$', '200$', '300$', '400$', '500$'],
        isPopular: false,
        imageLink: './img/App_Store.png',
        id: 21
    },
    {
        type: 'Сервисы',
        title: 'ChatGPT',
        subtitle: 'Для аккаунтов США. При регистрации нового аккаунта используйте почту с доменом gmail.com',
        imageLink: './img/ChatGPT.jpg',
        popupTypes: ['Ваучер'],
        isPopular: false,
        id: 22
    },
    {
        type: 'Сервисы',
        title: 'Ebay',
        subtitle: 'Для аккаунтов США. При регистрации нового аккаунта используйте почту с доменом gmail.com',
        imageLink: './img/ebay.jpg',
        popupTypes: ['Ваучер'],
        isPopular: false,
        id: 23
    },
    {
        type: 'Сервисы',
        title: 'Netflix',
        subtitle: 'Для аккаунтов Турции. При регистрации нового аккаунта используйте почту с доменом gmail.com',
        imageLink: './img/netflix.jpg',
        region: [ 
            {
                title: 'Турция',
                img: './img/turkey.webp'
            }, 
            {
                title: 'Европа',
                img: './img/europe.png'
            }, 
            {
                title: 'Великобритания',
                img: './img/uk.jpg'
            }, 
            {
                title: 'Саудовская Аравия',
                img: './img/saudi.webp'
            }, 
            {
                title: 'Польша',
                img: './img/poland.png'
            }, 
            {
                title: 'Арабские Эмираты',
                img: './img/uae.png'
            }, 
            {
                title: 'США',
                img: './img/usa.jpg'
            }],
        popupTypes: ['Ваучер'],
        isPopular: true,
        id: 24
    },
    {
        type: 'Сервисы',
        title: 'Nintendo eShop',
        subtitle: 'При регистрации нового аккаунта используйте почту с доменом gmail.com',
        imageLink: './img/nintendo.jpg',
        popupTypes: ['Ваучер'],
        isPopular: true,
        id: 25
    },
    {
        type: 'Сервисы',
        title: 'Spotify',
        subtitle: 'При регистрации нового аккаунта используйте почту с доменом gmail.com',
        imageLink: './img/spotify.jpg',
        popupTypes: ['Ваучер'],
        isPopular: false,
        id: 26
    },
    {
        type: 'Сервисы',
        title: 'TIDAL',
        subtitle: 'Для аккаунтов США. При регистрации нового аккаунта используйте почту с доменом gmail.com',
        imageLink: './img/tidal.jpg',
        popupTypes: ['Ваучер'],
        isPopular: false,
        id: 27
    },
    {
        type: 'Сервисы',
        title: 'Twitch',
        subtitle: 'Для аккаунтов США. При регистрации нового аккаунта используйте почту с доменом gmail.com',
        imageLink: './img/twitch.jpg',
        popupTypes: ['Ваучер'],
        isPopular: false,
        id: 28
    },
    {
        type: 'Программы',
        title: 'Adobe Creative Cloud',
        subtitle: 'Для аккаунтов США. При регистрации нового аккаунта используйте почту с доменом gmail.com',
        imageLink: './img/adobeCreativeCloud.jpg',
        popupTypes: ['Ваучер'],
        isPopular: false,
        id: 29
    },
    {
        type: 'Программы',
        title: 'Discord Nitro',
        subtitle: 'Для аккаунтов любого региона. При регистрации нового аккаунта использовать почту с доменом gmail.com',
        imageLink: './img/discord.jpg',
        popupTypes: ['Ваучер'],
        isPopular: false,
        id: 30
    },
    {
        type: 'Программы',
        title: 'Microsoft Windows',
        subtitle: 'Для аккаунтов РФ. При регистрации нового аккаунта использовать почту с доменом gmail.com',
        imageLink: './img/MSWindows.jpg',
        popupTypes: ['Ваучер'],
        isPopular: false,
        id: 31
    }
];

