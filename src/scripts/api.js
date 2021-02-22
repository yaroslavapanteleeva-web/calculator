fetch('https://api.hh.ru/areas/1255')
    .then(response => {
        return response.json();
    }).then(data => {
        const arrCity = data.areas;
        const $selectStart = document.querySelector('#city-start');
        const $selectEnd = document.querySelector('#city-end');
        arrCity.map(item => {
            const $option = document.createElement('option');
            $option.classList.add('field__option');
            $option.innerHTML = item.name;
            $option.value = item.name;
            $selectStart.append($option);
           
        });
        arrCity.map(item => {
            const $option = document.createElement('option');
            $option.classList.add('field__option');
            $option.innerHTML = item.name;
            $option.value = item.name;
            $selectEnd.appendChild($option);
        });
    }).catch(err => {
	    console.error(err);
    });


