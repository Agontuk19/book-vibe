import { Suspense, use } from 'react';
import Book from '../Book/Book';


const bookPromise = fetch('./booksData.json')
    .then(res => res.json())

const Books = () => {
    const books = use(bookPromise);
    return (
        <div className='mb-15'>
            <h1 className='text-4xl text-center p-6 playfair font-bold'>Books</h1>
            <Suspense fallback={<span>Loading...</span>}>
                <div className='px-5 md:px-10 lg:px-20 xl:px-30 grid grid-cols-2 lg:grid-cols-3 gap-2 items-stretch'>
                    {
                        books.map(book => {
                            return <Book key={book.bookId} book={book}></Book>
                        })
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;