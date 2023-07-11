import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

type TSelectOptions = {
  value: string | number | undefined;
  label: string | undefined;
};

export const SelectAdapter = (
  props: SelectProps & {
    name: string;
    onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
    options: TSelectOptions[];
    color?: "red" | undefined;
    borderColor?: "red" | undefined;
  }
) => {
  const { name, onChange, options, color, borderColor, ...rest } = props;
  const theme = useTheme();

  const selectSx = {
    ...(color === "red" && {
      backgroundColor: "red",
      color: "white",
    }),
    ...(borderColor === "red" && {
      borderColor: "red",
    }),
  };

  return (
    <FormControl size="small" sx={{ mb: theme.spacing(1), width: "100%" }}>
      <InputLabel>{rest.label}</InputLabel>
      <Select
        {...rest}
        name={name}
        value={rest.value}
        onChange={onChange}
        onBlur={rest.onBlur}
        error={!!rest.error}
        sx={selectSx}
        MenuProps={{
          anchorOrigin: { vertical: "bottom", horizontal: "left" },
          transformOrigin: { vertical: "top", horizontal: "left" },
          sx: {
            maxHeight: "290px",
            width: "100px",
            "& li": {
              whiteSpace: "normal",
              overflowWrap: "break-word",
            },
          },
        }}
      >
        {options.map((option, index) => {
          return (
            <MenuItem
              key={`${index * (Math.random() * 999)}_option_${option.label}`}
              value={option?.value}
            >
              {option?.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
