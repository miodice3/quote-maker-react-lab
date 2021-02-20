// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {
    return {
        type: 'ADD_QUOTE',
        quote
    }
}

export const removeQuote = Integer => {
    // console.log("REMOVE ACTION", Integer)
    return {
        type: 'REMOVE_QUOTE',
        quoteId: Integer
    }
}

export const upvoteQuote = Integer => {
    return {
        type: 'UPVOTE_QUOTE',
        quoteId: Integer
    }
}

export const downvoteQuote = Integer => {
    return {
        type: 'DOWNVOTE_QUOTE',
        quoteId: Integer
    }
}