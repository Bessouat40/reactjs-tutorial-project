import { Input } from "@airbus/components-react";

const Test3 = ({ setValue }) => {
  const changeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Input placeholder="Placeholder" onChange={(e) => changeValue(e)} />
    </div>
  );
};

export default Test3;
