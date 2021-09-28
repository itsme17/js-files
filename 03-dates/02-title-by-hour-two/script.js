/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    const d = new Date();
    let hour = d.getHours()
    let minute = d.getMinutes()

    if (hour>=18 ){
        document.getElementById("target").innerHTML = "good evening"
    }
    else if(hour>17 && hour<18 ){
        if(minute<30){
            document.getElementById("target").innerHTML = "hello"
        }
        else{
            document.getElementById("target").innerHTML = "good evening"
        }
    }
    else{
        document.getElementById("target").innerHTML = "hello"
    }

})();
