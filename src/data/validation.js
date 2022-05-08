import * as yup from "yup";

export const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Email should have correct format")
        .required("Enter is required field"),
})