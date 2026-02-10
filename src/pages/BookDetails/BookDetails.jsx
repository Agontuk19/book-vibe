import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();
    const books = useLoaderData();
    const book = books.find(book => book.bookId === parseInt(id));
    const {  bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div className='flex flex-col lg:flex-row gap-3 lg:gap-10 mt-10 mb-6 lg:my-15 px-7 md:px-10 lg:px-20 xl:px-30'>
            <div className='flex-1 bg-[#EFEEEA] flex justify-center items-center rounded-lg p-5 py-10 '>
                <img src={image} alt="" className='max-h-150 rounded-lg'/>
            </div>
            <div className='flex-1 py-8 roboto space-y-1'>
                <h1 className='playfair font-bold text-4xl'>{bookName}</h1>
                <p className='text-xl pb-1'>{author}</p>
                <hr className='text-[#EFEEEA]'/>
                <p>{category}</p>
                <hr className='text-[#EFEEEA]'/>
                <p className='py-1'>
                    <span className='font-bold'>Review: </span>
                    <span>{review}</span>
                </p>
                <div className='flex gap-3 py-2'>
                    <p>Tag: </p>
                    {
                        tags.map(tag => {
                            return <div className='border border-[#09637E] bg-[#09637e18] rounded-3xl px-2 text-[0.8rem] py-0.5 w-fit'>{tag}</div>
                        })
                    }
                </div>
                <hr className='text-[#EFEEEA]'/>
                <div className='grid grid-cols-[170px_1fr] gap-y-2 my-3'>
                    <span>Number of Pages: </span>
                    <span>{totalPages}</span>
                    <span>Publisher: </span>
                    <span>{publisher}</span>
                    <span>Year of Publishing: </span>
                    <span>{yearOfPublishing}</span>
                    <span>Rating: </span>
                    <span>{rating}</span>
                </div>
                <div className='flex gap-3 text-white mt-3'>
                    <button className='bg-[#09637E] px-4 py-2 rounded-3xl'>Read</button>
                    <button className='bg-[#09637E] px-4 py-2 rounded-3xl'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;