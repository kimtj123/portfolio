import React from 'react';
import '../scss/contact.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ContactList({ contactInfo }: any) {

  return (
    <div className="contact-container">
      <FontAwesomeIcon icon={contactInfo[1]} size="2x" />
      {
        contactInfo[2] ?
          <a className="contact-info" href={contactInfo[0]}
            target="_blank" rel="noopener noreferrer">
            {contactInfo[0]}
          </a> :
          <a className="contact-info">
            {contactInfo[0]}
          </a>
      }
    </div>
  );
}

export default ContactList;
