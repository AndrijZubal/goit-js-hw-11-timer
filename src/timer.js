
// import refs from './refs.js';
// console.log(refs);
// let day = 'Jul 17, 2019';




// function myTimer(date) {

//     let targetDate = new Date(date);
//     // console.log(targetDate);

//     let carrentDate = Date.now();
//     // console.log(carrentDate);

//     let timeBetween =carrentDate - targetDate 
//     // console.log(timeBetween);
    
//     // function setTime(timeBetween) {
//     let days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
//     console.log("days",days);

//     let hours = Math.floor((timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         console.log("hours",hours);

//     let mins = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60));
// console.log("mins",mins);

//     let secs = Math.floor((timeBetween % (1000 * 60)) / 1000);
//     console.log("secs", secs);
    

//     refs.days.textContent = days
//     refs.hours.textContent = hours
//     refs.mins.textContent = mins
//     refs.secs.textContent = secs
// }
//     let interval = setInterval(() => { myTimer(day) }, 1000);
   







// // Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

// // new CountdownTimer({
// //   selector: '#timer-1',
// //   targetDate: new Date('Jul 17, 2019'),
// // });
