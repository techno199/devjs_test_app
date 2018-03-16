import { ADD_SEARCH_KEYWORD, DELETE_SEARCH_KEYWORD } from "../actons";

export function searchReducer(
    state = {
        keyWords: [],
        priceSelected: {
            min: 0,
            max: 0
        }
    },
    action
) {
    switch (action.type) {
        case ADD_SEARCH_KEYWORD: {
            let newKeyWords;
            if (state.keyWords.findIndex((kw) => kw === action.keyWord) < 0) {
                newKeyWords = state.keyWords.slice().push(action.keyWord);
            }

            return {
                ...state,
                keyWords: newKeyWords
            }
        }
        case DELETE_SEARCH_KEYWORD: {
            let newKeyWords = state.keyWords.slice().filter((kw) => kw === action.keyWord);
            return {
                ...state,
                keyWods: newKeyWords
            }
        }
        default: {
            return state;
        }
    }
}