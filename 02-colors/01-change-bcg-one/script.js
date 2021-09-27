/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var red=document.getElementById("red").addEventListener("click", color);
    var green=document.getElementById("green").addEventListener("click", color);
    var yellow=document.getElementById("yellow").addEventListener("click", color);
    var blue=document.getElementById("blue").addEventListener("click", color);
    function color(){
        var colors = this.id
        document.body.style.backgroundColor=colors
    }
})();
