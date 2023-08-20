// Default attributes, so the user will not have errors or blank spaces in the generated story if they click on a story button without submitting any words
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