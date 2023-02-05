import { useRef } from "react";
import "./App.css";

function App() {

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    if (re.test(email)) {
      emailRef.current.classList.remove("invalid");
      return true;
    } else {
      emailRef.current.classList.add("invalid");
      return false;
    }
  };

  const validateInput = (input) => {
    if (input.value === "") {
      input.classList.add("invalid");
      return false;
    } else {
      input.classList.remove("invalid");
      return true;
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    // Check if the inputs are valid
    const isFirstNameValid = validateInput(firstNameRef.current);
    const isLastNameValid = validateInput(lastNameRef.current);
    const isEmailValid = validateEmail(emailRef.current.value);
    const isPasswordValid = validateInput(passwordRef.current);

    // If all the inputs are valid, then submit the form
    if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid) {
      console.log("Form submitted");
    } else {
      console.log("Form not submitted");
    }
  };

  return (
    <div className="App">
      <div className="left-content">
        <h2>Learn to code by watching others</h2>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="right-content">
        <p className="information">
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </p>
        <form className="trial-form" onSubmit={onFormSubmit}>
          <input className="trial-form__input" placeholder="First Name" ref={firstNameRef}></input>
          <input className="trial-form__input" placeholder="Last Name" ref={lastNameRef}></input>
          <input className="trial-form__input" type="email" placeholder="Email Address" ref={emailRef}></input>
          <input className="trial-form__input" type="password" placeholder="Password" ref={passwordRef}></input>
          <button type="submit" className="btn-claim">
            Claim your free trial
          </button>
          <p className="terms-and-services">
            By clicking the button, you are agreeing to our{" "}
            <strong>Terms and Services</strong>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
