import { Box, Stack, Typography } from "@mui/material";
import { Field } from "formik";

interface InputFieldProps {
  name: string;
  type: string;
  as?: string;
  styleProps?: object;
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
    <Stack spacing={0.5}>
      <Typography variant="h5" sx={{ textShadow: "1px 1px 2px #000" }}>
        {name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          height: 30,
          ...styleProps,
        }}
      >
        <Field
          type={type}
          name={type}
          placeholder={placeholder ?? `Please enter your ${type}`}
          as={as}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#ffffff",
            color: "#000000",
            colorScheme: "light",
            padding: "1em",
            fontFamily: "Arial",
          }}
        />
      </Box>
    </Stack>
  );
};
