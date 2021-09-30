/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    var performOperation = function(operation) {
        // perform the operation

        switch (operation) {
            case "addition":
                var input1=document.getElementById("op-one").value;
                var input2=document.getElementById("op-two").value;
                let sum = Number(input1)+Number(input2);
                alert(sum);
                break;
            case "substraction":
                var input1=document.getElementById("op-one").value;
                var input2=document.getElementById("op-two").value;
                let subtract = input1-input2;
                alert(subtract);
                break;
            case "multiplication":
                var input1=document.getElementById("op-one").value;
                var input2=document.getElementById("op-two").value;
                let multiply = Number(input1)*Number(input2);
                alert(multiply);
                break;
            case "division":
                var input1=document.getElementById("op-one").value;
                var input2=document.getElementById("op-two").value;
                let divide = Number(input1)/Number(input2);
                alert(divide);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
