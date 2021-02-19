const $result = document.querySelector('#sum');
let weight, width, height;

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}


function calcTotal() {
    let number = 250 / 2;
    let sum;
    if (!weight || !width || !height) {
        $result.textContent = '';
        return;
    }
    if (weight > number) {
        sum = width * 1000 + height * 1200 + 3500;
        $result.textContent = numberWithSpaces(sum);
        return;
    }
    sum = width * 1000 + height * 1200;
    $result.textContent = numberWithSpaces(sum);
    
}

calcTotal();

function getInformation(selector) {
    const $input = document.querySelector(selector);

    $input.addEventListener('input', () => {
        switch($input.getAttribute('id')) {
            case 'weight':
                weight = +$input.value;
                break;
            case 'width':
                width = +$input.value;
                break;
            case 'height':
                height = +$input.value;
                break;
        }
        if (width && height && weight) {
            const $figure = document.querySelector('.figure__rect');
            const $figureWeight = document.querySelector('.figure__num');
            $figureWeight.innerHTML = `${weight} кг`;
            if (width > height) {
                $figure.style.width = 70 + 'px';
                $figure.style.height = 40 + 'px';
            } else if (width === height) {
                $figure.style.width = 40 + 'px';
                $figure.style.height = 40 + 'px';
            } else if (width < height) {
                $figure.style.width = 40 + 'px';
                $figure.style.height = 70 + 'px';
            }
        }
        calcTotal();
    });
    
}

getInformation('#weight');
getInformation('#width');
getInformation('#height');




