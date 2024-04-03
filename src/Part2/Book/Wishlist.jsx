import { useEffect, useState } from "react";
import Book from "./Book";
import { getWishlist } from "./Tjs/Twoindex";



const Wishlist = () => {


    const [part, setPart] = useState([])

    useEffect(() =>{
      const storedWishlist = getWishlist()
      setPart(storedWishlist)
    },[])

    return (
        <div>
          
           <h1>Wishlist Book : {part.length}</h1>
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

export default Wishlist;