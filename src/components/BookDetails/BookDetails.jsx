import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb, addToWish } from '../../utilities/addToDb';

const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const bookData = useLoaderData();
    // console.log(bookId);
    console.log(typeof bookData);
    console.log('bookdata:', bookData);
    const book = bookData.find(book => book.bookId === id);
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    console.log(tags);
    // console.log(book, bookData, bookId, id);


    const handleMarkRead = (id) => {
        addToDb(id);
    }
    const handleWishList = (id) => {
        addToWish(id);
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <figure className='rounded-2xl bg-base-200 py-10 px-16 shadow-lg'>
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl" />
                </figure>

                <div className='ml-8 space-y-4'>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <div className='border border-gray-100'></div>
                    <p className='text-lg'><span className='font-bold'>By:</span> {author}</p>
                    <div className='border border-gray-100'></div>
                    <p>{category}</p>
                    <div className='border border-gray-100'></div>
                    <p><span className='font-bold'>Review:</span> {review}</p>
                    <div>
                        <p><span className='font-bold'>Tag:</span> {tags.map((tag, idx) => <button className='btn btn-xs bg-green-200 text-green-600 border-0 mr-2' key={idx}>{tag}</button>)}</p>
                    </div>
                    <div className='border border-gray-100'></div>
                    <div className='w-6/12'>
                        <div className='flex justify-between'>
                            <span className='text-gray-500'>Number of Pages: </span><span className=''>{totalPages}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-gray-500'>Publisher: </span><span className=''>{publisher}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-gray-500'>Year of Publishing: </span><span className='text-end'>{yearOfPublishing}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-gray-500'>Rating: </span><span className=''>{rating}</span>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => handleMarkRead(id)} className='btn mr-2'>Mark as Read</button>
                        <button onClick={() => handleWishList(id)} className="btn btn-accent text-white">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;