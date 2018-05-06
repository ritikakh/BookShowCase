export function selectBook(book) {
    // selectBook is an ActionCreatoe, it needs to return an action, an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}