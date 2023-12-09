import React from "react";
import ContactLeftUI from "./ContactLeft";
import ContactRightUI from "./ContactRight";
import "../../styles/Contact.css";

const ContactUI = ({
  firstName,
  lastName,
  email,
  budget,
  detail,
  handleFirstNameChange,
  handleLastNameChange,
  handleEmailChange,
  handleBudgetChange,
  handleDetailChange,
  handleSubmit,
  translations,
}) => {
  return (
    <div className="wrapper contact-wrapper">
      <ContactLeftUI />
      <ContactRightUI
        firstName={firstName}
        lastName={lastName}
        email={email}
        budget={budget}
        detail={detail}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        handleEmailChange={handleEmailChange}
        handleBudgetChange={handleBudgetChange}
        handleDetailChange={handleDetailChange}
        handleSubmit={handleSubmit}
        translations={translations}
      />
    </div>
  );
};

export default ContactUI;
