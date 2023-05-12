import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";
import { useState } from "react";

const AllCoffee = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div>
      <h1 className="text-center">total coffee {coffees.length} </h1>
      <div className="grid grid-cols-2 gap-6 w-10/12 mx-auto mt-10">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            allCoffee={{ coffees, setCoffees }}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default AllCoffee;
