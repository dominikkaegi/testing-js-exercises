import React, { useState } from "react";

import Display from "components/Display";
import Button from "components/Button";
import HelperText from "components/HelperText";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const handleIncrease = (e) => {
    e.preventDefault();
    setCount(count + 1);

    if (alert) setShowAlert(false);
  };

  const handleDecrease = (e) => {
    e.preventDefault();
    if (count <= 0) {
      setShowAlert(true);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h3>Counter</h3>
      <Display value={count}></Display>
      <div>
        <Button type="button" onClick={handleIncrease}>Increase</Button>
        <Button type="button" onClick={handleDecrease}>Decrease</Button>
      </div>
      <HelperText show={showAlert} type="error">
        Can not go below 0
      </HelperText>
    </div>
  );
}
