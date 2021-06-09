import PropTypes from "prop-types";

const GuessedWords = ({ guessedWords }) => {
  let content;

  if (!guessedWords.length) {
    content = (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    );
  }

  return <div data-test="component-guessed-words">{content}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
