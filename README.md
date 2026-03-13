# Question & Answer

What is JSX, and why is it used?
JSX means "JavaScript XML" is a syntax extension for JavaScript that allows developers to write HTML-code directly within their JavaScript code.
Uses:
for safety, readability, maintainability and clean code.

What is the difference between State and Props?
State:
1. Data is managed within the component itself.
2. State is mutable and can be changed within the component using an updater function (e.g., setState or useState).
Props:
1. Data is passed from a parent component to a child component.
2. Props are immutable and read-only; they cannot be modified by the receiving component.

What is the useState hook, and how does it work?
useState hook: 
The useState hook is a built-in React function that allows functional components to manage and track state.
how it works:
If we call useState at the top level of your function component, passing the initialState as an argument.
It returns an array with two elements: the current state value and a function (often named with the set prefix, e.g., setCount) that lets we update that state.
When the state updater function is called with a new value, React re-renders the component with the new state, preserving the state value across renders.

How can you share state between components in React?

We can share state between components by passing as props in the component tag name then destructuring from the component function.


How is event handling done in React?
Event handling in React is similar to HTML but with some key differences. 
CamelCase Naming: Event names are written in camelCase (e.g., onClick instead of onclick).
Function as Handler: We pass a JavaScript function as the event handler, rather than a string.

