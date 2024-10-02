import React, { useState } from 'react';

export default function FormInput() {
  const [name, setName] = useState('');
//   useState ekta setter function

  const handleInputChange = (event) => {
    setName(event.target.value); // Updates the state with the new input value
  };

  return (
    <form>
      <div>
        <label>
          Name: 
          <input
            type='text'
            value={name}
            onChange={handleInputChange} // Call the handler when input changes
        //   onchange will update the initial state
          />
        </label>
      </div>

      {/* Display the input value below the form */}
      <div>
        <h3>Your Name: {name}</h3>
      </div>
    </form>
  );
}