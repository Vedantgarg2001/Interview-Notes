// import React from 'react';

function App() {
    // Event handler function
    const handleClick = () => {
      alert('Button clicked!');
    };
  
    return (
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    );
  }
  
  export default App;
 
  
//   Explanation:

// Event Handler Function: handleClick is a function that gets called when the button is clicked.
//  It uses alert to show a message.
// Event Binding: The onClick attribute of the <button> element is set to handleClick.
//  This binds the click event to the handleClick function.

// 3. Event Handling with Parameters
// You can pass parameters to your event handlers if needed.

import React from 'react';

function App() {
  // Event handler function with a parameter
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <div>
      <button onClick={() => handleClick('Button clicked!')}>Click Me</button>
    </div>
  );
}

export default App;

// Explanation:

// Anonymous Function: An anonymous function is used in the onClick attribute to call handleClick
//  with a specific message.

// 4. Handling Form Events
// Form events are common and involve handling user input.

// Example:

import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');

  // Event handler for input change
  const handleChange = (event) => {
    setName(event.target.value);
  };

  // Event handler for form submit
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    alert(`Submitted name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;


// Explanation:

// Input Change Handling: handleChange updates the name state as the user types into the input field.
// Form Submit Handling: handleSubmit prevents the default form submission behavior and displays an alert 
// with the submitted name.

// 5. Event Object
// React provides a synthetic event object to event handlers, which contains properties and methods for the event.

//Example:

import React from 'react';

function App() {
  // Event handler function
  const handleClick = (event) => {
    console.log('Event type:', event.type);
    console.log('Event target:', event.target);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;

// Explanation:

// Event Object: The event parameter contains information about the event,
//  such as event.type (event type) and event.target (the element that triggered the event).

// 6. Event Delegation
// For performance reasons, you might handle events at a parent level and delegate to children. This is less common in React but can be done when necessary.

// Example:
import React from 'react';

function App() {
  // Event handler for the parent div
  const handleClick = (event) => {
    if (event.target.tagName === 'BUTTON') {
      alert('Button clicked!');
    }
  };

  return (
    <div onClick={handleClick}>
      <button>Button 1</button>
      <button>Button 2</button>
    </div>
  );
}

export default App;

// Explanation:

// Event Delegation: The handleClick function is attached to the parent div, and checks the event 
// target to determine if a button was clicked.
// Summary
// Basic Event Handling: Use the appropriate event attribute (e.g., onClick, onChange) and assign
//  it to an event handler function.
// Parameters: Use anonymous functions or arrow functions to pass parameters to event handlers.
// Form Events: Handle form submission and input changes with onSubmit and onChange respectively.
// Event Object: Access event details via the event object provided by React.
// Event Delegation: For certain scenarios, handle events at a parent element and delegate to children.
// By leveraging React’s synthetic event system and these techniques, you can manage user interactions 
// and application behavior effectively.




