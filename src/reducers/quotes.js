// import uuid from "uuid";

export default function quotesReducer(
  state = [],
  action) {

  let index;
  let quote;
  
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      const quotes = state.filter(quote => quote.id !== action.quoteId)
      return quotes;
    case "UPVOTE_QUOTE":
      quote = state.find(quote => quote.id === action.quoteId); //removed obj returned in array
      let index = state.findIndex(quote => quote.id === action.quoteId)
      quote.votes += 1;

      return [
        ...state.slice(0, index),
        quote,
        ...state.slice(index + 1)
      ]

      case "DOWNVOTE_QUOTE":
        quote = state.find(quote => quote.id === action.quoteId); //removed obj returned in array
        let indexdn = state.findIndex(quote => quote.id === action.quoteId)
        
        if (quote.votes >= 1){
          quote.votes -= 1;
        }

  
        return [
          ...state.slice(0, indexdn),
          quote,
          ...state.slice(indexdn + 1)
        ]

    default:
      return state;
  }
}