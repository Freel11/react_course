import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const emailIsInvalid = !enteredValues.email.includes("@");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(enteredValues);
  }

  function handleInputChange(identifier, e) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: e.target.value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            value={enteredValues.email}
            id="email"
            type="email"
            name="email"
            onChange={(e) => handleInputChange("email", e)}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            value={enteredValues.password}
            id="password"
            type="password"
            name="password"
            onChange={(e) => handleInputChange("password", e)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button type="button" className="button button-flat">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
