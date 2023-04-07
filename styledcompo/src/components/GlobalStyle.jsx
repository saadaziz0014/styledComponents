import { createGlobalStyle } from "styled-components";

export const GlobalS = createGlobalStyle`
button{
    border-radius: ${({ theme } = theme.button.radius)};
    background-color:blue;
}
`;
