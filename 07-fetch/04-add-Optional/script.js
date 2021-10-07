/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    async function addHero(){
        let api = await fetch("http://localhost:3000/heroes");
        let data = await api.json();
        console.log(data)

        let heroName = document.getElementById("hero-name").value;

        let heroAlterEgo = document.getElementById("hero-alter-ego").value;

        let heroPowers = document.getElementById("hero-powers").value;
        heroPowers=heroPowers.split(",");

        if(heroName == "" || heroAlterEgo == "" || heroPowers == ""){
            alert("Identify yourself!");
        }else{
            let user = {
                "id": data.length + 1,
                "name": heroName,
                "alterEgo": heroAlterEgo,
                "abilities": heroPowers,
            }
            data.push(user);
            console.log(data);
        }
    }
    let button = document.getElementById('run');
    button.addEventListener('click', addHero)

})();
