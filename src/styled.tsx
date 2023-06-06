import styled from "styled-components";
import { TextField } from "@mui/material";
import Select from "@mui/material/Select";
export const Container = styled.div`
    width: 100%;
    height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0px
`;
export const CssTextField = styled(TextField)<{
  colors?: string;
  bordercolors?: string;
}>`
  & label.Mui-focused {
    color: ${({ colors }) => colors || "white"};
  }
  & .Input-focused {
    color: ${({ colors }) => colors || "white"};
    border-color: ${({ bordercolors }) => bordercolors || "white"};
  }
  & label {
    color: ${({ colors }) => colors || "white"};
    border-color: ${({ bordercolors }) => bordercolors || "white"};
  }
  & input {
  }
  & .MuiInput-underline:after {
    border-color: ${({ bordercolors }) => bordercolors || "white"};
    color: ${({ colors }) => colors || "white"};
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${({ bordercolors }) => bordercolors || "white"};
      color: ${({ colors }) => colors || "white"};
    }
    &:hover fieldset {
      border-color: ${({ bordercolors }) => bordercolors || "black"};
      color: ${({ colors }) => colors || "white"};
    }
    &.Mui-focused fieldset {
      border-color: ${({ bordercolors }) => bordercolors || "white"};
      color: ${({ colors }) => colors || "white"};
    }
    color: ${({ colors }) => colors || "white"};
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
