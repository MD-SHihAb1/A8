import { Link } from "react-router-dom";


const Book = ({book}) => {
    const {bookName, author, image, review, totalPages, rating, category, tags, tags1, publisher, yearOfPublishing, bookId} = book;
    return (
        <div>
            <h2 className="text-4xl">{}</h2>




             


            <Link to={`/book/${bookId}`}>
                
            <div className="card w-96 bg-base-100 shadow-xl transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>

                <div>
                <div className="card-actions justify-center mt-5 ">
                    <div className="badge badge-outline text-green-500">{tags}</div> 
                    <div className="badge badge-outline text-green-500">{tags1}</div>
                </div>
                </div>

                <div className="card-body items-center text-center">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By:  {author}</p>

                    <hr />
                    
                    <div className="flex gap-32">
                        <p>{category}</p>
                        <div className="flex">
                        <p>{rating} </p>
                            <img className="w-5 h-5" src="https://i.ibb.co/QF9VNk8/Vector.png" alt="" />
                        </div>
                        

                    </div>

                   
                    
                </div>
                </div>
            </Link>


                {
                    
                }

        </div>
    );
};



export default Book;