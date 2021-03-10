import Pikaday from 'pikaday';
import 'moment';
import 'pikaday/scss/pikaday.scss';

const now = new Date();
const disabledDay = now.getDate() + 3;
const disabledMonth = now.getMonth();
const disabledYear = now.getFullYear();

const picker = new Pikaday({
    field: document.querySelector('#date'),
    format: 'DD/MM/YY',
    firstDay: 1,
    minDate: new Date(disabledYear, disabledMonth, disabledDay),
    i18n: {
        previousMonth : 'Предыдущий месяц',
        nextMonth     : 'Следующий месяц',
        months        : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        weekdays      : ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
        weekdaysShort : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб']
    },
});


