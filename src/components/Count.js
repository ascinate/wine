import React, {useState} from "react";
import { FaRegTimesCircle , FaPlus , FaMinus } from "react-icons/fa";
import $ from 'jquery';

export default function Count() {
  let [count, setCount] = useState(1);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }
  return (
    <>

    <div className="form-group">
      <div className="input-group d-flex w-auto mt-3 align-items-center">
          
          <button className="minus" onClick={decrementCount}><FaMinus/></button>
        
          <input
          type="text"
          value={count}
          min="1"
          max="50"
           />
          <button className="plus" onClick={incrementCount}><FaPlus/></button>
      </div>
    </div>
     
      
    </>
  );
}