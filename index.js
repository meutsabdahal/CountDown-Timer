const dateForm = document.getElementById('date-form');
const countdownBox = document.getElementById('countdown-box');

dateForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const dateInput = document.getElementById('date-input');
    const timeInput = document.getElementById('time-input');
    const eventDate = Date.parse(dateInput.value + ' ' + timeInput.value)

    console.log(eventDate);

    window.eventCountDown && clearInterval(window.eventCountDown);

    const eventCountDown = setInterval(() => {
        window.eventCountDown = eventCountDown;
        const now = new Date().getTime();

        const daysDivider = 1000 * 60 * 60 * 24;
        const hoursDivider = 1000 * 60 * 60;
        const minutesDivider = 1000 * 60;
        const secondsDivider = 1000;

        const day = Math.floor(eventDate / daysDivider - now / daysDivider);
        const hour = Math.floor(eventDate / hoursDivider - now / hoursDivider % 24);
        const minute = Math.floor(eventDate / minutesDivider - now / minutesDivider % 60);
        const second = Math.floor(eventDate / secondsDivider - now / secondsDivider % 60);

        const diff = eventDate - now;
        if (diff > 0) {
            countdownBox.innerHTML = day + ' days, ' + hour + ' hours, '+ minute + 'minutes, ' + second + 'seconds';
        }

        else{
            countdownBox.innerHTML = '<h4>CountDown Completed</h4>'
        }
    }, 1000);


});