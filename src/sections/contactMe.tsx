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
      spacing={3.5}
      sx={{
        position: "relative",
        width: "min(100%, 720px)",
        overflow: "hidden",
        background:
          "linear-gradient(145deg, rgba(36, 54, 66, 0.62) 0%, rgba(56, 116, 120, 0.38) 62%, rgba(36, 54, 66, 0.58) 100%)",
        border: `1px solid rgba(226, 241, 231, 0.24)`,
        borderRadius: 2,
        boxShadow:
          "0 22px 54px rgba(0, 0, 0, 0.34), inset 0 1px 0 rgba(255, 254, 249, 0.14)",
        backdropFilter: "blur(10px)",
        px: { xs: 2.25, sm: 3.5, md: 4 },
        py: { xs: 2.5, md: 3.5 },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 20,
          bottom: 20,
          left: 0,
          width: 4,
          borderRadius: "0 999px 999px 0",
          background: `linear-gradient(180deg, rgba(189, 172, 106, 0) 0%, ${colors.gold} 20%, ${colors.gold} 80%, rgba(189, 172, 106, 0) 100%)`,
          boxShadow: "0 0 20px rgba(189, 172, 106, 0.42)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: -50,
          background:
            "radial-gradient(circle at 18% 14%, rgba(226, 241, 231, 0.18), transparent 34%), radial-gradient(circle at 86% 72%, rgba(189, 172, 106, 0.14), transparent 38%)",
          filter: "blur(18px)",
          pointerEvents: "none",
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          position: "relative",
          zIndex: 1,
          lineHeight: 1.05,
          textShadow: "2px 2px 5px #000",
        }}
      >
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
            <Stack
              spacing={3}
              sx={{
                position: "relative",
                zIndex: 1,
                px: { xs: 0, md: 2 },
              }}
            >
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
                styleProps={{ height: { xs: 210, md: 250 }, mb: 1 }}
                placeholder={t.contact.placeholder(t.contact.message)}
              />
              <Stack
                justifyContent="flex-end"
                alignItems="flex-end"
                sx={{ pt: 1.5 }}
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
                    minWidth: 150,
                    border: `1px solid rgba(189, 172, 106, 0.78)`,
                    borderRadius: "999px",
                    backgroundColor: "rgba(36, 54, 66, 0.56)",
                    color: colors.chalk,
                    px: 4,
                    py: 1.1,
                    textTransform: "capitalize",
                    textShadow: duringSubmission ? null : "1px 1px 1px #000",
                    boxShadow:
                      "0 12px 26px rgba(0, 0, 0, 0.24), inset 0 1px 0 rgba(255, 254, 249, 0.14)",
                    transition:
                      "transform 180ms ease, background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      borderColor: colors.gold,
                      backgroundColor: "rgba(98, 149, 132, 0.52)",
                      boxShadow:
                        "0 18px 34px rgba(0, 0, 0, 0.3), 0 0 0 3px rgba(189, 172, 106, 0.12), inset 0 1px 0 rgba(255, 254, 249, 0.18)",
                    },
                    "&:active": {
                      transform: "translateY(0)",
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
