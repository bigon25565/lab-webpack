// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


import { DateTime } from 'luxon';

	setInterval(() => {
	hh.textContent = DateTime
	.local()
	.setLocale('ru')
	.toFormat('dd.LL.y HH:mm:ss');
}, 1000);