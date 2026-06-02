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
    - provide a message when user divides by 0, should not crash calculator


### Key Reflection Points
- Using objects to hold my related variables/functions
    - ex: grouping my DOM variables into a `nodeSelect` object
    - Viewing all my nodes through the object was much easier than one at a time
- Setting up live expression in the web console
    - Typically, I use console logs to verify logic flow; however, viewing the 5 specific properties that store the data live, was more efficient than consol logging in-line
- Condition to prevent use VS disabling
    - For the equals button, I used conditional to prevent it from operating before all variables needed existed
    - Later, I used the `button.disabled` property to outright stop it from being clicked on to avoid mutliple decimals at a time
- While adding keyboard support was not as difficult as expected, it did open up a new bug when pressing the `.` key
    - Even though the decimal button was disabled, the `.` key would continue to add decimals on display and in storage, leading to NaN
    - I used `preventDefault()` whenever the button was disabled so that keydowns would not trigger more decimals
- The most complex project so far. I tested different approaches as I worked on the project and it was very reward seeing the project come to life, one button at a time.

### Project Considerations/Logic Errors
- Use objects to hold our variables/functions
- Move conditionals into functions to reduce code in the event listener


### New Feature Additions
- [x] Add a working decimal button, prevent multiple decimal points
- [x] Add a working backspace button, for numbers
- [x] Add keyboard support
- [x] Add inspiration button (for fun)


### Related Topics/Concepts
- HTML, CSS, JavaScript, Flexbox, Git, Conditionals, Functions, Mouse Events, Keyboard Events, EventListeners, Objects