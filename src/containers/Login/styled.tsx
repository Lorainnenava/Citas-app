import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
`;
export const Form = styled.form`
  max-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  padding: 50px 30px;
  background-color: #4883ab;
  -webkit-box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.15);
  border-radius: 3px 3px 3px 3px;
  -moz-border-radius: 3px 3px 3px 3px;
  -webkit-border-radius: 3px 3px 3px 3px;

  box-sizing: border-box;
`;

export const Rows = styled.div`
  width: 100%;
  height: auto;
`;
export const ContenedorForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
export const Span = styled.span<{ Color?: string; borderColor: string }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  color: ${({ Color }) => Color || "#ffff"};
  border-color: ${({ borderColor }) => borderColor || ("#ffff")};
`;
