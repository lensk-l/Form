import {Typography} from "@mui/material";
import {stylesForH1} from "../styles/style";



export const Header = () => {
    return (
        <Typography
            sx={stylesForH1}
            component="h1"
            variant="h5"
        >
            The ultimate form challenge
        </Typography>
    )
}
