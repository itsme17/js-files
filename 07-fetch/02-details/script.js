/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var button = document.getElementById('run');
    var input = document.getElementById('hero-id');

    var getData = async () => {
        await fetch('../../_shared/api.json')
            .then(result => result.json())
            .then(data => {
                button.addEventListener('click', () => {
                    data.heroes.map(obj => {
                        if (input.value == obj.id) {
                            const template = obj;
                            console.log(template)
                            let xHero = document.getElementById('tpl-hero').content.cloneNode(true);
                            xHero.querySelector('.name').innerText = template.name;
                            xHero.querySelector('.alter-ego').innerText = template.alterEgo;
                            xHero.querySelector('.powers').innerText = template.abilities;
                            document.getElementById("target").appendChild(xHero);
                        }
                    })
                })
            })
    }
    getData();


})();
