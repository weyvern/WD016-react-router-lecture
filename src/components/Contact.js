import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Drop a line📧</h1>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <input type='text' placeholder='Name' />
        <input type='text' placeholder='Email' />
        <textarea placeholder='Your message' />
      </form>
    </div>
  );
};

export default Contact;
