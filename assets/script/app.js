import { getElement, listen } from './utils.js';


const backToTopBtn = getElement('backToTop');

listen('click', backToTopBtn, () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
