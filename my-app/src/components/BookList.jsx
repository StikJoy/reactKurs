const bookList = [];

export default bookList;

export function addItemIfNotExists(item) {
    const index = bookList.indexOf(item);

    if (index === -1) {
        // Если элемент не найден, добавляем его
        bookList.push(item);
    } else {
        // Если элемент уже есть в списке, удаляем его
        bookList.splice(index, 1);
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

