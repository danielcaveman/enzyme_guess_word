import PropTypes from "prop-types";

const GuessedWords = ({ guessedWords }) => {
  let content;

  if (!guessedWords.length) {
    content = (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    );
  } else {
    content = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-dark table-striped table-sm">
          <thead>
            <tr>
              <th>Guess</th> 
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {guessedWords.map((word, index) => (
              <tr key={index} data-test="guessed-word">
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
