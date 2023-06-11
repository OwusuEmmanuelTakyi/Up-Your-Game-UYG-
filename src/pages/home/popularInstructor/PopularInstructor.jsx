import { useEffect, useState } from "react";

const PopularInstructor = () => {

    const [instructor, setInstructor] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/users/instructor")
        .then((res) => res.json())
        .then((data) => {
          setInstructor(data.slice(0,6));
        });
    }, []);
  


    return (
        <>
        <div className=" text-center ">
        <h2 className="text-4xl  text-black text-center font-bold my-10 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Popular Instructors
      </h2> 
        </div>

          {/* instructor card start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 py-20 px-5 bg-teal-100">
        {instructor?.map((instructor) => (
          <div key={instructor._id} className="card my-5 bg-base-100 shadow-xl rounded-none">
            <figure>
              <img
                className=" h-96 w-full object-cover "
                src={instructor?.image}
                alt="instructor image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title"><span className="text-[#AC9C63]  font-bold">Name: </span>{instructor?.name}</h2>
              <p className=" font-semibold tracking-tight"><span className="text-cyan-700 font-bold">Email: </span> {instructor?.email}</p>

            
            
            </div>
          </div>
        ))}
      </div>
            
        </>
    );
};

export default PopularInstructor;