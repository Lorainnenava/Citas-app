import styled from "styled-components";
import { TextField, Button } from "@mui/material";
export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const CssTextField = styled(TextField)<{
  Color?: string;
  borderColor?: string;
}>`
  & label.Mui-focused {
    color: ${({ Color }) => Color || "white"};
  }
  & .Input-focused {
    color: ${({ Color }) => Color || "white"};
    border-color: ${({ borderColor }) => borderColor || "white"};
  }
  & label {
    color: ${({ Color }) => Color || "white"};
    border-color: ${({ borderColor }) => borderColor || "white"};
  }
  & input {
  }
  & .MuiInput-underline:after {
    border-color: ${({ borderColor }) => borderColor || "white"};
    color: ${({ Color }) => Color || "white"};
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${({ borderColor }) => borderColor || "white"};
      color: ${({ Color }) => Color || "white"};
    }
    &:hover fieldset {
      border-color: ${({ borderColor }) => borderColor || "black"};
      color: ${({ Color }) => Color || "white"};
    }
    &.Mui-focused fieldset {
      border-color: ${({ borderColor }) => borderColor || "white"};
      color: ${({ Color }) => Color || "white"};
    }
    color: ${({ Color }) => Color || "white"};
  }
`;
/* ({
    
  "& label.Mui-focused": {
    color: "white",
  },
  "& label": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
      color: "white",
    },
    "&:hover fieldset": {
      borderColor: "black",
      color: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
      color: "white",
    },
    color: "white",
  },
}); */

export const Buttons = styled(Button)({});
