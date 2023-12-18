const bookList = [];

export default bookList;

export function addItemIfNotExists(item) {
    if (!bookList.includes(item)) {
        bookList.push(item);
    }
}

export function removeItemIfExists(item) {
    const index = bookList.indexOf(item);
    if (index !== -1) {
        bookList.splice(index, 1);
    }
}

export function clearList() {
    bookList.splice(0, bookList.length);
}

