/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    function question(){
        var age = prompt('what is your age? : ')
        var gender = prompt('what is your gender? : ')
        var town = prompt('where u from? : ')
        var answer=confirm('is this info correct? '+"\n"+'age : '+age +"\n"+
            'gender : '+gender+"\n"+
            'town : '+town)
        if (answer != true){
            question()
        }
    }
    question()


})();
