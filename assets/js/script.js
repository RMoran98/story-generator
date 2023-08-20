// Default variables for the words, so the user will not have errors or blank spaces in the generated story if they click on a story button without submitting anything
let adjective = "clever";
let color = "green";
let food = "apple";
let job = "accountant";
// Wait for the DOM to finish loading, then listen for button click events
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("Saving words!");
            } else {
                let story = this.getAttribute("data-type"); {
                    alert(`You chose ${story}!`)
                }
            }
        })
    }
})
/**
 * Gets the words the user types in and stores them as variables, overwiting the default values, to be used in the story functions. For testing purposes, the values are then logged to the console.
 */
function storeWords() {
    adjective = document.getElementById(`adjective`).innerText;
    color = document.getElementById(`color`).innerText;
    food = document.getElementById(`food`).innerText;
    job = document.getElementById(`job`).innerText;
    console.log(`Adjective is ${adjective}`);
    console.log(`Color is ${color}`);
    console.log(`Food is ${food}`);
    console.log(`Job is ${job}`);
}