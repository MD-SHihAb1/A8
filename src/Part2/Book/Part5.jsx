import { Link } from "react-router-dom";


const Part5 = () => {
    
    return (
        <div>
            <Link to='/'
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline ">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">hi</h3>
					<span className="text-xs text-gray-400">hi</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</Link>
        </div>
    );
};

export default Part5;