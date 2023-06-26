import { styled } from "styled-components";

// style modal information
export const Box = styled.div`
    width: 100%;
    height: 100%;
    padding:10px;
`

export const Span = styled.span`
    width: 60%;
    color: #6f95ff;
    font-size: 15px;
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const Text = styled.p`
    width: 40%;
    color: "black";
    font-size: 15px;
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
// style view register user
export const Form = styled.form`
width:100%;
height: auto;
`

export const styles = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    width: "100%"
}

export const text = {
    fontSize: "28px",
    fontFamily: "Roboto",
    marginBottom: '20px',
    color: "#6f95ff",
}

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-bottom: 20px;
    border-radius:10px
`
export const BoxText = styled.div`
    width: 100%;
    height: 35px;
    color:white;
    background-color:#6f95ff;
    border-radius:10px 10px 0px 0px;
    display:flex;
    align-items: center;
    justify-content: flex-start
`

export const BoxRegister = styled.div`
    width: 100%;
    height:auto;
    display:flex;
    flex-direction: column;
    align-items:center;
    background-color: #e0e0e0;
    padding:20px
`
export const BoxButton= styled.div`
    width:100%;
    height: auto;
    display: flex;
    justify-content: flex-end
`

export const Button= styled.button`
    width: 150px;
    background: #6f95ff
    border: none
`