window.onload = () => {

        const month = document.querySelector("#month");
        const date = document.querySelector("#date");
        const days = document.querySelector("#days");


        const currentMonth = new Date().getMonth();
        console.log("currentMonth", + currentMonth); // 6 // july

        // to know day of this month on the 1st date
        const currentYear = new Date().getFullYear();
        const firstDay = new Date(currentYear, currentMonth, 1).getDay() -1 ;
        console.log("first day", + firstDay); // first day - 5 // thuesday

        const lastDay = new Date(new Date().getFullYear(), currentMonth + 1, 0).getDate();
        console.log("last day", + lastDay); // last day - 31


        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"];

        month.innerText = months[currentMonth];
        date.innerText = new Date().toDateString();


        for(let i = 1; i <= lastDay; i++){
                days.innerHTML += `<div class="empty"></div>`
        }
        for(let i = 1; i <= lastDay; i++){
                if(i === new Date().getDate()){
                        days.innerHTML += `<div class="today">${i}</div>`
                }else{
                        days.innerHTML += `<div class="date">${i}</div>`
                }
        }
        // days.innerHTML = result;
}



// console.log(new Date()); // Mon Jul 03 2023 20:02:10 GMT+0530 (India Standard Time)
// console.log(new Date().getDay()); // 1 // monday // start from zero
// console.log(new Date().getMonth()); // 6 // july // start from zero
// console.log(new Date().getFullYear());  // 2023
// console.log(new Date(2023, 6, 1));  // Sat Jul 01 2023 00:00:00 GMT+0530 (India Standard Time)
// console.log(new Date(2023, 7, 0));  // Mon Jul 31 2023 00:00:00 GMT+0530 (India Standard Time)