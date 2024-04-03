// import { useEffect, useState } from "react";
// import { getBooks } from "../utils";
// import Book from "../Book";
// import Details from "../Details";

// const Rbooks = () => {
//     const [part, setPart] = useState([])
//     useEffect(() =>{
//       fetch('/public/Book.json')
//       .then(res => res.json())
//       .then(data => setPart(data))
//   }, [])

//     useEffect(() =>{
//       const storedBooks = getBooks()
//       getBooks(storedBooks)
//     },[])
  
//     return (
//         <div>
//                   <div>
//                <div className='md: grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 my-24'>
                    
//                     {
//                            part.map(part => <Details 
//                                key={part.bookId} 
//                                book={part}>

//                                </Details>)
//                        }
//                    </div>
//         </div>
//         </div>
//     );
// };

// export default Rbooks;