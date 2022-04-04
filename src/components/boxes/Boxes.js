import React, { useState } from "react";
import boxesData from "./boxesData";

export default function Boxes() {
  let [boxesArray, setBoxesArray] = useState(boxesData);
  const allBoxes = boxesArray.map(box => (
    <div className="boxes" key={box.id}></div>
  ));
  return <main>{allBoxes}</main>;
}
