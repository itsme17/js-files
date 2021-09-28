/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let today = new Date();
    let day = today.getDay();
    let date = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let hour = today.getHours();
    let min = today.getMinutes();

    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let fullTime = weekdays[day] + " " + date + " " + monthName[month] + " " + year + ", " + hour + "h" + min;
    document.getElementById("target").innerHTML = fullTime;

})();
