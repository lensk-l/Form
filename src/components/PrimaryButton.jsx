import React from 'react'
import {Button} from '@mui/material';
import {stylesForPrimaryButton} from "../styles/style";

const PrimaryButton = ({children, ...props}) => {
    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            {...props}
            sx={{stylesForPrimaryButton}}
        >
            {children}
        </Button>
    )

}
export default PrimaryButton;