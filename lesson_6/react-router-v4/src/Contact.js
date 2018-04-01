import React from "react"

const Contact = ({email})=> (<p>
    Contact us 
    <br/>
    <a href={`mailto:${email}`}>{email}</a>
  </p>)

export default Contact;
