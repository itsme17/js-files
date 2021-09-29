/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



    const button = document.getElementById("run");

    button.addEventListener('click', getMonths);

        function getMonths() {
            var year = document.getElementById("year").value;
            let d = new Date();
            let dates = [];

            for (let month = 0; month < 12; month++) {

                d.setFullYear(year, month, 13);

                if (d.getDay() === 5) {
                    dates.push(monthName[month]);
                }
            }
            alert(dates);
        } 



})();
