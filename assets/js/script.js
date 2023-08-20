// Default variables for the words, so the user will not have errors or blank spaces in the generated story if they click on a story button without submitting anything
let adjective = "clever";
let color = "green";
let food = "apple";
let job = "accountant";
let creature = "dragon";
/**
 * Waits for the DOM to finish loading, then listens for button clicks and calls a different function based on which button is clicked.
 */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                storeWords();
            } else {
                let story = this.getAttribute("data-type"); {
                    storyTime(story);
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
    creature = document.getElementById(`creature`).innerText;
    console.log(`Adjective is ${adjective}`);
    console.log(`Color is ${color}`);
    console.log(`Food is ${food}`);
    console.log(`Job is ${job}`);
    console.log(`Creature is ${creature}`);
}

/**
 * Calls a story function based on which button was clicked, and returns an error message if the story parameter is not recognised.
 */
function storyTime(story) {
    if (story === "fairytale") {
        fairytaleStory()
    } else if (story === "adventure") {
        adventureStory()
    } else {
        alert(`Caution! ${story} not recognised!`);
        throw `${story} not recognised!`;
    }
}

/**
 * Replaces the default paragraph in the final div of index.html with the fairytale story.
 */
function fairytaleStory() {
    let start = document.getElementById("start");
    let paragraph = document.createElement("p");
    paragraph.append(`Once upon a time there was a princess who was very ${adjective}. She lived in a castle guarded by a ${creature}. The ${creature} was rather nice, so the evil wizard was jealous, and decided to give the princess a poison ${food}. Thankfully a passing ${job} recognised the ${food} was poisoned because it was ${color}, so the princess was saved. The end.`);
    start.replaceWith(paragraph);
}

/**
 * Replaces the default paragraph in the final div of index.html with the adventure story.
 */
function adventureStory() {
    let start = document.getElementById("start");
    let paragraph = document.createElement("p");
    paragraph.append(`A ship with ${color} sails put to sea for a long journey. On their way they were stopped by a ${creature}, who was very hungry. The ${adjective} sailors were all terrified that the ${creature} would eat them. Luckily the chef remembered the ${creature}'s favourite food, and the ${job} happened to have a ${food} in his luggage. The end.`);
    start.replaceWith(paragraph);
}