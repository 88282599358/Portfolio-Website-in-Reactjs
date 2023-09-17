import React from "react";
import "./style.scss";
import Section from "../shared/section";
import Form from "./form";
import ContactInfo from "./contact-info";
const Contact = () => {
  return (
    <Section id="contact" title="Feel Free to Contact" background="light">
      <div className="contact-content-wrapper">
        <ContactInfo />
        <Form />
      </div>
    </Section>
  );
};

export default Contact;
