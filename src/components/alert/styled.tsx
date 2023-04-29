import styled from "styled-components";

export const Container = styled.div`
  .MuiAlert-icon {
    display: none;
  }
`;
export const AlertContent = styled.div<{
  width?: string;
  height?: string;
  display?: string;
}>`
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  min-width: 250px;
  max-width: 500px;
  border-radius: 5px;
  right: 100px;
  position: fixed;
  bottom: 40px;
  z-index: 10000;
  display: ${({ display }) => display || ""};
`;

export const AlertMessage = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 400px;
  margin-left: "none";
  margin-right: "none";
`;

export const TypeMessage = styled.strong`
  color: white;
`;
