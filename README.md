# Foundations Project: Basic Calculator

### Source
- [The Odin Project, Foundations Course, JavaScript Basics, Project: Calculator](https://www.theodinproject.com/lessons/foundations-calculator)


### Scope
- All Around Focus, using HTML, CSS, and JavaScript
- The base project is to create the graphical user interface and logic for a basic calculator, which has digits 0-9, four basic operators, equals, and clear buttons.
- The calculator should store and display what user clicks, and calculate a result when the user provides 2 numbers and an operator
- Address a handful of potential bugs:
    - round long decimal answers
    - prevent equals button from trying to calculate before the user can provide 2 numbers and operator
    - provide a message when user divides by 0


### Key Reflection Points
- Using objects to hold my related variables/functions
    - ex: grouping my DOM variables into a `nodeSelect` object
    - ex: grouping DOM manipulation functions into a `changeDOM` object
    - This is very handy when I need view many variables at once in the console
- Setting up live expression in the web console
    - While I used it more than halfway through, it was much more efficient to have several live expressions showing me what was happening behind the scenes, instead of console logging a bunch of my button logic
- I can use button disabled property for button control on the calculator. I used boolean/conditionals for when equals button was clicked so it does nothing, and later I used the disabled property to prevent decimal from being added multiple times.
- The more practice, the better 


**Project Considerations/Logic Errors**
- [x] Use objects to hold our variables/functions


**New Feature Additions**
- [x] Add a working decimal button, prevent multiple decimal points
- [x] Add a working backspace button, for numbers
- [] Add keyboard support


### Related Topics/Concepts
- HTML, CSS, JavaScript, Flexbox, Git, Conditionals, Functions, Events, EventListeners, Objects,