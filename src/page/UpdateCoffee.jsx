import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const navigate = useNavigate();
  const loaderCoffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } =
    loaderCoffee;
  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = { name, chef, supplier, taste, category, details, photo };
    console.log(newCoffee);
    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: true,
          }).then((res) => {
            if (res.isConfirmed) {
              navigate("/");
            }
          });
        } else {
          Swal.fire({
            icon: "warning",
            title: "Sorry no update found",
            showConfirmButton: true,
          });
        }
      });
  };
  return (
    <div className="w-9/12 mx-auto ">
      <Link
        to={"/"}
        className="font-Rancho btn btn-outline btn-primary tracking-wider"
      >
        Back to Home
      </Link>
      <div className="bg-[#F4F3F0] px-24 py-16 mt-6">
        <h2 className="text-center">Add New Coffee</h2>
        <p className="text-center w-8/12 mx-auto">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleUpdateCoffee} className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={name}
                placeholder="Enter coffee name"
                className="input input-bordered"
                name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <input
                type="text"
                defaultValue={chef}
                placeholder="Enter coffee chef"
                className="input input-bordered"
                name="chef"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                defaultValue={supplier}
                placeholder="Enter coffee supplier"
                className="input input-bordered"
                name="supplier"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                defaultValue={taste}
                placeholder="Enter coffee taste"
                className="input input-bordered"
                name="taste"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                defaultValue={category}
                placeholder="Enter coffee category"
                className="input input-bordered"
                name="category"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                defaultValue={details}
                placeholder="Enter coffee details"
                className="input input-bordered"
                name="details"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              defaultValue={photo}
              placeholder="Enter photo URL"
              className="input input-bordered"
              name="photo"
            />
          </div>
          <button type="submit" className="btn btn-success w-full mt-6">
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
