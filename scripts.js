// Reval components
ScrollReveal().reveal('.containerPhotoPresentation', {duration: 1200,distance: '80px',scale: 0.85});
ScrollReveal().reveal('.title', {duration: 1200,distance: '50px',delay:200});

ScrollReveal().reveal('.containerMensaje', {duration: 1200,distance: '40px',delay:300});

ScrollReveal().reveal('.containerParents', {duration: 1200,distance: '80px',delay:500});
ScrollReveal().reveal('.containerParents__name', {duration: 1200,distance: '50px',delay:500});
ScrollReveal().reveal('.containerParents__party', {duration: 1200,distance: '50px',delay:500});

ScrollReveal().reveal('.containerTimer__title', {duration: 1200,distance: '80px',delay:400});
ScrollReveal().reveal('.containerTimer__background', {duration: 1200,distance: '80px',delay:400});
ScrollReveal().reveal('.containerTimer__number-days', {duration: 1200,distance: '50px',delay:100});
ScrollReveal().reveal('.containerTimer__number-hours', {duration: 1200,distance: '50px',delay:200});
ScrollReveal().reveal('.containerTimer__number-minutes', {duration: 1200,distance: '50px',delay:300});
ScrollReveal().reveal('.containerTimer__number-seconds', {duration: 1200,distance: '50px',delay:400});

ScrollReveal().reveal('.containerWhereWhen', {duration: 1200,distance: '80px',delay:250});
ScrollReveal().reveal('.containerChurch__containerImage', {duration: 1200,distance: '50px',delay:300});
ScrollReveal().reveal('.containerChurch__containerText', {duration: 1200,distance: '80px',delay:400});

ScrollReveal().reveal('.containerAlbum__title', {duration: 1200,distance: '80px',delay:400});
ScrollReveal().reveal('.containerAlbum__img', {duration: 1200,distance: '50px',delay:400});

ScrollReveal().reveal('.containerFooter', {duration: 1200,distance: '80px',delay:100});

//cuenta regresiva
const DATE_TARGET = new Date('07/09/2022 03:30 PM');
// DOM for render
const SPAN_DAYS = document.querySelector('h2#days');
const SPAN_HOURS = document.querySelector('h2#hours');
const SPAN_MINUTES = document.querySelector('h2#minutes');
const SPAN_SECONDS = document.querySelector('h2#seconds');
// Milliseconds for the calculations
const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

//===
// FUNCTIONS
//===

/**
 * Method that updates the countdown and the sample
 */
function updateCountdown() {
    // Calcs
    const NOW = new Date()
    const DURATION = DATE_TARGET - NOW;
    const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
    const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
    const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
    // Thanks Pablo Monteserín (https://pablomonteserin.com/cuenta-regresiva/)

    // Render
    SPAN_DAYS.textContent = REMAINING_DAYS;
    SPAN_HOURS.textContent = REMAINING_HOURS;
    SPAN_MINUTES.textContent = REMAINING_MINUTES;
    SPAN_SECONDS.textContent = REMAINING_SECONDS;
}

//===
// INIT
//===
updateCountdown();
// Refresh every second
setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);

//audio
