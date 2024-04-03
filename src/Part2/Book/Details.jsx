
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { saveBook } from "./utils";
import { saveWishlist } from "./Tjs/Twoindex";


const Details = () => {

    const handleAddToBook = book =>{
        console.log(book)
        saveBook(book)
    }

    const handleAddToWish = wishlist => {
        console.log(wishlist)
        saveWishlist(wishlist)
    }

    const [bookData, setBookData] = useState(null); // State to store fetched book data
    const { bookId } = useParams(); // Get the bookId from URL params

    useEffect(() => {
        
        fetch('../../../public/Book.json')
            .then(res => res.json())
            .then(data => {
               
                const book = data.find(book => book.bookId === parseInt(bookId));
                setBookData(book); // Set the fetched book data to state
                console.log("Fetched Data:", book); // Log fetched book data
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [bookId]); // Fetch data when bookId changes

    if (!bookData) {
        return <div>Loading...</div>; // Render loading message while fetching data
    }

    return (
        <div>
          
           

            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="bg-base-200 w-2/3 h-96">
                    <img src={bookData.image} className="max-w-sm rounded-lg justify-center mx-36 my-24 " />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">{bookData.bookName}</h1>
                        <p className="py-6"> By: {bookData.author}</p>
                        <hr />
                        <br />
                        <p className="text-2xl">{bookData.category}</p>
                        <br />
                        <hr />
                        <br />
                        <h1><span className="text-2xl font-semibold">Review : </span>{bookData.review}</h1>
                        <br />
                        <div className="flex gap-6">
                        <h1 className="text-2xl font-semibold -my-2">Tag </h1>
                        
                        <div className="card-actions justify-start">
                        <div className="badge badge-outline text-green-500"># {bookData.tags}</div> 
                        <div className="badge badge-outline text-green-500"># {bookData.tags1}</div>
                        </div>
                        </div>
                        <br />
                        <hr />
                        <br />
                        <div className="-mx-60">
                            <h1><span className="text-slate-500">Number of Pages:</span> <span className="font-semibold mx-28">{bookData.totalPages}</span> </h1>
                            <br />
                            <h1><span className="text-slate-500">Publisher:</span> <span className="font-semibold mx-24">{bookData.author}</span> </h1>
                            <br />
                            <h1><span className="text-slate-500">Year of Publishing:</span> <span className="font-semibold mx-28">{bookData.yearOfPublishing}</span> </h1>
                            <br />
                            <h1><span className="text-slate-500">Rating:</span> <span className="font-semibold mx-32">{bookData.rating}</span> </h1>
                            <br />
                        </div>
                      
                      
                        <div className="flex gap-8">
                            <div>
                            <button className="btn"> <Link to='/book/read'><a>Read</a></Link> </button>
                            </div>
                            <div>
                            
                            <Link to='/book/read'><li><a>Pages to Read</a></li></Link>
                            </div>
                            {/* <div>
                            <button onClick={handleAddToBook} className="btn btn-active btn-accent">Wishlist</button>
                            </div> */}
                            <div>
                            <button onClick={() => handleAddToWish(bookData)} className="btn btn-active btn-accent">Wishlist</button>
                            </div>
                            <div>
                            <button onClick={() => handleAddToBook(bookData)} className="btn btn-active btn-accent">Add to Wishlist</button>
                            </div>
                            
                            {/* <button onClick={handleAddToBook} className="btn btn-active btn-accent">Wishlist</button> */}




                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

 


};

export default Details;
