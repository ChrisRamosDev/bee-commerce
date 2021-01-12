import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const CustomTextField = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        control={control}
        fullWidth
        required
        name={name}
        label={label}
        defaultValue=''
      />
    </Grid>
  );
};

export default CustomTextField;
