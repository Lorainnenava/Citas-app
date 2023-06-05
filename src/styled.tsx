import styled from "styled-components";
import { TextField } from "@mui/material";
import Select from "@mui/material/Select";
export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const CssTextField = styled(TextField)<{
  colors?: string;
  borderColors?: string;
}>`
  & label.Mui-focused {
    color: ${({ colors }) => colors || "secondary"};
  }
  & .Input-focused {
    color: ${({ colors }) => colors || "primary"};
    border-color: ${({ borderColors }) => borderColors || "primary"};
  }
  & label {
    color: ${({ colors }) => colors || "primary"};
    border-color: ${({ borderColors }) => borderColors || "primary"};
  }
  & input {
  }
  & .MuiInput-underline:after {
    border-color: ${({ borderColors }) => borderColors || "primary"};
    color: ${({ colors }) => colors || "primary"};
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${({ borderColors }) => borderColors || "primary"};
      color: ${({ colors }) => colors || "primary"};
    }
    &:hover fieldset {
      border-color: ${({ borderColors }) => borderColors || "secondary"};
      color: ${({ colors }) => colors || "primary"};
    }
    &.Mui-focused fieldset {
      border-color: ${({ borderColors }) => borderColors || "secondary"};
      color: ${({ colors }) => colors || "primary"};
    }
    color: ${({ colors }) => colors || "primary"};
  }
`;

export const CssSelect = styled(Select)<{
  colors?: string;
  bordercolors?: string;
}>`
  & label.MuiSelect-focused {
    color: ${({ colors }) => colors || "white"};
  }
  & .MuiSelect-focused {
    color: ${({ colors }) => colors || "white"};
    border-color: ${({ bordercolors }) => bordercolors || "white"};
  }
  & label {
    color: ${({ colors }) => colors || "white"};
    border-color: ${({ bordercolors }) => bordercolors || "white"};
  }
  & input {
  }
  & .MuiInputBase-root:after {
    border-color: ${({ bordercolors }) => bordercolors || "white"};
    color: ${({ colors }) => colors || "white"};
  }
  & .MuiInputBase-root {
    & fieldset {
      border-color: ${({ bordercolors }) => bordercolors || "white"};
      color: ${({ colors }) => colors || "white"};
    }
    &:hover fieldset {
      border-color: ${({ bordercolors }) => bordercolors || "black"};
      color: ${({ colors }) => colors || "white"};
    }
    &.MuiMuiSelect-focused fieldset {
      border-color: ${({ bordercolors }) => bordercolors || "white"};
      color: ${({ colors }) => colors || "white"};
    }
    color: ${({ colors }) => colors || "white"};
  }
`;
