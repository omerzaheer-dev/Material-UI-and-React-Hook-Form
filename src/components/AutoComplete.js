import { Controller, useFormContext } from "react-hook-form";
import { Autocomplete, Checkbox, TextField } from "@mui/material";
import { Box } from "@mui/system";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
const AutoComplete = ({ name, options, label }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ref }, fieldState:{error} }) => (
        <Autocomplete
          options={options}
          value={value.map(
            (id) => options?.find((item) => item.id === id) //[{id:1,label:"calefornia"},{id:2,label:"rehmat"}]
          )}
          getOptionLabel={(option) => {
            return options?.find((item) => item.id === option.id)?.label ?? "";
          }}
          isOptionEqualToValue={(option, newValue) => option.id === newValue.id}
          onChange={(_, newValue) => {
            onChange(newValue?.map((item) => item.id));
          }}
          disableCloseOnSelect
          multiple
          renderInput={(params) => (
                <TextField
                {...params}
                fullWidth
                inputRef={ref}
                error={error && error.message ? true : false}
                label={label}
                helperText={error && error.message ? error.message : ""}
                />
          )}
          renderOption={(props, option, { selected }) => (
            <Box {...props}>
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                checked={selected}
              />
              {option.label}
            </Box>
          )}
        />
      )}
    />
  );
};

export default AutoComplete;
