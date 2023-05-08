import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 10%;
  background-color: #fafafa;
  display: flex;
`;

export const HeaderImagen = styled.button`
  width: 50%;
  height: 100%;
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 35%;
  margin-top: -110px;
  margin-left: -602px;
`;

export const TituloHeader = styled.h1`
  width: 50%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
`;
