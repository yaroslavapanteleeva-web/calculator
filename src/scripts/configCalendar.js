import {Calendar, Popup, i18n} from './calendar';

const ru = {
    // short names of months
    monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", 
                 "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    // full names of months
    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    // short names of days
    daysShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    // full names of days
    days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", 
                "Пятница", "Суббота"]
};


i18n.setLocale('calendar', ru);
const dateX = new Date();


const currentDate = dateX.getDate();



const arr = [];

const calendar = new Calendar(null, {
  value: new Date(),
  dateFormat: "%d/%m/%y",
  weekStart:"monday",
  width: '300',
  timePicker: true,
  timeFormat: 24,
  css: "dhx_widget--bordered",
  disabledDates: function(date) {
    
    arr.push(date.getDate());
    
  
    const disabled = {}
    for (let i = 0; i < arr.length; i++) {
      if (i < currentDate + 2) {
        disabled[arr[i]] = true;
      } else{
        disabled[arr[i]] = false;
       }
    }
    return disabled[date.getDate()];
}
});
const popup = new Popup();
popup.attach(calendar);

const dateInput = document.getElementById("date");
dateInput.addEventListener("click", function() {
  popup.show(dateInput);
});

calendar.events.on("change", function() {
    dateInput.value = (calendar.getValue(true)).toLocaleString();
    popup.hide();
});

