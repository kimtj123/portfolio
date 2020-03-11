import React from 'react';
import './scss/contact.scss';
import ContactList from './sub-component/contact-list';

import { faGithub, faBlogger } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";


function Contact() {

  interface passingObj {
    mail: [string, any, boolean],
    github: [string, any, boolean],
    blog: [string, any, boolean]
  }

  let contactInfo: passingObj =
  {
    mail: ["kimtajung1@gmail.com", faEnvelope, false],
    github: ["https://github.com/kimtj123", faGithub, true],
    blog: ["https://blog.naver.com/kimtajung1", faBlogger, true],
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
