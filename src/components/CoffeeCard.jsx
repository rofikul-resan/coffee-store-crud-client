/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, allCoffee }) => {
  const { _id, name, chef, supplier, category, photo } = coffee;
  const { coffees, setCoffees } = allCoffee;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remainCoffee = coffees.filter(
                (coffee) => coffee._id !== id
              );
              setCoffees(remainCoffee);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-52" src={photo} alt="Movie" />
        </figure>
        <div className="flex w-full justify-between items-center">
          <div className="card-body ">
            <h2 className="card-title">{name}</h2>
            <p>{chef}</p>
            <p>{supplier}</p>
            <p>{category}</p>
          </div>
          <div className="btn-group btn-group-vertical space-y-3 mr-6">
            <button className="btn w-full ">view</button>
            <Link to={`/update-coffee/${_id}`}>
              <button className="btn w-full">Edit</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn w-full">
              Delete
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
