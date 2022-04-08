const gallery = document.querySelector('.gallery');
const nextButton = document.querySelector('.action-panel__button_type_next');
const prevButton = document.querySelector('.action-panel__button_type_prev');
const galleryImgTemplate = document.querySelector('#gallery-img-template').content;
const greenRibbonImgTemplate = document.querySelector('#green-ribbon-img-template').content;
const greenRibbon = document.querySelector('.green-ribbon');
const cardItemTemplate = document.querySelector('#card-item-template').content;
const images = ['./src/images/Шоссе1.png', './src/images/Шоссе2.png', './src/images/Шоссе3.png', './src/images/Шоссе4.png'];
const title = document.querySelector('.description__title');
const subtitle = document.querySelector('.description__subtitle');
const grevSubtitleText = 'Грэвел похож на шоссейный велосипед,но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.'
const ttSubtitleText = 'ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.'
const hidewaySubtitleText = 'На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.'
const select = document.querySelector('.bicycles__select');
const menuLinks = document.querySelectorAll('.menu__link');
let lastCurrentImgNumber = 2;
let step = 1;

const cards = {
    hideway: [
        {
            name: 'Cervelo Caledonia-5',
            imgSrc: './src/images/Cervelo-Caledonia-5.png',
            imgAlt: 'Велосипед марки Cervelo Caledonia-5',
            link: 'https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN'
        },
        {
            name: 'Cannondale Systemsix Himod',
            imgSrc: './src/images/Cannondale-Systemsix-Himod.png',
            imgAlt: 'Велосипед марки Cannondale Systemsix Himod',
            link: 'https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J'
        },
        {
            name: 'Trek Domane SL-7',
            imgSrc: './src/images/Trek-Domane-SL-7.png',
            imgAlt: 'Велосипед марки Trek Domane SL-7',
            link: 'https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF'
        }
    ],
    grevel: [
        {
            name: 'Cervelo Aspero GRX 810',
            imgSrc: './src/images/Cervelo-Aspero-GRX-810.png',
            imgAlt: 'Велосипед марки Cervelo Aspero GRX 810',
            link: 'https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE'
        },
        {
            name: 'Specialized S-Works Diverge',
            imgSrc: './src/images/Specialized-S-Works-Diverge.png',
            imgAlt: 'Велосипед марки Specialized S-Works Diverge',
            link: 'https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9'
        },
        {
            name: 'Cannondale Topstone Lefty 3',
            imgSrc: './src/images/Cannondale-Topstone-Lefty3.png',
            imgAlt: 'Велосипед марки Cannondale Topstone Lefty 3',
            link: 'https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8'
        }
    ],
    tt: [
        {
            name: 'Specialized S-Works Shiv',
            imgSrc: './src/images/Specialized-S-Works-Shiv.png',
            imgAlt: 'Велосипед марки Specialized S-Works Shiv',
            link: 'https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9'
        },
        {
            name: 'BMC Timemachine 01 ONE',
            imgSrc: './src/images/BMC-Timemachine01-ONE.png',
            imgAlt: 'Велосипед марки BMC Timemachine 01 ONE',
            link: 'https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835'
        },
        {
            name: 'Cervelo P-Series',
            imgSrc: './src/images/Cervelo-P-Series.png',
            imgAlt: 'Велосипед марки Cervelo P-Series',
            link: 'https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q'
        }
    ],
};
const cardsContainer = document.querySelector('.cards');
const menuItems = document.querySelectorAll('.bicycles__menu-item');
const themeControlSlider = document.querySelectorAll('.theme-control__slider');
const ellipsisPoints = document.querySelectorAll('.ellipsis__point');
const formButton = document.querySelector('.form__button');
const formInput = document.querySelector('.form__input');
const popup = document.querySelector('.popup');
const burgerMenu = document.querySelector('.burger');
const popupButton = document.querySelector('.popup__button')
let themeDark = false;

const createGalleryImg = (src) => {
    const newImg = galleryImgTemplate.querySelector('.gallery__img').cloneNode(true);
    newImg.src = src;
    return newImg;
}

const createGreenRibbonImg = (src) => {
    const newImg = greenRibbonImgTemplate.querySelector('#green-ribbon-img').cloneNode(true);
    newImg.style.backgroundImage = `url(${src})`;
    return newImg;
}

const createCardItem = (item) => {
    const cardItem = cardItemTemplate.querySelector('.card-item').cloneNode(true);
    const img = cardItem.querySelector('.card-item__img');
    const title = cardItem.querySelector('.card-item__title');
    img.src = item.imgSrc;
    img.alt = item.imgAlt;
    title.textContent = item.name;
    cardItem.href = item.link;
    if (themeDark) {
        link.classList.add('card-item__title_theme_dark')
    }
    return cardItem;
}

const handleNextButtonClick = () => {
    step++;
    lastCurrentImgNumber++;
    if (images[lastCurrentImgNumber - 1]) {
        gallery.querySelectorAll('.gallery__img')[0].remove();
        gallery.append(createGalleryImg(images[lastCurrentImgNumber - 1]));
    }
    if (step === 2) {
        title.textContent = 'Грэвел';
        subtitle.textContent = grevSubtitleText;
        greenRibbon.innerHTML = '';
        greenRibbon.append(createGreenRibbonImg("./src/images/graven-linear.svg"));

    }
    if (step === 3) {
        title.textContent = 'TT';
        subtitle.textContent = ttSubtitleText;
        greenRibbon.innerHTML = '';
        greenRibbon.append(createGreenRibbonImg("./src/images/tt-linear.svg"))
    }


}

const handlePrevButtonClick = () => {
    step--;
    lastCurrentImgNumber--;
    const imgs = gallery.querySelectorAll('.gallery__img');
    if (images[lastCurrentImgNumber - 2]) {
        imgs[imgs.length - 1].remove()
        gallery.prepend(createGalleryImg(images[lastCurrentImgNumber - 2]));
    }

    if (step === 2) {
        title.textContent = 'Грэвел';
        subtitle.textContent = grevSubtitleText;
        greenRibbon.innerHTML = '';
        greenRibbon.append(createGreenRibbonImg('./src/images/graven-linear.svg'));
    }
    if (step === 1) {
        title.textContent = 'Шоссе';
        subtitle.textContent = hidewaySubtitleText;
        greenRibbon.innerHTML = '';
        greenRibbon.append(createGreenRibbonImg('./src/images/highway-linear.svg'));
    }
};

const setActiveThemeForMenuItem = (item) => {
   item.classList.add('bicycles__menu-item_active');
}

const handleMenuItemClick = (event) => {
    event.preventDefault();
    const target = event.target;
    menuItems.forEach((item) => {
        item.classList.remove('bicycles__menu-item_active');
    });

    setActiveThemeForMenuItem(target);
    cardsContainer.innerHTML = '';
    if (target.textContent === 'Шоссе' || target.value === 'hideway') {
        cards.hideway.forEach((item) => {
            cardsContainer.append(createCardItem(item))
        })
    }
    if (target.textContent === 'Грэвел' || target.value === 'grevel') {
        cards.grevel.forEach((item) => {
            cardsContainer.append(createCardItem(item))
        })
    }

    if (target.textContent === 'TT' || target.value === 'tt') {
        cards.tt.forEach((item) => {
            cardsContainer.append(createCardItem(item))
        })
    }
};

const handleThemeControlSliderClick = ({target}) => {
    themeDark = !themeDark;
    const root = document.querySelector('.root');
    const themeControlImg = target.querySelector('.theme-control__img');
    const sunIcon = target.previousSibling.previousElementSibling;
    const moonIcon = target.nextSibling.nextSibling;
    const arr = [root,
        themeControlImg
    ];
    arr.forEach((item) => {
        item.classList.toggle(`${item.classList[0]}_theme_dark`)
    })
    if (themeDark) {
        sunIcon.src = './src/images/sunDark.svg';
        moonIcon.src = './src/images/moonDark.svg';
    }
    else {
        sunIcon.src = './src/images/sun.svg';
        moonIcon.src = './src/images/moon.svg';
    }

}

const handleEllipsisPointClick = ({ target }) => {
    ellipsisPoints.forEach((el) => el.classList.remove('ellipsis__point_active'));
    target.classList.add('ellipsis__point_active');
    cardsContainer.innerHTML = ''
    cardsContainer.append(createCardItem(cards[select.value][Number(target.getAttribute('index'))]))
};
const handleFormButtonClick = (event) => {
    event.preventDefault();
    formInput.value = 'Круто!';
    formButton.style.display = 'none'
};

const handleBurgerMenuClick = () => {
    popup.classList.add('popup_open')
}

const handlePopupButtonClick = () => {
    popup.classList.remove('popup_open')
}

nextButton.addEventListener('click', handleNextButtonClick);
prevButton.addEventListener('click', handlePrevButtonClick);
menuItems.forEach((item) => {
    item.addEventListener('click', handleMenuItemClick)
});

themeControlSlider.forEach((item) => {
    item.addEventListener('click', handleThemeControlSliderClick);
})
select.addEventListener('change', handleMenuItemClick);


window.addEventListener('resize', ({ currentTarget }) => {
    const cardItems = document.querySelectorAll('.card-item');
    const isShowHideway = cardItems[0].lastElementChild.textContent === cards.hideway[0].name;
    const isShowGrevel = cardItems[0].lastElementChild.textContent === cards.grevel[0].name;
    const isShowTt = cardItems[0].lastElementChild.textContent === cards.tt[0].name;
    if (currentTarget.innerWidth > 550) {
        if (isShowHideway) {
            setActiveThemeForMenuItem(menuItems[0])
        }
        if (isShowGrevel) {
            setActiveThemeForMenuItem(menuItems[1])
        }

        if (isShowTt) {
            setActiveThemeForMenuItem(menuItems[2])
        }
    }
    else {
        const selectOptions = document.querySelectorAll('.bicycles__option')
        if (isShowHideway) {
            selectOptions[0].selected = true;
        }

        if (isShowGrevel) {
            selectOptions[1].selected = true;
        }

        if (isShowTt) {
            selectOptions[2].selected = true;
        }

    }
});

ellipsisPoints.forEach((item) => {
    item.addEventListener('click', handleEllipsisPointClick)
});

formInput.onfocus = (event) => {
    formButton.style.display = 'block';
}
formInput.onblur = () => {
    if(!formInput.value.length){
        formButton.style.display = 'none';
    }
}
formButton.addEventListener('click', handleFormButtonClick);

burgerMenu.addEventListener('click', handleBurgerMenuClick);
popupButton.addEventListener('click', handlePopupButtonClick);
menuLinks.forEach((item) => {
    item.addEventListener('click', handlePopupButtonClick);
})