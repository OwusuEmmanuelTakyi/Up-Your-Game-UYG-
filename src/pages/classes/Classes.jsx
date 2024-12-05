import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useStudent from "../../hooks/useStudent";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const [isStudent] = useStudent();
  const { user } = useContext(AuthContext);

  // Static class data
  const classes = [
    {
      _id: "648589b7d4423b826e432f0e",
      instructorName: "Zitu",
      instructorEmail: "jitu@gmail.com",
      className: "Athletics (Running)",
      price: 50,
      availableSeats: 196,
      classImg: "https://i.ibb.co/XXJVMrW/Archery.jpg",
      status: "Approve",
      enrolledStudents: 54,
      feedback: "No feedback yet"
    },
    {
      _id: "648589f3d4423b826e432f0f",
      instructorName: "Zitu",
      instructorEmail: "jitu@gmail.com",
      className: "Badminton",
      price: 40,
      availableSeats: 92,
      classImg: "https://i.ibb.co/G2dKT3K/badminton.jpg",
      status: "Approve",
      enrolledStudents: 68,
      feedback: "No feedback yet"
    },
    {
      _id: "64858af5d4423b826e432f10",
      instructorName: "Tushar",
      instructorEmail: "tushar@gmail.com",
      className: "Basketball",
      price: 45,
      availableSeats: 220,
      classImg: "https://i.ibb.co/Lz2ZXmc/Basketball.jpg",
      status: "Approve",
      enrolledStudents: 70,
      feedback: "No feedback yet"
    },
    {
      _id: "64858b1cd4423b826e432f11",
      instructorName: "Jasmin",
      instructorEmail: "jasmin@gmail.com",
      className: "Football",
      price: 55,
      availableSeats: 150,
      classImg: "https://i.ibb.co/JF4hB1s/Football.jpg",
      status: "Approve",
      enrolledStudents: 80,
      feedback: "No feedback yet"
    },
    {
      _id: "64858c4f54423b826e432f12",
      instructorName: "Alex",
      instructorEmail: "alex@gmail.com",
      className: "Tennis",
      price: 60,
      availableSeats: 100,
      classImg: "https://i.ibb.co/0h1Kb6Z/Tennis.jpg",
      status: "Approve",
      enrolledStudents: 120,
      feedback: "No feedback yet"
    },
    {
      _id: "64858d53d4423b826e432f13",
      instructorName: "Martha",
      instructorEmail: "martha@gmail.com",
      className: "Swimming",
      price: 65,
      availableSeats: 130,
      classImg: "https://i.ibb.co/7rL9g1h/Swimming.jpg",
      status: "Approve",
      enrolledStudents: 110,
      feedback: "No feedback yet"
    },
    {
      _id: "64858e72d4423b826e432f14",
      instructorName: "Kiran",
      instructorEmail: "kiran@gmail.com",
      className: "Cycling",
      price: 40,
      availableSeats: 200,
      classImg: "https://i.ibb.co/FH8x9Lc/Cycling.jpg",
      status: "Approve",
      enrolledStudents: 90,
      feedback: "No feedback yet"
    },
    {
      _id: "64858f95d4423b826e432f15",
      instructorName: "John",
      instructorEmail: "john@gmail.com",
      className: "Boxing",
      price: 70,
      availableSeats: 80,
      classImg: "https://i.ibb.co/V1Lvgh7/Boxing.jpg",
      status: "Approve",
      enrolledStudents: 40,
      feedback: "No feedback yet"
    }
  ];

  // handle  notification for login
  const handleNotifaction = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You have to log in first to select the classes!",
    });
  };

  return (
    <>
      <Helmet>
        <title>Sports Classes</title>
      </Helmet>
      <div className="classes-container">
        <h1 className="classes-heading">Available Sports Classes</h1>
        <div className="classes-grid">
          {classes.map((classItem) => (
            <div className="class-card" key={classItem._id}>
              <img
                src={classItem.classImg}
                alt={classItem.className}
                className="class-img"
              />
              <div className="class-info">
                <h2 className="class-name">{classItem.className}</h2>
                <p className="class-price">Price: ${classItem.price}</p>
                <p className="class-seats">
                  Available Seats: {classItem.availableSeats}
                </p>
                <p className="class-instructor">
                  Instructor: {classItem.instructorName}
                </p>
                <button
                  className="select-btn"
                  onClick={handleNotifaction}
                >
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .classes-container {
          padding: 20px;
          background-color: #f4f4f4;
        }

        .classes-heading {
          text-align: center;
          font-size: 2rem;
          color: #333;
          margin-bottom: 30px;
        }

        .classes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          justify-items: center;
        }

        .class-card {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          width: 100%;
          transition: transform 0.3s ease;
        }

        .class-card:hover {
          transform: scale(1.05);
        }

        .class-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .class-info {
          padding: 15px;
          text-align: center;
        }

        .class-name {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .class-price,
        .class-seats,
        .class-instructor {
          font-size: 1rem;
          margin: 5px 0;
          color: #555;
        }

        .select-btn {
          background-color: #007bff;
          color: #fff;
          border: none;
          padding: 10px 20px;
          font-size: 1rem;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .select-btn:hover {
          background-color: #0056b3;
        }
      `}</style>
    </>
  );
};

export default Classes;
