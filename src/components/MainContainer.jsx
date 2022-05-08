import React from 'react';
import {Container} from "@mui/material";
import {stylesForMainContainer} from "../styles/style";

export const MainContainer = ({children, ...props}) => {
    return (
        <Container sx={stylesForMainContainer} container="main" maxWidth="xs" {...props}>
            {children}
        </Container>
    )
}