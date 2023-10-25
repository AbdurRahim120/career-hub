import { useEffect, useState } from "react";
import List from "../../list/List";

const CategoryList = () => {
  const [catagorylist, setCatagorylist] = useState([])

  useEffect(()=> {
    fetch('categories.json')
    .then(res => res.json())
    .then(data => setCatagorylist(data))
  },[])
  return (
    <div>
      <div className="text-center mt-10 mb-5">
      <h2 className=" text-4xl font-semibold my-2">Job Category List</h2>
      <p className="text-xs">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {
          catagorylist.map(list => <List key={list.id} list={list}></List>)
        }
      </div>
    </div>
  );
};

export default CategoryList;
