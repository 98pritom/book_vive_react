import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBooks, getStoredWish } from '../../utilities/addToDb';

const ListedBooks = () => {

    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

    const booksData = useLoaderData();
    console.log(booksData);

    useEffect(() => {
        const storedBooks = getStoredBooks();
        const readList = booksData.filter(book => storedBooks.includes(book.bookId));
        setReadList(readList);
        const wishedBooks = getStoredWish();
        const wishedList = booksData.filter(book => wishedBooks.includes(book.bookId));
        setWishList(wishedList);
    }, []);
    // console.log(readList);
    return (
        <div>
            <h2 className='text-center bg-gray-100 py-4 rounded-lg text-lg mt-5 mb-5 font-bold'>Listed books</h2>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='tex-lg font-semibold'>Total read books: {readList.length}</h2>
                </TabPanel>
                <TabPanel>
                    <h2 className='tex-lg font-semibold'>Added to wishlist: {wishList.length}</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ListedBooks;