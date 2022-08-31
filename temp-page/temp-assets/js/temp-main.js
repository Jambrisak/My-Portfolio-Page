let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
//Format: Date(year, month, day, hour, minute)
//Year is counted from 0 to 11
let endDate = new Date(2022, 11, 2, 16, 30);
//Output value in milliseconds
let endTime = endDate.getTime();

//Function to format number if its in single digit
function countdown(){
    let todayDate = new Date();
    //Output value in milliseconds
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime;

    //60 sec => 1000 milliseconds
    let oneMin = 60 * 1000;
    //1hr => 60 minutes
    let oneHr = 60 * oneMin;
    //1 day => 24 hours
    let oneDay = 24 * oneHr;

    let addZeroes = num => num < 10 ? '0${num}' : num;

    //if end date is before todays date
    if(endTime < todayTime){
        clearInterval(i);
        document.querySelector(".countdown").
        innerHtml = '<h1>Countdown has expired!</h1>';
    }
    //IF end date is not before todays date
    else{
        //Calculating remaining days, hrs, mins, secs
        let daysLeft = Math.floor(remainingTime / oneDay);
        let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);

        dayBox.textContent = addZeroes(daysLeft);
        hrBox.textContent = addZeroes(hrsLeft);
    }
}
let i = setInterval(countdown,1000);
countdown();