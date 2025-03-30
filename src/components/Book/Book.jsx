import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, bookName, author, image, tags, category, rating } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm p-6 rounded-2xl">
                <figure className='bg-gray-200 py-8 rounded-2xl'>
                    <img
                        src={image}
                        className='h-[166px]'
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-1.5'>
                        {
                            tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-green-100 text-green-600 rounded-4xl border-0 p-3">{tag}</button>)
                        }
                    </div>

                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className='border-t-1 border-dashed mt-2 mb-2'></div>
                    <div className="card-actions justify-between items-center">
                        <div className="text-lg">{category}</div>
                        <div className="flex justify-center items-center text-lg gap-2">{rating} <CiStar className="text-2xl" /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;