import { LuUsers } from "react-icons/lu";
import { BiSpreadsheet } from "react-icons/bi";
import { Link } from "react-router-dom";

const ReadAndWish = ({ book }) => {
    const { bookId, bookName, author, image, tags, category, rating, yearOfPublishing, publisher, totalPages } = book;
    return (
        <div className="card card-side bg-base-100 p-6 rounded-2xl border border-gray-200 md:h-[280px] lg:h-[277px] my-5">
            <figure className='bg-gray-100 rounded-2xl p-6'>
                <img
                    src={image} className='h-[172px] w-[130px] object-fill' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <span>By: {author}</span>
                <div>
                    <p>Tag:{tags.map((tag, idx) => <span key={idx} className='py-2 px-4 border-0 rounded-2xl bg-green-100 mx-2'>{tag}</span>)} <span>Year of publishing: {yearOfPublishing}</span></p>
                </div>
                <div className='flex space-x-7'>
                    <span className="flex items-center"><LuUsers className="mr-2" />
                        Publisher: {publisher}</span>
                    <span className="flex items-center"><BiSpreadsheet className="mr-2" />
                        Page: {totalPages}</span>
                </div>
                <div className="border border-gray-100"></div>
                <div className="card-actions">
                    <button className="btn border-0 rounded-4xl bg-blue-50 text-blue-400">Category: {category}</button>
                    <button className="btn border-0 rounded-4xl bg-orange-50 text-orange-400">Rating: {rating}</button>
                    <Link to={`/books/${bookId}`}><button className="btn border-0 rounded-4xl bg-green-500 text-white">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ReadAndWish;