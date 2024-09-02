What are the different data types present in javascript? explain deeply with example?

Primitive Data Types
Primitive data types are the most basic data types in JavaScript. 
They are immutable (unchangeable) and are passed by value. JavaScript has six primitive data types:

1-Number

Represents both integer and floating-point numbers.

let age = 30;            // Integer
let temperature = 36.6;  // Floating-point number

2-String

Represents a sequence of characters enclosed in single quotes, double quotes, or backticks (template literals).

let name = "Alice";
let greeting = 'Hello, world!';
let multiline = `This is a
multiline string`;


//IIFE

(function(){
    let msg=" Hello my world"

    console.log(msg)
})();

console.log(msg)

// Currying

function add(a){
    return function(b){
        return a+b;
    }
}
add(a)(b)

function multiply(a,b){
    return a*b;
}

function currying(fn){
    return function(a){
        return function(b){
            return a*b;
        }
    }
}
mulitplyCurrying=currying(multiply)

//destruction with function
function printPerson({name,age,city="unknown"}){
    console.log(`My name is ${name}`)
     console.log(`My age is ${age}`)
      console.log(`My name is ${city}`)
}

const person={
    name:"Bob",
    age:25

}
printPerson(person)

let Nname={
    firstName:Vedant,
    lastName:Garg,
    fullName:function(){
        console.log(this.firstName +" " +this.lastName)
    }

}

function add(a,b){
    return a+b;
}

add=function(a,b){
    return a+b;
}

add=()=>{
    return a+b;
}

fruits=[Apple,Bannana,Mango]
Morefruits=[oats,blueberry,...fruits,amrus]

function Multioly(a,b,c){
    return a*b*c;
}
const numbers=[1,2,3]

Multioly(...numbers)

function example(a,b,...rest){
console.log(a)
console.log(b)
console.log(rest)

}
example(1,2,3,4,5,5,6)


function add(callback){
    console.log("Data is here ")
    callback()
}

function addd(){
    console.log("data logged")
}

add(addd)
// passed by value is occur only primitive data types like number string boolean null undefined 
// function modifyValue(x){
//   x=x*2;
//   console.log(x)
// }
//  let num=5
// modifyValue(num);

// console.log("outside function" , num)

function modfyValue(obj){
    obj.name="Bob"
    console.log("inside function",obj)
}

person={name:"Alice"}

modfyValue(obj)//
console.log(person)

function Reassign(obj){
    obj={name:"bob"}
    console.log("inside",obj)
}
person={name:"Alice"}
Reassign(obj)
console.log(person)


function greet(message){
    return function(name){
        return message + " "+ name;

    }
}
let sayHello=greet("Hello")
sayHello("Vedant")

let sayGoodbye=greet("Goodbye")
sayGoodbye("Vedant")


function Counter(){
   let count=0;
   return function(){
    count+=1;
    return count;
   }

}

let Counter1=Counter()

// What are Cookies?
// Definition: Cookies are small pieces of data that are stored by the web browser on the user's computer.
//  They are used to store information that can be used across multiple pages of a website or between visits
//   to the same website.

// Why are Cookies Used?
// Cookies serve several essential purposes in web development:

// 1. Session Management
// User Authentication: Cookies are used to store session IDs, allowing users to stay logged in as
//  they navigate through different pages of a site. When a user logs in, the server creates a session 
//  and stores the session ID in a cookie. This ID is sent with every subsequent request to authenticate the user.

// Shopping Carts: E-commerce sites use cookies to remember the items a user has added to their cart,
//  even if they leave the site and return later.

// User Preferences: Websites can remember user settings like language or theme using cookies.
//  This allows the website to apply the user's preferred settings automatically on future visits.

// 3. Tracking and Analytics
// User Behavior: Cookies can track user behavior across a website to understand how users interact with the site.
//  This data can be used to improve user experience.

//Local storage


// localStorage is a web storage API provided by modern web browsers that allows you to store key-value pairs
//  in a web application. Unlike cookies, localStorage data is stored locally on the user's computer and is 
//  not sent to the server with every HTTP request. This makes it more efficient for storing larger amounts
//   of data compared to cookies.

// Key Features of localStorage
// Persistent Storage:

// Data stored in localStorage persists even after the browser is closed and reopened.
//  It remains until explicitly deleted by the user or by the application.
// Capacity:

// localStorage typically allows storage of about 5-10MB of data per domain, depending on the browser. 
// This is significantly more than the 4KB limit of cookies.
// String Data Only:

// localStorage can only store strings. If you need to store objects or arrays,
//  you have to convert them to strings using JSON.stringify() and convert them back using JSON.parse().
// Synchronous API:

// localStorage is synchronous, meaning operations like setting or getting items happen immediately.


// session storage


// Understanding sessionStorage in JavaScript
// sessionStorage is part of the Web Storage API provided by modern web browsers,
//  allowing you to store key-value pairs in the browser. Like localStorage,
//   it is used to store data on the client-side, but with a key difference in how long the data persists.

// Key Features of sessionStorage
// Temporary Storage:

// The data stored in sessionStorage is specific to a single browser session. 
// It persists only for as long as the browser window or tab is open. Once the tab is closed,
//  the data is automatically cleared.
// Capacity:

// sessionStorage typically allows storage of about 5-10MB of data per domain, depending on the browser.
//  This is similar to localStorage and much more than what cookies offer.
// String Data Only:

// Like localStorage, sessionStorage can only store strings. If you need to store objects or arrays, 
// you must convert them to strings using JSON.stringify() and convert them back using JSON.parse().
// Synchronous API:

// Operations like setting or getting items in sessionStorage are synchronous, meaning they happen immediately.


// 1. Purpose and Use Case
// Cookies:

// Purpose: Cookies are primarily used for session management, user tracking, and storing user 
// preferences across sessions. They are also used to maintain state across different page requests,
//  such as keeping a user logged in.
// Use Case:
// Storing session IDs for authentication.
// Remembering user preferences like language or theme.
// Tracking user behavior for analytics.

// localStorage:

// Purpose: localStorage is used to store data locally on the client-side that persists even after 
// the browser is closed and reopened.
// Use Case:
// Storing persistent user preferences (e.g., theme selection).
// Caching application state or data to improve performance.
// Storing data that needs to persist across sessions but does not require server-side access.

// sessionStorage:

// Purpose: sessionStorage is used to store data for the duration of a single session.
//  The data is cleared when the session ends (i.e., when the browser tab is closed).
// Use Case:
// Storing temporary form data to prevent data loss on page refresh.
// Managing state or settings that should only persist for the duration of the session.
// Handling single-session data that does not need to persist across multiple tabs or windows.
// 2. Persistence

// Cookies:

// Persistence: Can be persistent or session-based. Persistent cookies have an expiration date and 
// can last from seconds to years. Session cookies are deleted when the browser is closed.
// Expiration: Controlled via the expires or max-age attribute. Without these attributes, cookies are session-based.

// localStorage:

// Persistence: Persistent. Data remains until explicitly deleted by the user or the application.
// Expiration: No expiration date. Data stays until manually cleared.

// sessionStorage:

// Persistence: Temporary. Data is cleared when the browser tab or window is closed.
// Expiration: Data is automatically removed at the end of the session (when the tab or window is closed).
// 3. Storage Capacity

// Cookies:

// Capacity: Limited to about 4KB per cookie, depending on the browser. Browsers typically limit the total
//  number of cookies (e.g., 20-50 cookies per domain).
// Implication: Suitable for small pieces of data like session IDs or short user preferences.

// localStorage:

// Capacity: Typically allows about 5-10MB of data per domain, depending on the browser.
// Implication: Suitable for larger amounts of data that need to persist across sessions,
//  like application state, settings, or cached data.

// sessionStorage:

// Capacity: Typically allows about 5-10MB of data per domain, depending on the browser.
// Implication: Suitable for temporary data that needs to persist only during the session.
// 4. Scope
// Cookies:

// Scope: Data is sent with every HTTP request to the server, making it accessible on both the client
//  and server-side. Cookies are also shared across all tabs and windows for the same domain.
// Domain/Path Specific: Cookies can be restricted to a specific domain and path.

// localStorage:

// Scope: Data is accessible only within the client-side JavaScript for the same origin (same domain,
//      protocol, and port). Shared across all tabs and windows for the same origin.
// No Server Interaction: Data is not sent to the server with each request.

// sessionStorage:

// Scope: Data is accessible only within the client-side JavaScript for the same origin, but is limited 
// to the specific tab or window where it was created. It is not shared across different tabs or windows,
//  even if they are for the same domain.
// No Server Interaction: Data is not sent to the server with each request.
// 5. Security

// Cookies:

// Security: Can be vulnerable to security risks like Cross-Site Scripting (XSS) and Cross-Site Request
//  Forgery (CSRF) if not handled properly. Security can be enhanced by using the HttpOnly, Secure, and
//   SameSite attributes.
// HttpOnly Flag: Prevents access to cookies via JavaScript, reducing the risk of XSS attacks.
// Secure Flag: Ensures cookies are only sent over HTTPS connections.

// localStorage:

// Security: Data stored in localStorage is accessible via JavaScript, making it vulnerable to XSS attacks.
//  Should not be used for sensitive information.
// No Built-in Security: Unlike cookies, localStorage does not have attributes like HttpOnly or Secure to
//  enhance security.

// sessionStorage:

// Security: Similar to localStorage, data in sessionStorage is accessible via JavaScript and is 
// vulnerable to XSS attacks. Should not store sensitive data.


//Bubbling

// Event bubbling is a fundamental concept in JavaScript that occurs when an event triggered on 
// a DOM element propagates upwards through its ancestors in the DOM tree. This means that when 
// an event, such as a click, is fired on a particular element, the event first triggers on the
//  target element and then bubbles up to its parent elements, triggering the same event handlers if they exist.

// How Event Bubbling Works

// Event Triggering: When you click on a child element inside a parent, the event is first captured by the child element.

// Bubbling: After the event handler on the child element executes, the event bubbles up to the parent element,
//  triggering any event handlers associated with that event on the parent. This continues up the DOM tree until
//   it reaches the document object.

// Example of Event Bubbling

// Let's consider a simple example with nested HTML elements:

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Event Bubbling Example</title>
// </head>
// <body>
//     <div id="parent" style="padding: 20px; border: 2px solid blue;">
//         Parent Div
//         <div id="child" style="padding: 20px; border: 2px solid green;">
//             Child Div
//             <button id="button" style="padding: 10px; border: 2px solid red;">Click Me</button>
//         </div>
//     </div>

//     <script>
//         document.getElementById('parent').addEventListener('click', function() {
//             console.log('Parent DIV clicked');
//         });

//         document.getElementById('child').addEventListener('click', function() {
//             console.log('Child DIV clicked');
//         });

//         document.getElementById('button').addEventListener('click', function(event) {
//             console.log('Button clicked');
//         });
//     </script>
// </body>
// </html>


// Explanation of the Example
// HTML Structure:

// We have a Parent Div containing a Child Div, which in turn contains a Button.
// Each of these elements has an event listener attached to handle click events.
// JavaScript Event Listeners:

// The button element has an event listener that logs "Button clicked" to the console.
// The child div has an event listener that logs "Child DIV clicked" to the console.
// The parent div has an event listener that logs "Parent DIV clicked" to the console.


// What Happens When You Click the Button?
// Event on Button: When you click the button, the event is first captured by the button's event listener,
//  which logs "Button clicked" to the console.

// Bubbling to Child: After the button's event handler executes, the event bubbles up to the child div.
//  The event listener on the child div is triggered, logging "Child DIV clicked" to the console.

// Bubbling to Parent: The event continues to bubble up to the parent div. The event listener on the parent
//  div is triggered, logging "Parent DIV clicked" to the console.


// Why Event Bubbling Matters
// Event Delegation: Event bubbling is the basis for a powerful technique known as event delegation. 
// Instead of attaching individual event listeners to multiple child elements, you can attach a single event
//  listener to a common ancestor and handle events as they bubble up. This is particularly useful for dynamically
//   generated content.

// Performance: By using event delegation, you reduce the number of event listeners attached to DOM elements, 
// which can improve performance, especially in applications with a large number of elements.

// Stopping Event Bubbling
// In some cases, you might not want an event to bubble up to parent elements. You can stop event bubbling by
//  using the event.stopPropagation() method inside the event handler.

// document.getElementById('button').addEventListener('click', function(event) {
//     console.log('Button clicked');
//     event.stopPropagation(); // Stops the event from bubbling up
// });


// Throtlling


// Throttling is a performance optimization technique used in JavaScript to control how frequently a particular
//  function can execute. It is commonly applied in scenarios where an event may fire multiple times in quick
//   succession, such as scrolling, resizing, or keypress events. Throttling ensures that a function is not called 
//   too often, but instead is invoked at fixed intervals.

// In this example, we'll throttle a button click event so that the click handler can only be executed once 
// every 3 seconds.


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Simple Button Click Throttling</title>
// </head>
// <body>
//     <button id="throttleButton">Click Me</button>
//     <p id="output"></p>

//     <script>
//         // Throttle function
//         function throttle(func, delay) {
//             let lastCall = 0;
//             return function() {
//                 const now = Date.now();
//                 if (now - lastCall >= delay) {
//                     lastCall = now;
//                     func();
//                 }
//             };
//         }

//         // Click event handler
//         function handleClick() {
//             document.getElementById('output').textContent = "Button clicked!";
//         }

//         // Apply throttle to the click event
//         const throttledClick = throttle(handleClick, 3000); // 3-second delay

//         document.getElementById('throttleButton').addEventListener('click', throttledClick);
//     </script>
// </body>
// </html>


// Throttle Function:

// The throttle function takes a func (the function you want to throttle) and a delay
//  (the minimum time between executions) as arguments.
// Inside the throttle function, lastCall is used to store the timestamp of the last function execution.
// The function returned by throttle checks the current time (now) and compares it to lastCall.
//  If enough time has passed (now - lastCall >= delay), the func is executed and lastCall is updated.

// Click Event Handler:

// The handleClick function simply updates the text content of a paragraph element (#output) 
// to show that the button was clicked.

// Throttled Click Handler:

// The throttledClick variable stores the throttled version of handleClick, with a 3-second delay.

// Event Listener:

// The event listener on the button uses the throttledClick function. Even if the button is clicked
//  multiple times within 3 seconds, the handleClick function will only be executed once.

// How It Works:
// When you click the "Click Me" button, the paragraph's text will change to "Button clicked!".
// If you click the button multiple times in quick succession, the text will only update once every
//  3 seconds, regardless of how fast or how many times you click.
// This example demonstrates a simple use of throttling to control how frequently a button click event 
// handler is executed.


// debouncing

// Debouncing is a technique used in JavaScript to limit the rate at which a function is executed. 
// It ensures that a function is only called once after a certain amount of time has passed since the
//  last time it was invoked. This is particularly useful in scenarios where you want to avoid calling 
//  a function repeatedly, such as in response to user input, like typing in a search box, resizing a window,
//   or scrolling.


// Why Debouncing is Important
// Without debouncing, a function can be called many times in quick succession, which can lead to performance
//  issues, especially if the function is resource-intensive (e.g., making API requests or performing complex
//      calculations). Debouncing helps optimize performance by ensuring that the function is only called after
//       the user has finished an action, rather than during the action.

// How Debouncing Works
// Debouncing works by delaying the execution of a function until after a specified amount of time 
// has passed since the last time the function was called. If the function is called again before the 
// delay period has ended, the previous call is canceled, and the delay timer is reset.

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Debouncing Example</title>
// </head>
// <body>
//     <input type="text" id="searchInput" placeholder="Type to search..." />
//     <p id="output"></p>

//     <script>
//         // Debounce function
//         function debounce(func, delay) {
//             let timeoutId;
//             return function(...args) {
//                 clearTimeout(timeoutId);
//                 timeoutId = setTimeout(() => func.apply(this, args), delay);
//             };
//         }

//         // Search function (simulates an API call)
//         function handleSearch(event) {
//             const query = event.target.value;
//             document.getElementById('output').textContent = `Searching for: ${query}`;
//             // Simulate API call here
//             console.log(`API Call: Searching for ${query}`);
//         }

//         // Apply debounce to the search function
//         const debouncedSearch = debounce(handleSearch, 500); // 500ms delay

//         // Add event listener to the input field
//         document.getElementById('searchInput').addEventListener('input', debouncedSearch);
//     </script>
// </body>
// </html>

// Debounce Function:

// The debounce function takes two arguments: the func to debounce and the delay in milliseconds.
// It returns a new function that, when called, clears the previous timeoutId (if any) and sets a new timeout to call the func after the specified delay.
// If the returned function is called again before the delay period ends, the previous timeout is canceled and the timer is reset.
// Search Function:

// The handleSearch function is a simple function that displays the current input value and simulates an API call by logging a message to the console.
// Debounced Search Handler:

// The debouncedSearch variable stores the debounced version of the handleSearch function with a 500ms delay.
// Event Listener:

// The event listener on the input field uses the debouncedSearch function, so the handleSearch function is only called 500 milliseconds after the user stops typing.
// How It Works:
// When you start typing in the input field, the handleSearch function will not be called immediately. Instead, the function call is delayed by 500 milliseconds.
// If you continue typing before the 500 milliseconds have passed, the previous timer is canceled, and a new timer starts.
// Once you stop typing and the delay period ends, the handleSearch function is executed, displaying the search query and simulating an API call.
// Practical Use Cases for Debouncing
// Search Boxes: Avoid making API requests on every keystroke by debouncing the search input, ensuring the API is only called after the user has finished typing.
// Form Validation: Debounce form field validations to avoid running validations on every keystroke.
// Resize Events: Debounce window resize events to prevent layout calculations from running multiple times as the user resizes the browser window.
// Scroll Events: Debounce scroll events to avoid frequent execution of functions that rely on the scroll position, such as lazy loading or infinite scrolling.

// Debouncing vs. Throttling

// Debouncing: Ensures that a function is called only once, after a specified period of inactivity.
//  It's ideal when you want the function to execute after the user stops performing an action.

// Throttling: Ensures that a function is called at most once in a specified interval, regardless
//  of how many times the event is triggered during that interval. It's ideal when you want to control 
//  the rate of function execution without waiting for inactivity.