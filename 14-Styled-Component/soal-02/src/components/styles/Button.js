import styled from "styled-components";

export const StyledButton = styled.button`
    cursor: pointer;
    padding: 0.5em 1.5em;
    font-family: sans-serif;
    font-size: 1.25em;
    border: ${props => (props.outline === "TRUE" ? "lightblue" : "white")} 1px solid;
    background-color: ${props => (props.outline === "TRUE" ? "white" : "lightblue")};
    color: ${props => (props.outline === "TRUE" ? "lightblue" : "white")};
    width: ${props => (props.fullWidth ? "100%" : "auto")};
    &:hover{
       border: ${props => (props.outline === "TRUE" ? "lightblue" : "cornflowerblue")} 1px solid;
       background-color: ${props => props.outline === ("TRUE" ? "lightblue" : "cornflowerblue")};
    } 

`;