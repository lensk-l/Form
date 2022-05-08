import React, {forwardRef} from 'react';
import {TextField} from "@mui/material";

export const Input = forwardRef((props, ref ) => {
    return (
        <TextField
            variant="outlined"
            inputRef={ref}
            margin="normal"
            fullWidth
            placeholder="write something"
            {...props}
            //Можно передать просы так или как описано ниже
            // label={props.label}
            // helperText={props.helperText}
            // error={props.error}
        />

    )
})