import { useEffect, useState } from "react";
import Book from "./Book";
import { getBooks } from "./utils";




const ReadBooks = () => {

      const [part, setPart] = useState([])

      useEffect(() =>{
        const storedBooks = getBooks()
        setPart(storedBooks)
      },[])
    
    return (
      
        <div>

                <h1>Read Book : {part.length}</h1>
  
               <div className='md: grid grid-cols-1 gap-16 sm:grid-cols-1 lg:grid-cols-1 my-24'>
                    
                    {
                           part.map(part => <Book
                              deletable = {true}
                               key={part.bookId} 
                               book={part}>

                               </Book>)
                       }
                   </div>
        </div>
    );
};

export default ReadBooks;