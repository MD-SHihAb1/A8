
import { useState } from 'react';
import './style.css'
import { useEffect } from 'react';
import Book from './Book/Book';





const Part2 = () => {

    const [part, setPart] = useState([]);

    useEffect(() =>{
        fetch('Book.json')
        .then(res => res.json())
        .then(data => setPart(data))
    }, [])





    







    return (

        

        <div>

            <div>
               
            </div>

            <h1 className="text-7xl justify-center mt-52">Books</h1>
            <div className='container'>
           

                     <div className='md: grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 my-24'>
                    
                     {
                            part.map(part => <Book 
                                key={part.bookId} 
                                book={part}>

                                </Book>)
                        }
                    </div>

                    {/* <div>
                        {
                            part.map(part => <ReadBookss
                            key={part.bookId}
                            books={part}
                            ></ReadBookss>)
                        }
                    </div> */}

                

            </div>

            
        </div>

                    

    );
};

export default Part2;