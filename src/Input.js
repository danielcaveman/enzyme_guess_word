import React from "react";
import PropTypes from "prop-types";

const Input = ({ secretWord, success }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");

  if (success) {
    return <div data-test="component-input"></div>;
  }

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="Enter Guess"
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
      </form>
      <button
        onClick={(event) => {
          event.preventDefault();
          setCurrentGuess("");
        }}
        data-test="submit-button"
        className="btn btn-primary mb-2"
      >
        Submit
      </button>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
