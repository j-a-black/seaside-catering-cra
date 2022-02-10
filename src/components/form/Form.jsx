import React from "react";

import "./form.scss";

const Form = () => {
  return (
    <div class="form-container">
      <form class="form">
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

        <button class="form__button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Form;
