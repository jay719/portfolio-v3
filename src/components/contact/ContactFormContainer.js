import React, { useState } from "react";
import ContactUI from "./ContactUI.js";

// Define your translations (replace these with your actual translations)
const translations = {
  formFirstNameLabel: "First Name",
  formLastNameLabel: "Last Name",
  formEmailLabel: "Your E-mail",
  formBudgetLabel: "Your Budget",
  formBudgetOptions: ["1k-3k", "3k-5k", "5k-10k", "More than 10k"],
  formBriefLabel: "Tell me a bit more what you are looking for?",
  buttonText: "Let’s talk now!",
  submitButtonText: "Submit Now!",
};

const ContactFormContainer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState(translations.formBudgetOptions[0]); // Set an initial value
  const [detail, setDetail] = useState("");

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleBudgetChange = (e) => setBudget(e.target.value);
  const handleDetailChange = (e) => setDetail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)
    console.log("Form submitted:", {
      firstName,
      lastName,
      email,
      budget,
      detail,
    });
  };

  return (
    <ContactUI
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
  );
};

export default ContactFormContainer;
