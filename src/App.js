import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getSecretWord } from "./actions";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";

function App() {
  const success = useSelector(state => state.success);
  const guessedWords = useSelector(state => state.guessedWords);
  const secretWord = "party";

  useEffect(() => {
    getSecretWord();
  }, []);

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
