import React from 'react'
import './Contact.css'
import Section from '../section/Section'
import { Bounce } from 'react-reveal'
import linkedin from '../../images/contact/linkedin.png'
import github from '../../images/contact/github.png'
import email from '../../images/contact/email.png'

const Contact = () => {
  return (
    <Section title="Contact">
      <Bounce cascade>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/ghiglione-andrea/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin Logo" width="40px"/>
          </a>
          <a
            href="https://github.com/AndreaGhiglione"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github Logo" width="40px"/>
          </a>
          <a
            href="mailto:andreaghi98@gmail.com"
            rel="noopener noreferrer"
          >
            <img src={email} alt="Email Logo" width="40px" />
          </a>
        </div>
      </Bounce>
    </Section>
  )
}

export default Contact
