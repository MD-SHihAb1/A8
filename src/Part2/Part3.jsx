import { useEffect, useState } from "react";



const Part3 = () => {

    const [part, setPart] = useState([]);

    useEffect(() =>{
        fetch('Book.json')
        .then(res => res.json())
        .then(data => setPart(data))
    }, [])

    
	
    

    return (
		
        <div>

        <h1>book{part.length}</h1>

            <section className="">
	<div className="">
		
	
		<div className="">
			<a rel="noopener noreferrer" href="#" className=" ">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs text-gray-400">January 22, 2021</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a>
			
		
		
		</div>
		
	</div>
</section>


		
        </div>
    );
};

export default Part3;