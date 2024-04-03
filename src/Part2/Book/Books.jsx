import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


const Books = () => {

    const [tapIndex, setTapIndex] = useState(0)

    return (
        <div>
            <h1></h1>

            <div>




                <div className="justify-center -ml-20">
                <h1 className="text-5xl ">Books</h1>
                </div>
<br />
                <div>
                <div className="bg-green-500  justify-center items-center  w-[90%] rounded-lg">
                   
                   
                    
                    <div className="justify-center items-center">
                        <div className="inline-flex items-center divide-x rounded bg-violet-400 text-gray-800 divide-gray-700 my-8">
                        <button type="button" className="px-8 py-3">Sort By</button>
                        <button type="button" title="Toggle dropdown" className="p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                      
                        </div>
                    </div>
                    </div>
                </div>
                    <br />
                    <br />



                     <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800 ">
                           
                            <Link 
                                onClick={() => setTapIndex(1)} 
                                to=''
                                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tapIndex === 1 ? 'border border-b-0': 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                </svg>
                                <span>Read Book</span>
                            </Link>
                            <Link  
                                onClick={() => setTapIndex(2)} 
                                to={`wishlist`}
                                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tapIndex === 2 ? 'border border-b-0': 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                </svg>
                                <span>Wishlist</span>
                                
                            </Link>
                           
                           
                                    
                            
                            
                     </div>

                     {/* <div>
                     <Outlet></Outlet>
                     </div> */}

            </div>

<br />

            <div className="my-40 mr-[90%]">
                     <Outlet></Outlet>
             </div>

        </div>
        
    );
};

export default Books;