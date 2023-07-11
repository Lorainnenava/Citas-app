import styled from "styled-components";
import { TextField } from "@mui/material";
import Select from "@mui/material/Select";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0px;
`;

export const CssTextField = styled(TextField)<{
  colors?: string;
  borderColors?: string;
}>`
  width: 100%;
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
export const BoxText = styled.div`
  width: 100%;
  height: 35px;
  color: white;
  background-color: #6f95ff;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const text = {
  fontSize: "28px",
  fontFamily: "Roboto",
  marginBottom: "20px",
  color: "#6f95ff",
};
export const Containers = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-bottom: 20px;
  border-radius: 10px;
`;
