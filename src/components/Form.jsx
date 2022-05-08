import React from 'react';
import {stylesForForm} from "../styles/style";

 const Form = ({children, ...props}) => {
    return (
        <form {...props}  sx={stylesForForm} noValidate > {children} </form>
    )
}
export default Form;