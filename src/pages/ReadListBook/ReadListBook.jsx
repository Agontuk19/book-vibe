import React from 'react';
import Calendar from '../../assets/calendar.png'
import { NavLink } from 'react-router';

const ReadListBook = ({ book }) => {
    const { bookId, bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div className='flex border-2 border-[#EFEEEA] rounded-lg mb-2'>
            <div className='md:bg-[#EFEEEA] overflow-hidden rounded-lg m-5 md:py-5 md:px-10 flex justify-center items-center shrink-0 w-32  md:w-1/4 lg:w-[20%] xl:w-[17%]'>
                <img className='md:h-40 rounded-lg md:w-auto w-full object-cover' src={image} alt="" />
            </div>
            <div className='py-5 pr-5 roboto md:space-y-2'>
                <p className='playfair font-bold text-xl md:text-3xl'>{bookName}</p>
                <p>{author}</p>
                <div className='flex flex-col md:flex-row gap-1 md:py-1'>
                    <div className='hidden md:flex gap-2'>
                        <span className='font-semibold'>Tags:</span>
                        {
                            tags.map((tag, index) => {
                                return <div key={index} className='border border-[#09637E] bg-[#09637e18] rounded-3xl px-2 text-[0.8rem] py-0.5 w-fit'>{tag}</div>
                            })
                        }
                    </div>
                    <div className='justify-center items-center gap-1 ml-5 hidden md:flex'>
                        <img src={Calendar} alt="" className='h-5 pb-0.5' />
                        <p>Year of Publishing: <span>{yearOfPublishing}</span></p>
                    </div>
                </div>
                <div className='md:flex gap-10 items-center'>
                    <div>
                        <p><span className='font-semibold'>Publisher: </span> <span>{publisher}</span></p>
                    </div>
                    <div className='hidden md:block'>
                        <p><span className="font-semibold">Page: </span> <span>{totalPages}</span></p>
                    </div>
                </div>
                <hr className='text-[#EFEEEA] mt-1 md:mt-2' />
                <div className='flex flex-col md:flex-row gap-2 md:gap-4 mt-2 md:mt-3'>
                    <div className='border border-[#09637E] bg-[#09637e18] md:text-[1rem] rounded-3xl px-3 py-1.5 w-fit hidden md:block'>Category: {category}</div>
                    <div className='border border-[#09637E] bg-[#09637e18] text-[0.8rem] md:text-[1rem] rounded-3xl px-2 py-1 md:px-3 md:py-1.5 w-fit'>Rating: {rating}</div>
                    <NavLink to={`/bookDetails/${bookId}`}><button className="bg-[#09637E] px-5 py-1.5 text-white rounded-3xl mr-3">View Details</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default ReadListBook;