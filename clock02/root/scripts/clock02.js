//When I tried to use the following functions in the order we used for the analog clock example, I could not get the code to run. I looked on Flexiple, Geeksforgeeks, and w3 Schools and arranged the code order like so. This fixed whatever issue there was.
//This sets the time interval to 1s, sets pace for the clock display
myInterval = setInterval(clockFace, 1000);

function clockFace() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let morn = "AM";   
//Says that if the hour is equal to 0, to show the has is and add "AM" after
    if (hour == 0) {
        hour = 12;
        morn = "AM";
    }
//Says that if the hour is greater than 12, to subtract 12 from that value and to add PM after    
    if (hour > 12) {
        hour -= 12;
        morn = "PM";
    }
//If any of these values are less than 10, a 0 will be added in front of the digit
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
//Variable that populates with the time  
    let showTime = hour + ":" 
            + min + ":" + sec + morn;
//Tells the document to show the time inside the element with the ID of "clockFace"  
    document.getElementById("clockFace")
            .innerHTML = showTime;
}
showTime();

