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
          />
          <label htmlFor="email" className="form__label">
            Email
          </label>
        </div>

        <div className="form__group">
          <input
            type="text"
            id="password"
            className="form__input"
            placeholder=" "
          />
          <label htmlFor="password" className="form__label">
            Password
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
