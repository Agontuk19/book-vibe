export const getStoredBook = () => {
    const storedBookString = localStorage.getItem('readList');
    if (storedBookString) {
        const storedBook = JSON.parse(storedBookString);
        return storedBook;
    }
    else {
        return [];
    }
}
const addToStoredDB = (id) => {
    const storedBook = getStoredBook();
    if(storedBook.includes(id)) {
        return;
    }
    else {
        storedBook.push(id);
        const data = JSON.stringify(storedBook);
        localStorage.setItem('readList', data);
    }
}
export default addToStoredDB;