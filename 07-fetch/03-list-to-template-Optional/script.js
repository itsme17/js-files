/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var button = document.getElementById('run');

    var getData = async () => {
        await fetch('../../_shared/api.json')
            .then(result => result.json())
            .then(data => {
                button.addEventListener('click', () => {
                    data.heroes.map(obj => {
                            let xMan = document.getElementById('tpl-hero').content.cloneNode(true);
                            xMan.querySelector('.name').innerText = obj.name;
                            xMan.querySelector('.alter-ego').innerText = obj.alterEgo;
                            xMan.querySelector('.powers').innerText = obj.abilities;
                            document.getElementById("target").appendChild(xMan);
                    })
                })
            })
    }
    getData();
})();
