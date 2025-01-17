import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            
                        <div className="navbar bg-base-100">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Home</a></li>
                    <li>
                    <NavLink to='/book/read'><li><a>Listed Books</a></li></NavLink>
                    </li>
                    <li><a>Pages to Read</a></li>

                    <NavLink to='pagetoread'><li><a>Pages to Read</a></li></NavLink>

                  </ul>



              </div>
            <Link to='/'>
            <a className="btn btn-ghost text-xl">Book Vibe</a>
            </Link>
            </div>
            <div className="navbar-center hidden lg:flex gap-5">
              <ul className="menu menu-horizontal px-1">
              <NavLink to='/'>
              <div><button className="btn btn-outline btn-success h-0">Home</button></div>
              </NavLink>
                <div>
                  <NavLink to='/book/read'><li><a>Listed Books</a></li></NavLink></div>
                <NavLink to='pagetoread'><li><a>Pages to Read</a></li></NavLink>
                <NavLink to=''><li><a>About</a></li></NavLink>

                

              </ul>
            </div>
            <div className="navbar-end gap-7">
            <div>
            <Link to='login'><button className="btn btn-success">Login</button></Link>
            </div>
            <button className="btn btn-active btn-primary">Sign Up</button>
            </div>
          </div>


        </div>
    );
};

export default Navbar;