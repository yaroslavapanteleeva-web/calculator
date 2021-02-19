const username = document.querySelector('#username');
const surname = document.querySelector('#surname');
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const width = document.querySelector('#width');

const form = document.querySelector('#form');

const $openModalBtn = document.querySelector('[data-open="modal"]'),
    $closeModalBtn = document.querySelector('[data-close="modal"]'),
    $openModalMiniBtn = document.querySelector('[data-open="modal-mini"]'),
    $closeModalMiniBtn = document.querySelector('[data-close="modal-mini"]');

const $modalOverlay = document.querySelector('.overlay-modal'),
    $modal = document.querySelector('.modal'),
    $modalMini = document.querySelector('.window-thanks');

/* function checkInputs() {
    const usernameValue = username.value.trim();
    const surnameValue = surname.value.trim();

    const weightValue = weight.value.trim();
    const heightValue = height.value.trim();
    const widthValue = width.value.trim();

    if (usernameValue === '') {
        setErrorFor(username);
    } else {
        setSuccessFor(username);
    }
    if (surnameValue === '') {
        setErrorFor(surname);
    } else {
        setSuccessFor(surname);
    }
    if (weightValue === '') {
        setErrorFor(weight);
    } else {
        setSuccessFor(weight);
    }
    if (heightValue === '') {
        setErrorFor(height);
    } else {
        setSuccessFor(height);
    }
    if (widthValue === '') {
        setErrorFor(width);
    } else {
        setSuccessFor(width);
    }
    if (usernameValue && surnameValue && weightValue && heightValue && widthValue) {
        open($modalOverlay);
        open($modal);
    }

} */

/* function setErrorFor(input) {
    const field = input.parentElement;
    field.classList.remove('success');
    field.classList.add('error');
}

function setSuccessFor(input) {
    const field = input.parentElement;
    field.classList.remove('error');
    field.classList.add('success');
} */

function open(selector) {
    return selector.classList.add('open');
}

function close(selector) {
    return selector.classList.remove('open');
}

$openModalBtn.addEventListener('click', () => {
    /* e.preventDefault */
    const usernameValue = username.value.trim();
    const surnameValue = surname.value.trim();

    const weightValue = weight.value.trim();
    const heightValue = height.value.trim();
    const widthValue = width.value.trim();

    if (usernameValue && surnameValue && weightValue && heightValue && widthValue) {
        open($modalOverlay);
        open($modal);
    }
    
})

$closeModalBtn.addEventListener('click', () => {
    close($modalOverlay);
    close($modal);
})

$openModalMiniBtn.addEventListener('click', () => {
    $modal.classList.remove('open');
    $modalMini.classList.add('open');
})

$closeModalMiniBtn.addEventListener('click', () => {
    close($modalOverlay);
    close($modalMini);
})



