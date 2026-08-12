"use client";

import { Stack, SvgIcon, Typography } from "@mui/material";
import { Send01 } from "@untitled-ui/icons-react";
import { Form, Formik } from "formik";
import Swal from "sweetalert2";

import { InputField } from "@/components/inputField";
import { useLanguage } from "@/i18n/language";
import { translations } from "@/i18n/translations";
import { colors } from "@/styles/colors";
import { getContactMeValidation } from "@/validation/contactMe";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";

export const ContactMe = () => {
  const [duringSubmission, setDuringSubmission] = useState<boolean>(false);
  const { language } = useLanguage();
  const t = translations[language];

  async function handleSubmit(values: {
    name: string;
    email: string;
    message: string;
  }) {
    setDuringSubmission(true);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: `dedb13d7-42c9-46d3-ba01-30cd394ca715`,
        name: values.name,
        email: values.email,
        message: values.message,
      }),
    });
    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: t.contact.successTitle,
        text: t.contact.successText,
        icon: "success",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: t.contact.errorTitle,
        text: t.contact.errorText,
      });
    }
    setDuringSubmission(false);
  }

  return (
    <Stack
      spacing={5}
      sx={{
        backgroundColor: "rgba(98, 149, 132, 0.5)",
        border: `3px solid ${colors.charcoal}`,
        borderRadius: "10px",
        minWidth: "350px",
        padding: "2em",
      }}
    >
      <Typography variant="h3" sx={{ textShadow: "2px 2px 4px #000" }}>
        {t.contact.heading}
      </Typography>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={getContactMeValidation(language)}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {() => (
          <Form>
            <Stack spacing={2} sx={{ paddingX: 5 }}>
              <InputField
                name={t.contact.name}
                type="name"
                placeholder={t.contact.placeholder(t.contact.name)}
              />
              <InputField
                name={t.contact.email}
                type="email"
                placeholder={t.contact.placeholder(t.contact.email)}
              />
              <InputField
                name={t.contact.message}
                type="message"
                as="textarea"
                styleProps={{ height: 250 }}
                placeholder={t.contact.placeholder(t.contact.message)}
              />
              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{ paddingTop: 5 }}
              >
                <LoadingButton
                  type="submit"
                  loading={duringSubmission}
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
                    textShadow: duringSubmission ? null : "1px 1px 1px #000",
                    "&:hover": {
                      backgroundColor: colors.base.dark,
                    },
                  }}
                >
                  {t.contact.submit}
                </LoadingButton>
              </Stack>
            </Stack>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};
