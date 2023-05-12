/* eslint-disable react/prop-types */

const CoffeeCard = ({ coffee }) => {
  const { name, chef, supplier, taste, category, details, photo } = coffee;
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
            <button className="btn ">view</button>
            <button className="btn">Edit</button>
            <button className="btn">Delete</button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
