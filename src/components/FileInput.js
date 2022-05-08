import React from "react";
import {Controller} from "react-hook-form";
import Dropzone from "react-dropzone";
import {List, ListItem, ListItemIcon, ListItemText, Paper} from "@mui/material";
import {CloudUpload, InsertDriveFile} from "@mui/icons-material";


const File = ({control, name}) => {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={({ field: { onChange, onBlur, value } })  => (
                <>
                    <Dropzone onDrop={onChange}>
                        {({getRootProps, getInputProps}) => (
                            <Paper
                                sx={{background: "#eee" , padding: 5, mt: 3, textAlign: "center",}}
                                variant="outlined"
                                { ...getRootProps() }
                            >
                                <CloudUpload  sx={{ fontSize: '42px', color: "#888"}}/>
                                <input
                                    {...getInputProps()}
                                    name={name}
                                    onBlur={onBlur}
                                />
                                <p>Drag 'n' drop files here, or click to select files</p>
                            </Paper>
                        )}
                    </Dropzone>
                    <List>
                        {value.map((file, index)=> (
                            <ListItem key={index}>
                                <ListItemIcon><InsertDriveFile/></ListItemIcon>
                                <ListItemText primary={file.name} secondary={file.size}/>
                            </ListItem>
                        ))}
                    </List>
                </>
            )}
        />
    )
}
export default File;