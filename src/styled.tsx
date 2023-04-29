import styled from "styled-components";
import { TextField, Button } from "@mui/material";
export const Container = styled.div`
  width: 100%;
  height: 100%;
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

export const Buttons = styled(Button)({});
