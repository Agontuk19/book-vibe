import star from '../../assets/Vector.webp'
import { Link } from 'react-router';

const Book = ({ book }) => {
    const { bookId, bookName, author, image, rating, category, tags } = book;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className='border-2 border-[#EFEEEA] col-span-1 rounded-lg h-full'>
                <div className='h-50 md:h-85 bg-[#EFEEEA] px-5 py-5 m-3 rounded-lg flex justify-center items-center'>
                    <img src={image} alt="" className='w-auto max-h-full rounded-lg' />
                </div>
                <div className='flex px-3 gap-2 text-[#09637E] flex-col md:flex-row'>
                    {
                        tags.map(tag => {
                            return <div className='border border-[#09637E] bg-[#09637e18] rounded-3xl px-2 text-[0.8rem] py-0.5 w-fit'>{tag}</div>
                        })
                    }
                </div>
                <div className='px-3 pt-2 playfair font-bold text-2xl'>
                    <p>{bookName}</p>
                </div>
                <div className='px-3 pb-2'>
                    <p>{author}</p>
                </div>
                <hr className='mx-3 text-[#EFEEEA]' />
                <div className='flex justify-between items-center px-4 pt-2 pb-4'>
                    <p>{category}</p>
                    <p className='flex items-center mr-1'><span>{rating}</span><img src={star} alt="" className='h-4' /></p>
                </div>
            </div>
        </Link>
    );
};

export default Book;