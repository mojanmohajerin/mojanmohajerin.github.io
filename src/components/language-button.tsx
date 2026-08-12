"use client";

import { Button, Menu, MenuItem, Stack, SvgIcon, Typography } from "@mui/material";
import { Translate01 } from "@untitled-ui/icons-react";
import { MouseEvent, useState } from "react";

import { languages, useLanguage } from "@/i18n/language";
import { colors } from "@/styles/colors";

export const LanguageButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { language, setLanguage } = useLanguage();
  const open = Boolean(anchorEl);

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (code: typeof language) => {
    setLanguage(code);
    handleClose();
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        aria-label="Change language"
        aria-controls={open ? "language-menu" : undefined}
        aria-haspopup="menu"
        aria-expanded={open ? "true" : undefined}
        sx={{
          position: "relative",
          overflow: "hidden",
          minWidth: 0,
          width: 44,
          height: 44,
          borderRadius: "999px",
          color: colors.chalk,
          backgroundColor: open
            ? "rgba(98, 149, 132, 0.34)"
            : "rgba(226, 241, 231, 0.08)",
          border: `1px solid ${
            open ? "rgba(226, 241, 231, 0.62)" : "rgba(226, 241, 231, 0.18)"
          }`,
          boxShadow: open
            ? "0 8px 24px rgba(0, 0, 0, 0.24), inset 0 1px 0 rgba(226, 241, 231, 0.2)"
            : "inset 0 1px 0 rgba(226, 241, 231, 0.12)",
          transition:
            "transform 180ms ease, background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease",
          "&::after": {
            content: '""',
            position: "absolute",
            left: "22%",
            right: "22%",
            bottom: 6,
            height: 2,
            borderRadius: "999px",
            backgroundColor: open ? colors.gold : "rgba(189, 172, 106, 0)",
            transform: open ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "center",
            transition: "transform 180ms ease, background-color 180ms ease",
          },
          "&:hover": {
            transform: "translateY(-2px)",
            backgroundColor: open
              ? "rgba(98, 149, 132, 0.44)"
              : "rgba(226, 241, 231, 0.16)",
            borderColor: "rgba(226, 241, 231, 0.58)",
            boxShadow:
              "0 10px 28px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(226, 241, 231, 0.22)",
            "&::after": {
              backgroundColor: colors.gold,
              transform: "scaleX(1)",
            },
          },
          "&:active": {
            transform: "translateY(0)",
            backgroundColor: "rgba(98, 149, 132, 0.52)",
            borderColor: "rgba(189, 172, 106, 0.82)",
            boxShadow:
              "0 4px 14px rgba(0, 0, 0, 0.22), inset 0 2px 8px rgba(0, 0, 0, 0.18)",
          },
          "&:focus-visible": {
            outline: `2px solid ${colors.gold}`,
            outlineOffset: 3,
          },
        }}
      >
        <Stack alignItems="center" spacing={0.1} sx={{ position: "relative", zIndex: 1 }}>
          <SvgIcon sx={{ color: colors.base.lightest, fontSize: 20 }}>
            <Translate01 />
          </SvgIcon>
          <Typography
            variant="caption"
            sx={{
              color: colors.gold,
              fontSize: "0.58rem",
              fontWeight: 700,
              lineHeight: 1,
              textTransform: "uppercase",
              textShadow: "1px 1px 1px #000000",
            }}
          >
            {language}
          </Typography>
        </Stack>
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
        MenuListProps={{ "aria-label": "Language options" }}
        PaperProps={{
          sx: {
            mt: 1,
            backgroundColor: "rgba(36, 54, 66, 0.94)",
            border: "1px solid rgba(226, 241, 231, 0.22)",
            boxShadow: "0 14px 34px rgba(0, 0, 0, 0.28)",
          },
        }}
      >
        {languages.map((option) => (
          <MenuItem
            key={option.code}
            selected={language === option.code}
            onClick={() => handleSelect(option.code)}
            sx={{
              color: colors.chalk,
              "&.Mui-selected": {
                backgroundColor: "rgba(98, 149, 132, 0.34)",
              },
              "&:hover, &.Mui-selected:hover": {
                backgroundColor: "rgba(98, 149, 132, 0.46)",
              },
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
