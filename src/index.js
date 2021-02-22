import IMask from 'imask';

import './scripts/configCalendar';

import './scss/style.scss';

import './scripts/api';
import './scripts/slider';
import './scripts/calc';
import './scripts/modal';


const phoneMask = IMask(
  document.getElementById('tel'), {
    mask: '+{7}-000-000-00-00'
  }
);

