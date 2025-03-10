import rohit01 from "../Assets/Images/01_rohit.jpg";
import rohit02 from "../Assets/Images/02_rohit.jpg";
import AppleBasket from "./AppleBasket";
import { useState } from "react";
import { useParams } from "react-router";

// let leftAppleCount = 0
// let rightAppleCount = totalAppleCount - leftAppleCount
const AppleCounter = () => {
  const name = useParams();
  console.log(name.name);

  const totalAppleCount = 10;
  const [rightAppleCount, setRightAppleCount] = useState(0);
  const [leftAppleCount, setLeftAppleCount] = useState(
    totalAppleCount - rightAppleCount
  );

  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      setRightAppleCount(rightAppleCount - 1);
      setLeftAppleCount(leftAppleCount + 1);
    }
  };
  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      setLeftAppleCount(leftAppleCount - 1);
      setRightAppleCount(rightAppleCount + 1);
    }
  };
  return (
    <>
      <section className="Apple-container">
        <AppleBasket appleCount={leftAppleCount} basketName="Basket1" />
        <Button onClick={leftClickHandler} image={rohit01} title="left" />
        <Button onClick={rightClickHandler} image={rohit02} title="right" />
        <AppleBasket appleCount={rightAppleCount} basketName="Basket2" />
      </section>
    </>
  );
};

export default AppleCounter;
