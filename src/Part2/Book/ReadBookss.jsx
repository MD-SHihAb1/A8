// import { useEffect, useState } from "react";
// import Book from "./Book";
// import { getBooks } from "./utils";


// const ReadBookss = () => {
   

//       const [part, setPart] = useState([])
//       useEffect(() =>{
//         fetch('/public/Book.json')
//         .then(res => res.json())
//         .then(data => setPart(data))
//     }, [])

//       useEffect(() =>{
//         const storedBooks = getBooks()
//         getBooks(storedBooks)
//       },[])
    
//     return (
//         <div>



        
//         <h1>hiiiiiiiiiiiiiiii</h1>




//                <div className='md: grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 my-24'>
                    
//                     {
//                            part.map(part => <Book 
//                                key={part.bookId} 
//                                book={part}>

//                                </Book>)
//                        }
//                    </div>
//         </div>
//     );
// };

// export default ReadBookss;