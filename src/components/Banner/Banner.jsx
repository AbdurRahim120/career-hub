
const Banner = () => {
    return (
        <div className="flex items-center justify-center">
           <div className="flex-1">
            <h1 className="text-5xl font-bold ">One Step <br />Closer To Your <br /><span className=" text-[#7E90FE]">Dream Job</span></h1>
            <p className="text-sm my-6 w-[400px]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className="btn btn-primary">Get Started</button>
           </div>
           <div className="flex-1">
            <img className="p-8" src="user.png" alt="" />
           </div>
        </div>
    );
};

export default Banner;