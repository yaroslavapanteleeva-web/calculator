const $cityStart = document.querySelector('#city-start');
const $cityEnd = document.querySelector('#city-end');
const $username = document.querySelector('#username');
const $surname = document.querySelector('#surname');
const $tel = document.querySelector('#tel');
const $comment = document.querySelector('#comment');
const $weight = document.querySelector('#weight');
const $height = document.querySelector('#height');
const $width = document.querySelector('#width');
const $date = document.querySelector('#date');
const $sum = document.querySelector('#sum');

const $output = document.querySelector('#value');
const $figure = document.querySelector('.figure__rect');
const $figureWeight = document.querySelector('.figure__num');
const $slider = document.querySelector('.slider');


const form = document.querySelector('#form');

const $openModalBtn = document.querySelector('[data-open="modal"]'),
    $closeModalBtn = document.querySelector('[data-close="modal"]'),
    $openModalMiniBtn = document.querySelector('[data-open="modal-mini"]'),
    $closeModalMiniBtn = document.querySelector('[data-close="modal-mini"]');

const $modalOverlay = document.querySelector('.overlay-modal'),
    $modal = document.querySelector('.modal'),
    $modalMini = document.querySelector('.window-thanks');

function open(selector) {
    return selector.classList.add('open');
}

function close(selector) {
    return selector.classList.remove('open');
}

function selectorContent(selector, content) {
    return document.querySelector(selector).textContent = content;
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityStart = $cityStart.value;
    const cityEnd = $cityEnd.value;
    const username = $username.value.replace(/\s/g, '');
    const surname = $surname.value.replace(/\s/g, '');
    const tel = $tel.value;
    const comment = $comment.value;
    const weight = $weight.value;
    const height =  $height.value;
    const width = $width.value;
    const date =  $date.value.replace('T', ' ');
    const sum = $sum.textContent;
    selectorContent('[data-modal="city-start"]', cityStart);
    selectorContent('[data-modal="city-end"]', cityEnd);
    selectorContent('[data-modal="username"]', username);
    selectorContent('[data-modal="surname"]', surname);
    selectorContent('[data-modal="tel"]', tel);
    selectorContent('[data-modal="comment"]', comment);
    selectorContent('[data-modal="weight"]', weight);
    selectorContent('[data-modal="width"]', height);
    selectorContent('[data-modal="height"]', width);
    selectorContent('[data-modal="date"]', date);
    selectorContent('[data-modal="sum"]', sum);
    
    
    if (cityStart && cityEnd && username && surname && tel && weight && height && width && date) {
        open($modalOverlay);
        open($modal);
        window.scrollTo({
            top: 300
        });
    }
})

$closeModalBtn.addEventListener('click', () => {
    close($modalOverlay);
    close($modal);
})

$openModalMiniBtn.addEventListener('click', () => {
    $cityStart.value = '';
    $cityEnd.value = '';
    $username.value = '';
    $surname.value = '';
    $tel.value = '';
    $comment.value = '';
    $weight.value = '';
    $height.value = '';
    $width.value = '';
    $date.value = '';
    $sum.textContent = '';
    $figureWeight.innerHTML = '';
    $figure.style.width = '';
    $figure.style.height = '';
    $output.textContent = '';
    $slider.value = $weight.value;
    $slider.style.background = '';
    
    close($modal);
    open($modalMini);
    window.scrollTo({
        top: 300
    });
})

$closeModalMiniBtn.addEventListener('click', () => {
    location.reload();
    close($modalOverlay);
    close($modalMini);
})



