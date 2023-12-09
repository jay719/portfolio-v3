import React from "react";

const ContactLeftUI = () => {
  const translations = {
    contactHeading: "Let's Connect",
    contactText:
      "Have a project in mind? Looking to partner or work together? Reach out through the form, and I'll get back to you in the next 48 hours.",
    contactEmail: "javariab17@gmail.com",
    contactPhone: "+889-776-899",
    // Add more translation properties as needed
  };
  return (
    <div className="contact-left">
      <h2 className="contact-heading">{translations.contactHeading}</h2>
      <p className="text-block _20-px">{translations.contactText}</p>
      <div className="contact-email-and-phone-wrapper">
        <a
          id="Contact-Email"
          href={`mailto:${translations.contactEmail}?subject=Email`}
          className="contact-email w-inline-block"
        >
          <div className="email-image-wrapper">
            <img
              src="https://assets.website-files.com/5fef5619b640934b33c2385e/606421699f78709a207218d0_Vector-2.svg"
              loading="lazy"
              alt=""
              className="image contain"
            />
          </div>
          <div className="email-text">{translations.contactEmail}</div>
        </a>
        {/* <a
          href={`tel:${translations.contactPhone}`}
          className="contact-phone w-inline-block"
        >
          <div className="email-image-wrapper">
            <img
              src="https://assets.website-files.com/5fef5619b640934b33c2385e/60642167a6a39387b123008f_Vector-1.svg"
              loading="lazy"
              alt=""
              className="image contain"
            />
          </div>
          <div className="email-text">{translations.contactPhone}</div>
        </a> */}
      </div>
    </div>
  );
};

export default ContactLeftUI;
