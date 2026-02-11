import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredBook } from '../../utility/addToDB';
import ReadListBook from '../ReadListBook/ReadListBook';

const ReadList = () => {
    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState('')
    const allBook = useLoaderData();

    useEffect(() => {
        const storedBook = getStoredBook();
        const storedBookInt = storedBook.map(id => parseInt(id));
        const readListBooks = allBook.filter(book => storedBookInt.includes(book.bookId));
        setReadList(readListBooks);
    }, [allBook])

    const handleSort = (type) => {
        setSort(type);
        if (type === 'Pages') {
            const sortedByPages = [...readList.sort((a, b) => a.totalPages - b.totalPages)];
            setReadList(sortedByPages);
        }
        else if (type === 'Ratings') {
            const sortedByPages = [...readList.sort((a, b) => a.ratings - b.ratings)];
            setReadList(sortedByPages);
        }
    }
    return (
        <div>
            <h1 className='playfair text-3xl text-center font-bold bg-[#EFEEEA] mt-5 mb-3 mx-5 md:mx-10 lg:mx-20 xl:mx-30 my-4 py-4 rounded-lg'>Readlist Books</h1>
            <div className='flex justify-center items-center mb-10'>
                <div class="dropdown dropdown-center">
                    <div tabindex="0" role="button" class="btn m-1 bg-[#09637E] rounded-lg text-white">{sort ? `Sorted By (${sort})` : "Sort By"}</div>
                    <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort('Pages')}>Pages</a></li>
                        <li><a onClick={() => handleSort('Ratings')}>Ratings</a></li>
                    </ul>
                </div>
            </div>
            <div className='mx-5 md:mx-10 lg:mx-20 xl:mx-30 mb-15'>
                {
                    readList.map(book => {
                        return <ReadListBook book={book}></ReadListBook>
                    })
                }
            </div>
        </div>
    );
};

export default ReadList;