import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const PagesToRead = () => {
    const allBooks = useLoaderData();
    return (
        <div className='my-5 w-full h-[400px] sm:h-[500px] md:h-[600px] flex justify-center items-center px-4'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={allBooks}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <Bar dataKey="totalPages" fill="#8884d8" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Tooltip />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PagesToRead;