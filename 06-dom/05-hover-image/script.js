/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var originalState = document.querySelector('.material figure img').getAttribute('src');
    var onHover = document.querySelector('.material figure img').getAttribute('data-hover');
    document.querySelector('.material figure img').addEventListener('mouseover', function(event) {
        document.querySelector('.material figure img').setAttribute('src', onHover)
    });
    document.querySelector('.material figure img').addEventListener('mouseleave', function(event) {
        document.querySelector('.material figure img').setAttribute('src', originalState)
    });

})();
