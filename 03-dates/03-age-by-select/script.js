/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('run').addEventListener('click',age)
    function age(){
        const currentDate = new Date()
        let day = document.getElementById('dob-day').value
        let month = document.getElementById('dob-month').value
        let year = document.getElementById('dob-year').value
        let dateOfbirth = new Date(year, month, day);

        let ageDiff = currentDate.getTime() - dateOfbirth.getTime();
        let ageDate = new Date(ageDiff);
        let age = Math.abs(ageDate.getUTCFullYear() - 1970);

        alert("Your age is: " + age);
    }

})();
