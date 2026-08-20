import type { SxProps, Theme } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import { Field, type FieldProps } from "formik";

import { colors } from "@/styles/colors";

interface InputFieldProps {
  name: string;
  type: string;
  as?: string;
  styleProps?: SxProps<Theme>;
  placeholder?: string;
}

export const InputField = ({
  name,
  type,
  as,
  styleProps,
  placeholder,
}: InputFieldProps) => {
  return (
    <Stack spacing={0.85}>
      <Typography
        variant="overline"
        sx={{
          color: colors.base.lightest,
          lineHeight: 1.1,
          letterSpacing: 0,
          opacity: 0.9,
          textShadow: "1px 1px 2px #000",
        }}
      >
        {name}
      </Typography>
      <Box
        sx={{
          height: 30,
          position: "relative",
          ...styleProps,
        }}
      >
        <Field name={type}>
          {({ field, meta }: FieldProps<string>) => {
            const hasError = Boolean(meta.touched && meta.error);

            return (
              <>
                <Box
                  component={as === "textarea" ? "textarea" : "input"}
                  {...field}
                  type={as === "textarea" ? undefined : type}
                  placeholder={placeholder ?? `Please enter your ${type}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    resize: as === "textarea" ? "vertical" : "none",
                    borderRadius: 1.5,
                    border: `1px solid ${
                      hasError
                        ? "rgba(255, 0, 51, 0.62)"
                        : "rgba(226, 241, 231, 0.46)"
                    }`,
                    outline: "none",
                    backgroundColor: "rgba(255, 254, 249, 0.94)",
                    color: "#111111",
                    colorScheme: "light",
                    px: 1.5,
                    py: 1.15,
                    fontFamily: "inherit",
                    fontSize: "1rem",
                    lineHeight: 1.45,
                    boxShadow: hasError
                      ? "0 0 0 3px rgba(255, 0, 51, 0.12)"
                      : "inset 0 1px 0 rgba(255, 255, 255, 0.72), 0 12px 24px rgba(0, 0, 0, 0.12)",
                    transition:
                      "border-color 180ms ease, box-shadow 180ms ease, background-color 180ms ease",
                    "&::placeholder": {
                      color: "rgba(36, 54, 66, 0.62)",
                    },
                    "&:focus": {
                      borderColor: colors.gold,
                      backgroundColor: colors.chalk,
                      boxShadow:
                        "0 0 0 3px rgba(189, 172, 106, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
                    },
                  }}
                />
                {hasError ? (
                  <Typography
                    variant="caption"
                    sx={{
                      position: "absolute",
                      left: 0,
                      bottom: -21,
                      color: colors.red,
                      textShadow: "1px 1px 2px #000",
                    }}
                  >
                    {meta.error}
                  </Typography>
                ) : null}
              </>
            );
          }}
        </Field>
      </Box>
    </Stack>
  );
};
