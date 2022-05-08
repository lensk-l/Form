import React from "react";
import FileInput from "./FileInput";
import {MainContainer} from "./MainContainer";
import {Typography} from "@mui/material";
import Form from "./Form";
import {stylesForH2} from "../styles/style";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import PrimaryButton from "./PrimaryButton";
import {useData} from "../data/DataContext";

const Step3 = () => {

    const {data, setValues} = useData();

    const {control, handleSubmit} = useForm({
        defaultValues:{
            files: data.files,
        }
    });
    const navigate = useNavigate();
    const onSubmit = (data) => {
        navigate('/result');
        setValues(data);
    }
    return(
        <MainContainer>
            <Typography sx={stylesForH2} component="h2" variant="h5">Step ➙ 3/</Typography>
            <Form  onSubmit={handleSubmit(onSubmit)}>
                <FileInput name="files" control={control}/>
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>

    )
}
export default Step3;