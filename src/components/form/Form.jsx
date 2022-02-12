import React from "react";

import "./form.scss";

const Form = () => {
  return (
    <div className="form-container">
      <form className="form">
        <div className="form__group">
          <input
            type="text"
            id="email"
            className="form__input"
            placeholder=" "
            autoComplete="off"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
          <label htmlFor="email" className="form__label">
            Email
          </label>
        </div>

        <button className="form__button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Form;
