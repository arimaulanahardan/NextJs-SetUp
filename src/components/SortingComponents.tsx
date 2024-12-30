// find min age, show the name
// find max age, show the name
// sort by min age
// sort by max age

import React from "react";
import { data } from "../api/mocks/data";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";

const SortingComponents = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>No. 2 Sorting</CardTitle>
      </CardHeader>
      <div className="text-2xl font-bold">Min Age</div>
      <div className="text-lg">
        Name:{" "}
        {
          data.reduce((prev, current) =>
            prev.age < current.age ? prev : current
          ).name
        }
      </div>
      <div className="text-2xl font-bold">Max Age</div>
      <div className="text-lg">
        Name:{" "}
        {
          data.reduce((prev, current) =>
            prev.age > current.age ? prev : current
          ).name
        }
      </div>
      <div className="text-2xl font-bold">Sort by Min Age</div>
      <div className="text-lg">
        {data
          .sort((a, b) => a.age - b.age)
          .map((item) => (
            <div key={item.id}>
              {item.name} - {item.age}
            </div>
          ))}
      </div>
      <div className="text-2xl font-bold">Sort by Max Age</div>
      <div className="text-lg">
        {data
          .sort((a, b) => b.age - a.age)
          .map((item) => (
            <div key={item.id}>
              {item.name} - {item.age}
            </div>
          ))}
      </div>
    </Card>
  );
};

export default SortingComponents;
