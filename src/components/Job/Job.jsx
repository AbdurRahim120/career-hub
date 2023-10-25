import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    id
  } = job;
  return (
    <div className="card card-compact bg-base-200 shadow-xl">
      <figure>
        <img src={logo} alt="" className=" pt-8" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="text-[#9873FF] mr-4 px-5 py-2 font-extrabold border border-[#7E90FE] rounded">
            {remote_or_onsite}
          </button>
          <button className="text-[#9873FF] mr-4 px-5 py-2 font-extrabold border border-[#7E90FE] rounded">
            {job_type}
          </button>
        </div>
        <div className="flex mt-4">
          <h2 className="flex mr-5">
            <MdOutlineLocationOn className="text-2xl mr-1"></MdOutlineLocationOn>{" "}
            {location}
          </h2>
          <h2 className="flex">
            <AiOutlineDollarCircle className="text-2xl mr-1"></AiOutlineDollarCircle>{" "}
            {salary}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
