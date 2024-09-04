import { useFormContext } from "react-hook-form";
import AutoComplete from "../components/AutoComplete";
import { TextField, Stack } from "@mui/material";
import ToggleButtonComp from "../components/ToggleButtonComp";
import RadioGroupComp from "../components/RadioGroupComp";

const Form = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const onSubmit = () => {
    alert("submit");
  };
  return (
    <>
      {/* stack is display flex with flex dir col */}
      <Stack sx={{ gap: 2 }}>
        <TextField
          {...register("name")}
          label="Name"
          error={!!errors?.name}
          helperText={errors?.name?.message}
        />
        <TextField
          {...register("email")}
          label="Email"
          error={!!errors?.email}
          helperText={errors?.email?.message}
        />
        <AutoComplete
          name="states"
          label="States"
          options={[
            { id: 1, label: "USA" },
            { id: 2, label: "Canada" },
            { id: 3, label: "Mexico" },
            { id: 4, label: "France" },
            { id: 5, label: "Germany" },
            { id: 6, label: "Italy" },
            { id: 7, label: "Spain" },
          ]}
        />
        <ToggleButtonComp
        name="languages"
        label="Language"
        options={[
          { id: 1, label: "French" },
          { id: 2, label: "Germany" },
          { id: 3, label: "English" },
        ]}
        />
        <RadioGroupComp
        name="gender"
        label="Gender"
        options={[
          { id: "1", label: "Male" },
          { id: "2", label: "Female" },
          { id: "3", label: "Others" },
        ]}
        />
      </Stack>
    </>
  );
};

export default Form;
