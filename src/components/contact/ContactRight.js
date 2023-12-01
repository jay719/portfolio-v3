import React from "react";

const ContactRightUI = ({
  translations,
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
}) => {
  return (
    <div className="contact-right">
      <div className="contact-form-block w-form">
        <form
          id="Contact-Form"
          name="wf-form-Contact-Form-2"
          data-name="Contact Form"
          method="get"
          className="contact-form"
          aria-label="Contact Form"
          onSubmit={handleSubmit}
        >
          <div className="form-first-and-last-name-wrapper">
            <div className="first-name">
              <label htmlFor="First-Name" className="form-label">
                {translations.formFirstNameLabel}
              </label>
              <input
                type="text"
                className="form-field w-input"
                maxLength={256}
                name="First-Name"
                data-name="First Name"
                placeholder={translations.formFirstNameLabel}
                id="First-Name"
                required={false}
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>
            <div className="last-name">
              <label htmlFor="Last-Name" className="form-label">
                {translations.formLastNameLabel}
              </label>
              <input
                type="text"
                className="form-field w-input"
                maxLength={256}
                name="Last-Name"
                data-name="Last Name"
                placeholder={translations.formLastNameLabel}
                id="Last-Name"
                required={false}
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
          </div>
          <div className="form-email-wrapper">
            <div className="form-email">
              <label htmlFor="Enter-your-e-mail" className="form-label">
                {translations.formEmailLabel}
              </label>
              <input
                type="email"
                className="form-field email w-input"
                maxLength={256}
                name="Enter-your-e-mail"
                data-name="Enter your e-mail"
                placeholder={translations.formEmailLabel}
                id="Enter-your-e-mail"
                required={false}
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>
          <div className="form-budget-wrapper">
            <div className="form-budget">
              <label htmlFor="Budget-2" className="form-label">
                {translations.formBudgetLabel}
              </label>
              <select
                id="Budget-2"
                name="Budget"
                data-name="Budget"
                required={false}
                className="form-budget-dropdown w-select"
                value={budget}
                onChange={handleBudgetChange}
              >
                {translations.formBudgetOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-budget-wrapper">
            <div className="form-brief">
              <label htmlFor="Detail" className="form-label">
                {translations.formBriefLabel}
              </label>
              <textarea
                id="Detail"
                name="Detail"
                maxLength={5000}
                data-name="Detail"
                placeholder={translations.formBriefLabel}
                className="form-field budget-text-area w-input"
                value={detail}
                onChange={handleDetailChange}
              ></textarea>
            </div>
          </div>
          <div
            data-w-id="b6097d5e-4fdf-80f7-56a2-8a9799977237"
            className="button"
          >
            <div className="button-down">
              <div className="button-text no-opacity">
                {translations.buttonText}
              </div>
            </div>
            <input
              type="submit"
              value={translations.submitButtonText}
              data-wait="Please wait..."
              className="form-button w-button"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactRightUI;
