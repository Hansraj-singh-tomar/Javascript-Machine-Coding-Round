window.onload = () => {
    document.querySelector("#calculate").onclick = calculate;
    document.querySelector("#reset").onclick = resett;
}

function calculate() {
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;
    console.log("date" + date);  // 2023-07-04
    console.log(typeof date); // string
    console.log("time" + time); // 18:08
    console.log(typeof time); // string

    const stop = document.querySelector("#stop");

    const endTime = new Date(date + " " + time);
    console.log("end time is", + endTime);  // 1688474280000

    const interval = setInterval(() => calculateTime(endTime), 1000);

    stop.addEventListener('click', () => {
        clearInterval(interval);
    })
}

function calculateTime(endTime){
    const currentTime = new Date();
    console.log("current time" + currentTime); // Mon Jul 03 2023 18:08:59 GMT+0530 (India Standard Time)

    const days = document.querySelector("#clock-days");
    const hours = document.querySelector("#clock-hours");
    const minutes = document.querySelector("#clock-minutes");
    const seconds = document.querySelector("#clock-seconds");

    if(endTime > currentTime){
        const timeLeft = (endTime - currentTime) / 1000;
        console.log("time left" + timeLeft); // 86340.626

        days.innerText = Math.floor(timeLeft / (24 * 60 * 60));
        hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
        minutes.innerText = Math.floor((timeLeft / 60) % 60);
        seconds.innerText = Math.floor(timeLeft % 60);
    } else {
        days.innerText = 0
        hours.innerText = 0
        minutes.innerText = 0
        seconds.innerText = 0
    }
}

function resett() {
   document.querySelector("#clock-days").innerText = 0; 
   document.querySelector("#clock-hours").innerText = 0; 
   document.querySelector("#clock-seconds").innerText = 0; 
   document.querySelector("#clock-minutes").innerText = 0; 
}