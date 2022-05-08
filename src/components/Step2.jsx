import React from 'react';
import {MainContainer} from "./MainContainer";
import {Checkbox, FormControlLabel, Typography} from "@mui/material";
import {stylesForH2} from "../styles/style";
import {Input} from "./Input";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import Form from "./Form";
import PrimaryButton from "./PrimaryButton";
import * as yup from "yup";
import {parsePhoneNumberFromString} from "libphonenumber-js";
import {useData} from "../data/DataContext";

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Email should have correct format")
        .required("Enter is required field"),
    phone: yup
        .string()
})

const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value);
    if(!phoneNumber){
        return value
    }

    return phoneNumber.formatInternational()
}

export const Step2 = () => {

    const {data, setValues} = useData();

    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        defaultValues: {
            email: data.email,
            hasPhone: data.hasPhone,
            phone: data.phone,
        },
        mode: "onBlur",
        resolver: yupResolver(validationSchema),
    });

    const hasPhone = watch("hasPhone");

    const navigate = useNavigate();
    const onSubmit = (data) => {
        navigate('/step3');
        setValues(data);
    }

    return (
        <MainContainer>
            <Typography sx={stylesForH2} component="h2" variant="h5">Step ➙ ️ 2</Typography>
            <Form  onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register('email')}
                    name="email"
                    type="email"
                    id="email"
                    label="Email"
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                />
                <FormControlLabel control={
                    <Checkbox
                        defaultValue={data.hasPhone}
                        defaultChecked={data.hasPhone}
                        name="hasPhone"
                              {...register('hasPhone')}
                    />
                } label='Want to add phone number'/>
                {
                    hasPhone && (
                        <Input
                            {...register('phone')}
                            name="phone"
                            type="tel"
                            id="phone"
                            label="Phone number"
                            error={!!errors.phone}
                            helperText={errors?.phone?.message}
                            onChange={(event) => {
                                event.target.value = normalizePhoneNumber(event.target.value)
                            }}
                        />
                    )
                }
                <PrimaryButton>Next step</PrimaryButton>
            </Form>
        </MainContainer>
    )
};

