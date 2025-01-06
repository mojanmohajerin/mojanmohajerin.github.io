"use client";

import { LoadingButton } from "@mui/lab";
import { Stack, SvgIcon, Typography } from "@mui/material";
import { Send01 } from "@untitled-ui/icons-react";
import { Form, Formik } from "formik";

import { InputField } from "@/components/inputField";
import { colors } from "@/styles/colors";
import { ContactMeValidation } from "@/validation/contactMe";

export const ContactMe = () => {
  return (
    <>
      <Stack
        direction="column"
        spacing={5}
        justifyContent="center"
        alignItems="flex-start"
        sx={{
          backgroundColor: "rgba(98, 149, 132, 0.5)",
          border: `3px solid ${colors.charcoal}`,
          borderRadius: "10px",
          width: "50%",
          padding: 5,
        }}
      >
        <Typography variant="h3" sx={{ textShadow: "2px 2px 4px #000" }}>
          Send me a message!*
        </Typography>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={ContactMeValidation}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Stack direction="column" spacing={2} sx={{ paddingX: 5 }}>
                <InputField name="Name" type="name" />
                <InputField name="Email" type="email" />
                <InputField
                  name="Message"
                  type="message"
                  as="textarea"
                  styleProps={{ height: 250 }}
                />
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{ paddingTop: 5 }}
                >
                  <LoadingButton
                    type="submit"
                    loading={isSubmitting}
                    variant="outlined"
                    size="large"
                    endIcon={
                      <SvgIcon sx={{ filter: `drop-shadow(1px 1px 2px #000)` }}>
                        <Send01 />
                      </SvgIcon>
                    }
                    sx={{
                      border: `1px solid ${colors.base.darkest}`,
                      backgroundColor: "rgb(56, 116, 120, 0.7)",
                      color: colors.base.lightest,
                      paddingX: 5,
                      textTransform: "capitalize",
                      textShadow: "1px 1px 1px #000",
                      "&:hover": {
                        backgroundColor: colors.base.dark,
                      },
                    }}
                  >
                    Submit
                  </LoadingButton>
                </Stack>
              </Stack>
            </Form>
          )}
        </Formik>
      </Stack>
    </>
  );
};
