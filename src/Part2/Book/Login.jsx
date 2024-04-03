

const Login = () => {
    return (
        <div>
                 <div className="">
                            <div className="hero-content flex-col lg:flex-row-reverse ">
                                   
                                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 transition border-2">
                                    <form className="card-body">
                                    <h1 className="text-5xl font-bold">Login now!</h1>
                                        <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                        </div>
                                       
                                        <button className="btn overflow-hidden relative w-64 bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-orange-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-orange-200 hover:before:animate-ping transition-all duration-300">
                                        <span className="relative">Login</span>
                                    </button>
                                    </form>
                                    </div>
                            </div>
                </div>
        </div>
    );
};

export default Login;