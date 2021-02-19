const $slider = document.querySelector('.slider');
const $output = document.querySelector('#value');
const $input = document.querySelector('#weight');

sliderHandler = () => {
    const value = $slider.value;
    const percent = value * 100 / 250;
    const color = `linear-gradient(90deg, #004AD7 ${percent}%, rgb(214, 214, 214) ${percent}%)`;
    $slider.style.background = color;
}

$output.innerHTML = $slider.value;

$slider.addEventListener('input', (e) => {
    $output.innerHTML = $slider.value;
    $input.value = $slider.value;
})

$slider.addEventListener('mousemove', () => {
    sliderHandler();
    
})

$slider.addEventListener('mouseup', () => {
    $input.value = $slider.value;
})

$input.addEventListener('input', () => {
    $slider.value = $input.value;
    $output.innerHTML = $slider.value;
    sliderHandler();

})

