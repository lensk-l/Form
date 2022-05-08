import React from 'react';
import {MainContainer} from "./MainContainer";
import {Typography} from "@mui/material";
import {stylesForH2} from "../styles/style";
import {Input} from "./Input";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Form from "./Form";
import PrimaryButton from "./PrimaryButton";
import * as yup from "yup";
import {useNavigate} from "react-router-dom";
import {useData} from "../data/DataContext";

const validationSchema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should no contain numbers")
        .required("First name is a required field"),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Last name should no contain numbers")
        .required("Last name is a required field"),
})


export const Step1 = () => {

    const {data, setValues} = useData();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: data.firstName,
            lastName: data.lastName,
        },
        mode: "onBlur",
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = data => {
        navigate('/step2')
        setValues(data);
    }

    return (
        <MainContainer>
            <Typography sx={stylesForH2} component="h2" variant="h5">Step ➙  1 ️</Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input {...register('firstName')}
                     id="firstName"
                     type="text"
                     label="First Name"
                     name="firstName"
                     error={!!errors.firstName}
                     helperText={errors?.firstName?.message}
              />
              <Input {...register('lastName')}
                     id="lastName"
                     type="text"
                     label="Last Name"
                     name="lastName"
                     error={ !!errors.lastName}
                     helperText={errors?.lastName?.message}
              />
                <PrimaryButton type="submit">Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}