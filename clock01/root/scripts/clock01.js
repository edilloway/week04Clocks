//console.log('I am loaded');

const hourHand = document.querySelector('#hour');
const minuteHand = document.querySelector('#minute');
const secondHand = document.querySelector('#second');

//console.log(hourHand);
//console.log(minuteHand);
//console.log(secondHand);  

        let date = new Date();
        //console.log(date.getHours());

        let hr = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        //console.log('Hour: ' + hr + ' Minute: ' + min + ' Seconds:        ' + sec);

        // SECONDS
        let secPosn = sec * 360/60;
        //console.log(secPosn);

        // MINUTES
        let minPosn = (min * 360/60) + (sec * (360/60)/60);
        //console.log(minPosn);

        // HOURS
        let hrPosn = (hr * 360/12) + (min * (360/60)/12);
        //console.log(hrPosn);

function runClock() {
        secPosn = secPosn + 6;
        minPosn = minPosn + (1/10);
        hrPosn = hrPosn + (1/120);

        hourHand.style.transform = 'rotate(' + hrPosn + 'deg)';
        minuteHand.style.transform = 'rotate(' + minPosn + 'deg)';
        secondHand.style.transform = 'rotate(' + secPosn + 'deg)'; 
}

let myInterval = setInterval(runClock, 1000);


