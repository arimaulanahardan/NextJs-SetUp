import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "./ui/card";

const CounterComponent = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>No. 1 Counter</CardTitle>
      </CardHeader>
      <div className="text-center text-2xl font-bold">{count}</div>
      <CardContent>
        <div className="flex space-x-4 text-center justify-center">
          <Button onClick={increment}>Increment</Button>
          <Button onClick={decrement}>Decrement</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CounterComponent;
