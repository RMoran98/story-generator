# Story Generator

## Features
### Existing Features
#### Header
- The page title and a short description telling the user how to play the game.
#### Word Selection
- A series of input fields, allowing the user to type the words they would like used.
- Labels for the input fields, telling the user what type of word should be input, such as adjectives, nouns, etc.
#### Story Selection
- Two buttons, allowing the user to select whether they would like a fairytale or a heroic adventure to be generated.
#### Story Area
- The space where the story will be generated, featuring a message letting the user know they have not generated a story yet, which can be replaced with the story by the relevant function when the user is ready.
#### Footer
- A thank you for visiting the website, and an invitation to play the game again.
#### Script
- A function to assign all of the user input words to variables, so that they can be used in the functions which generate the story.
- Some generic words assigned to the necessary variables by default, to be displayed if the user fails to input anything.
- A function which will check which story the user has selected, and fill the story area with the relevant story. An error alert should be displayed if the user has not selected a story.
### Features Left to Implement
- In the future I would like to implement a clear button and script, so that the user would not have to refresh the page after generating a story to see the other one.

### Design
#### User Stories
- As a visually impaired user, I would like the webpage to be screen reader accessible.
- As a colorblind user, I would like the design to take visibility and contrast into account.
- As a repeat visitor, I would like multiple stories to try.
- As a first time user I would like clear instructions on how to play the game.

#### Color Scheme
I decided to go for a simple colour scheme, so I began with a dark gray, #8b8b8b. From there I generated a color palette. 

I decided I wanted a light gray background with black text, so I tested these colours for contrast.

Finally I decided to use the mint and pastel pink colors for the buttons, to add some interest.
### Testing
#### Resolved bugs
- Using `.innerText` in the storeWords function was failing to return the user entered values as variables as intended. Changing `.innertext` to `.value` fixed the issue.