import React, { useState } from 'react';

function ContactForm() {

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [userEmail, setUserEmail] = useState('');
const [userMessage, setUserMessage] = useState('');

const handleInputChange = (e) => {
    const { name, value } = e.target;

//Where do email and message fit into this
    return name === 'firstName' ? setFirstName(value) : name === 'lastName' ? setLastName(value) : name === 'userEmail' ? setUserEmail(value) : setUserMessage(value)
};

const handleFormSubmit = (e) => {
    e.preventDefault();

    alert('Contact Information Submitted.');
    setFirstName('');
    setLastName('');
    setUserEmail('');
    setUserMessage('');
  };

return (
    <div>
    <p className="header">Leave your contact information:</p>   
      <form className="form" action="mailto:jacob.studer.dev@gmail.com" method="POST" enctype="multipart/form-data">
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={userEmail}
          name="userEmail"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <input
          value={userMessage}
          name="userMessage"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
          size="100"
        />

        <input 
            type="submit"
            onClick={handleFormSubmit}
        />
         
       
      </form>
    </div>
  );
}

export default ContactForm;