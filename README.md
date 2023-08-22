# Story Generator
This is a simple website that will accept user input to play an ad-lib style word game. The user can choose between two stories: a fairytale and an adventure. The live link can be found [here](https://rmoran98.github.io/story-generator/).

## Features
### Existing Features
#### Header
- The page title and a short description telling the user how to play the game.
[!Header](documentation/header.png)

#### Word Selection
- A series of input fields, allowing the user to type the words they would like used.
- Labels for the input fields, telling the user what type of word should be input, such as adjectives, nouns, etc.
#### Story Selection
- Two buttons, allowing the user to select whether they would like a fairytale or a heroic adventure to be generated.
- The third button reloads the webpage so the user can play the game again.
[!Input Area](documentation/input.png)

#### Story Area
- The space where the story will be generated, featuring a message letting the user know they have not generated a story yet, which can be replaced with the story by the relevant function when the user is ready.
[!Blank Story](documentation/story-blank.png)
[!Generated Story](documentation/story-full.png)

#### Footer
- A thank you for visiting the website, and an invitation to play the game again.
[!Footer](documentation/footer.png)

#### Script
- An event listener which waits for the DOM content to load and then runs the appropriate function depending on which button the user has clicked.
- The storeWords function which assigns all of the user input words to variables, so that they can be used in the functions which generate the story.
- Some generic words assigned to the necessary variables by default, to be displayed if the user fails to input anything.
- The storyTime function which checks which story the user has selected, and fills the story area with the relevant story. An error alert will be displayed if the user has not selected a recognised story.
- The newStory function reloads the webpage so that the user may create another story.

### Features Left to Implement
- When I am more confident with JavaScript, I would like to return to the storeWords function and have it also remove any HTML tags from the created variables. This would help boost the security of the webpage by reducing the risk of an XSS attack.

### Design
#### User Stories
- As a visually impaired user, I would like the webpage to be screen reader accessible.
- As a colorblind user, I would like the design to take visibility and contrast into account.
- As a repeat visitor, I would like multiple stories to try.
- As a first time user I would like clear instructions on how to play the game.

#### Planned Functions
Based on my User Stories, I made a plan of how my website would run. I wanted the user to save words that would be inserted into the stories, ad-lib style. Next they would pick a story, or reload the page to begin again.

[!Flow](documentation/flow.png)

#### Color Scheme
I decided to go for a simple colour scheme, so I began with a dark gray, #8b8b8b. From there I generated a color palette. 

[!Color Palette](documentation/color-palette.png)

I decided I wanted a light gray background with black text, so I tested these colours for contrast.

[!Contrast](documentation/contrast-test.png)

Finally I decided to use the mint and pastel pink colors for the buttons, to add some interest.

#### Wireframe
With the colors decided, I created a wireframe of what I wanted the website to look like.

[!Wireframe](documentation/wireframe.png)

## Testing
### Resolved bugs
- Using `.innerText` in the storeWords function was failing to return the user entered values as variables as intended. Changing `.innertext` to `.value` fixed the issue.
### Validator Testing
#### HTML Validator

#### CSS Validator

#### JS Validator

### Lighthouse

### Responsiveness

### Manual testing

## Deployment

## Credits
### Tutorials

### Tools and Technologies

### Media