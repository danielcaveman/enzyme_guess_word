import { storeFactory } from "../test/testUtils";
import { guessWord } from "./actions"

describe("guessWord action dispatcher", () => {
    const secretWord = "party";
    const unsuccessfulGuess = "train";

    describe("no guess words", () => {
        let store;
        const initialState = { secretWord }
        beforeEach(() => {
            store = storeFactory(initialState);
        })
        
        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const expectedState = { 
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unsuccessfulGuess,
                    letterMatchCount: 3,    
                }],
            };
            const newState = store.getState();
            expect(newState).toEqual(expectedState);
        });
        test('updates state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord));
            const expectedState = { 
                ...initialState,
                success: true,
                guessedWords: [{
                    guessedWord: secretWord,
                    letterMatchCount: 5,    
                }],
            };
            const newState = store.getState();
            expect(newState).toEqual(expectedState);
        });    
    });
/*     describe("some guess words", () => {
        test('updates state correctly for unsuccessful guess', () => {

        });
        test('updates state correctly for successful guess', () => {

        });    
    }); */
})