import { forwardRef, useState, useImperativeHandle } from "react";

const Test2 = forwardRef(({ test }, ref) => {
  const [value, setValue] = useState("default");
  useImperativeHandle(ref, () => ({
    setValue: (newValue) => setValue(newValue),
  }));
  return (
    <div>
      <p>{value}</p>
      <p>{test}</p>
    </div>
  );
});

export default Test2;
