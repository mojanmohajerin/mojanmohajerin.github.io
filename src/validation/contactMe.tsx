import * as Yup from "yup";

export const ContactMeValidation = Yup.object().shape({
  name: Yup.string().required("Please enter your name."),
  email: Yup.string()
    .email("Invalid email address.")
    .required("Please enter your email address."),
  message: Yup.string().required("Please enter a message! :)"),
});
