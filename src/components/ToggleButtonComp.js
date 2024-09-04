import { Controller, useFormContext } from "react-hook-form";
import { ToggleButtonGroup ,ToggleButton } from "@mui/material";
const ToggleButtonComp = ({ name, options, label }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange,value,...restField},fieldState:{error}}) => 
      <ToggleButtonGroup color={error?.message ? 'error' : 'primary'}
      onChange={(_,newValue)=> {
        if(newValue.length){
            onChange(newValue)
        }
      }}
      value={value.length ? value :[options[0].id]}
      {...restField}
      >
        {options.map((option)=> (
            <ToggleButton value={option.id}>
              {option.label}
            </ToggleButton>
        ))}
      </ToggleButtonGroup>}
    />
  );
};

export default ToggleButtonComp;
