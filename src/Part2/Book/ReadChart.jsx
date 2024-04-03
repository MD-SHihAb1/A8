import { BarChart, Bar, XAxis, YAxis, Line, Tooltip, } from 'recharts';

const ReadChart = () => {

    const booksPage = [
        {
            "bookName": "The Great Gatsby",
            "totalPages": 180
        },
        {
            "bookName": "To Kill a Mockingbird",
            "totalPages": 324
        },
        {
            "bookName": "1984",
            "totalPages": 328
        },
        {
            "bookName": "The Catcher in the Rye",
            "totalPages": 224
        },
        {
            "bookName": "Pride and Prejudice",
            "totalPages": 432
        },
        {
            "bookName": "Harry Potter",
            "totalPages": 320
        },
        {
            "bookName": "The Hobbit",
            "totalPages": 300
        },
        {
            "bookName": "The Hitchhiker's Guide to the Galaxy",
            "totalPages": 224
        },
        {
            "bookName": "The Da Vinci Code",
            "totalPages": 454
        }
    ];
    
   
 
      


    return (
        <div className=' -mx-72'>
            <BarChart width={1800} height={800} data={booksPage}> 
                <XAxis dataKey="bookName" tick></XAxis>
                <YAxis dataKey="totalPages"></YAxis>
                <Bar dataKey="totalPages" fill="#8884d8"
                />
                <Tooltip></Tooltip>
            </BarChart>
            
        </div>
    );
};

export default ReadChart;