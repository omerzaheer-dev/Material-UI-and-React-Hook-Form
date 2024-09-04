import { Controller, useFormContext } from "react-hook-form";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
const RadioGroupComp = ({ name, options, label }) => {
    const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({field , fieldState:{error}}) =>
        <FormControl {...field} error={!!error}>
            <FormLabel>{label}</FormLabel>
            <RadioGroup  row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group">
                {
                    options.map((option,index)=>(

                        <FormControlLabel value={option.id} label={option.label} control={<Radio checked={field.value === option.id ? true : false}/>} key={index}/>
                    ))
                }
            </RadioGroup>
        </FormControl>
      }
    />
  )
}

export default RadioGroupComp
