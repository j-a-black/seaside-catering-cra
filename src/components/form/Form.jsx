import React from "react";

import "./form.scss";

const Form = () => {
  return (
    <div class="form-container">
      <div class="signup-image"></div>
      <form class="form">
        <h1 class="form__title">Welcome to the Unit</h1>
        <p class="form__description">
          Lead and manage Covert Action programs and collect foreign
          intelligence vital to national security
        </p>

        <div class="form__group">
          <input
            type="text"
            id="email"
            class="form__input"
            placeholder=" "
            autocomplete="off"
          />
          <label for="email" class="form__label">
            Email
          </label>
        </div>

        <div class="form__group">
          <input
            type="text"
            id="password"
            class="form__input"
            placeholder=" "
          />
          <label for="password" class="form__label">
            Password
          </label>
        </div>

        <button class="form__button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Form;
