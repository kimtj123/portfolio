import React from 'react';
import '../scss/contact.scss';


function ContactList({ contactInfo }: any) {

  return (
    <div className="contact-container">
      <p className="contact-info">
        {contactInfo}
      </p>
    </div>
  );
}

export default ContactList;
