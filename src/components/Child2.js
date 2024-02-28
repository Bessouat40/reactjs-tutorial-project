import TextField from '@mui/material/TextField';

const Test3 = ({ setValue }) => {
  const changeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <TextField variant="outlined" onChange={(e) => changeValue(e)}/>
    </div>
  );
};

export default Test3;
