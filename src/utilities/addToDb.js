const getStoredBooks = () => {
    const storedListStr = localStorage.getItem('read');
    if (storedListStr) {
        return JSON.parse(storedListStr);
    } else {
        return [];
    }
}
const addToDb = (id) => {
    const storedBooks = getStoredBooks();
    if (storedBooks.includes(id)) {
        console.log('already added');
        return;
    } else {
        storedBooks.push(id);
        const storedBooksStr = JSON.stringify(storedBooks);
        localStorage.setItem('read', storedBooksStr);
    }
}

const getStoredWish = () => {
    const storedListStr = localStorage.getItem('wish');
    if (storedListStr) {
        return JSON.parse(storedListStr);
    } else {
        return [];
    }
}
const addToWish = (id) => {
    const storedBooks = getStoredWish();
    if (storedBooks.includes(id)) {
        console.log('already added');
        return;
    } else {
        storedBooks.push(id);
        const storedBooksStr = JSON.stringify(storedBooks);
        localStorage.setItem('wish', storedBooksStr);
    }
}
export { addToDb, getStoredBooks, addToWish, getStoredWish }