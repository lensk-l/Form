import React from "react";
import {MainContainer} from "./MainContainer";
import {stylesForH2} from "../styles/style";
import {
    List,
    ListItem, ListItemIcon, ListItemText,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {useData} from "../data/DataContext";
import {Link} from "react-router-dom";
import {InsertDriveFile} from "@mui/icons-material";
import PrimaryButton from "./PrimaryButton";
import Swal from "sweetalert2";



const Result = () => {
    const {data} = useData();
    const entries = Object.entries(data).filter((entry)=> entry[0] !== "files");
    const {files} = data;

    const onSubmit = async() => {
        const formData = new FormData();

        if(data.files){
            data.files.forEach(file => {
                formData.append('files', file, file.name)
            })
        }

        entries.forEach(entry => {
            formData.append(entry[0], entry[1])
        })

        const response = await fetch("localhost://400", {
            method: "POST",
            body: formData,
        })

        if (response.status === 200){
            Swal.fire('data was download')
        }

    }


    return (<MainContainer>
        <Typography sx={stylesForH2} component="h2" variant="h5">📋Form values/</Typography>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell> Field</TableCell>
                        <TableCell align="right">Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        entries.map(entry => (
                            entry[1] && (
                                    <TableRow key={entry[0]}>
                                        <TableCell>{entry[0]}</TableCell>
                                        <TableCell align="right">{entry[1].toString()}</TableCell>
                                    </TableRow>

                            )
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
        {
            files && (
                <>
                    <Typography  sx={stylesForH2} component="h2" variant="h5">📁 Files</Typography>
                    <List>
                        {
                            files.map((file, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <InsertDriveFile/>
                                    </ListItemIcon>
                                    <ListItemText primary={file.name} secondary={file.size}/>
                                </ListItem>
                            ))
                        }

                    </List>
                </>

            )
        }
        <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
        <Link to="/">Start over</Link>
    </MainContainer>)
}
export default Result;
