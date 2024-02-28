import { useRef } from "react";
import Test2 from "./test2";
import Test3 from "./test3";

const Test1 = () => {
  const setValueRef = useRef(null);

  const handleSetValue = (newValue) => {
    if (setValueRef.current) {
      setValueRef.current.setValue(newValue);
    }
  };
  return (
    <div>
      <Test2 test="coucou" ref={setValueRef} />
      <Test3 setValue={handleSetValue} />
    </div>
  );
};

export default Test1;
