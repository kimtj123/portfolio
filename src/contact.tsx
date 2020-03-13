import React from 'react';
import './scss/contact.scss';
import ContactList from './sub-component/contact-list';

function Contact() {

  interface passingObj {
    mail: string
    phone: string
  }

  let contactInfo: passingObj =
  {
    mail: "Email : kimtajung1@gmail.com",
    phone: "Phone : 010-8764-6754"
  }

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <p>Contact</p>
      </div>
      <div className="contact-content">
        {
          Object.values(contactInfo).map((info, i) =>
            <ContactList contactInfo={info} key={`contactList${i}`} />
          )
        }
      </div>
    </div>
  );
}

export default Contact;
