import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }
    
    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div>
      <form className="form">
        <h1>Contact</h1>

        <div class="form-floating mb-3">
          <input 
            type="text" 
            class="form-control" 
            id="floatingInput" 
            placeholder="Name" 
            value={userName} 
            onChange={handleInputChange}/>
          <label for="floatingInput">Name:</label>
        </div>

        <div class="form-floating mb-3">
          <input type="email" 
          class="form-control" 
          id="floatingInput" 
          placeholder="name@example.com"
          value={email}
          onChange={handleInputChange}/>
          <label for="floatingInput">Email address:</label>
        </div>

        <div class="form-floating mb-3">
          <input type="text" 
          class="form-control" 
          id="floatingInput" 
          placeholder="Message"
          value={message}
          onChange={handleInputChange}
          />
          <label for="floatingInput">Message:</label>
        </div>

        <small class="form-text text-muted">This is where errors appear.</small>
        <button type="button" className="btn btn-sm btn-outline-secondary extra-btn" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <div className="text-center">
        <p class="text-muted">Or contact me here:</p>
        <p class="text-muted">Email: megan@steblay.net</p>
        <p class="text-muted">Phone: 651.504.5238</p>
      </div>
    </div>
  );
}

export default Form;

      