import React, { useState } from "react";
import { Footer } from "../components";
import { isEmail } from "../utils/function";
const Contact = () => {
  const [messageError, setMessageError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [checked, setChecked] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.length < 10 || !isEmail(email) || lastName.length < 2 || firstName.length < 2) {
      if (message.length < 10) {
        setMessageError(true);
        setTimeout(() => {
          setMessageError(false);
        }, 5000);
      }
      if (!isEmail(email)) {
        setEmailError(true);
        setTimeout(() => {
          setEmailError(false);
        }
          , 5000);
      }
      if (lastName.length < 2) {
        setLastNameError(true);
        setTimeout(() => {
          setLastNameError(false);
        }
          , 5000);
      }
      if (firstName.length < 2) {
        setFirstNameError(true);
        setTimeout(() => {
          setFirstNameError(false);
        }
          , 5000);
      }
    }
    else {
      window.location.reload();
    };
  };
  return (
    <section className="flex justify-center items-center flex-col min-h-screen gap-24">
      <main className="lg:w-3/5 w-11/12 mt-12">
        <h1 className="text-4xl font-semibold">Contact Me</h1>
        <p className="text-text-gray-600 mb-6 mt-3">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <form
          className="w-full flex flex-col lg:gap-6 gap-6"
          onSubmit={handleSubmit}
        >
          <div className="flex lg:flex-row flex-col w-full justify-between gap-6">
            <div className="flex flex-col w-full gap-2">
              <label
                className={`text-sm ${firstNameError ? `text-text-red-500` : `text-text-gray-70`} font-semibold transition-colors duration-300 ease-in`}
                htmlFor="first_name"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                placeholder="Enter your first name"
                className={`border ${firstNameError ? `border-text-red-500 placeholder:text-text-red-500` : `border-border placeholder:text-text-light`} px-4 py-2 rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] transition-colors duration-700 ease-in`}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
                <p className={`text-text-red-500 text-sm transition-colors duration-700 ease-in ${firstNameError ? `scale-100` : `scale-0`} transition-transform origin-right duration-300 ease-in w-fit`}>
                  First name is required
                </p>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label
                className={`text-sm ${lastNameError ? `text-text-red-500` : `text-text-gray-70`} font-semibold transition-colors duration-300 ease-in`}
                htmlFor="last_name">
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                placeholder="Enter your last name"
                className={`border ${lastNameError ? `border-text-red-500 placeholder:text-text-red-500` : `border-border placeholder:text-text-light`} px-4 py-2 rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] transition-colors duration-700 ease-in`}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              
              <p className={`text-text-red-500 text-sm transition-colors duration-700 ease-in ${lastNameError ? `scale-100`: `scale-0`} transition-transform origin-right duration-300 ease-in w-fit`}>
                  Last name is required
                </p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <label
              className={`text-sm ${emailError ? `text-text-red-500` : `text-text-gray-70`} font-semibold transition-colors duration-300 ease-in`}
              htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="yourname@email.com"
              className={`border ${emailError ? `border-text-red-500 placeholder:text-text-red-500` : `border-border placeholder:text-text-light`} px-4 py-2 rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] transition-colors duration-700 ease-in`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className={`text-text-red-500 text-sm transition-colors duration-700 ease-in ${emailError ? `scale-100` : `scale-0`} transition-transform origin-right duration-300 ease-in w-fit`}>
                Please enter a valid email address
              </p>
  
          </div>
          <div className="flex flex-col w-full gap-2">
            <label
              className={`text-sm ${messageError ? `text-text-red-500` : `text-text-gray-70`} font-semibold transition-colors duration-300 ease-in`}
              htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              className={`border ${messageError ? `border-text-red-500 placeholder:text-text-red-500` : `border-border placeholder:text-text-light`} px-4 py-2 rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] resize-none transition-colors duration-700 ease-in`}
              cols={30}
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
              <p className={`text-text-red-500 text-sm transition-colors duration-700 ease-in ${messageError ? `scale-100` : `scale-0`} transition-transform origin-right duration-300 ease-in w-fit`}>
                Please enter a message
              </p>
          </div>
          <div className="flex gap-2 lg:items-center">
            <input
              type="checkbox"
              id="checkbox"
              className="border border-border outline-none ring-0 focus:ring-0 focus:outline-none rounded-md shadow-[0px_1px_2px_rgba(16,24,40,0.05)]"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <label htmlFor="checkbox" className="text-sm text-text-gray-700">
              You agree to providing your data to Udochukwuka Onyela who may
              contact you.  
            </label>
          </div>
          <button
            type="submit"
            disabled={!checked}
            className={`${checked ? `bg-button cursor-pointer` : `bg-button-disabled cursor-not-allowed`} transition-colors duration-700 ease-in text-white py-3 rounded-lg`}>
            Send message
          </button>
        </form>
      </main>
      <Footer />
    </section>
  );
};
export default Contact;
