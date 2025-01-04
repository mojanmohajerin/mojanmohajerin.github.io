import { colors } from "@/styles/colors";
import { Backdrop, Box, Fade, Modal, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface ProjectModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  name: string;
  description: string;
  date: string;
  technologies: string[];
  image: StaticImageData;
}

export const ProjectModal = ({
  open,
  setOpen,
  name,
  description,
  date,
  technologies,
  image,
}: ProjectModalProps) => {
  // const imageSize = 500;

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1000,
            height: 800,
            backgroundColor: "rgb(98, 149, 132, 0.3)",
            borderRadius: "3%",
            boxShadow: 24,
          }}
        >
          <Stack
            direction="column"
            spacing={2}
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box
              sx={{
                overflow: "hidden",
                display: "inline-block",
                width: "100%",
                height: "100%",
              }}
            >
              <Image src={image} alt={name} width={1000} height={580} />
            </Box>
            <Stack
              direction="column"
              spacing={2}
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{
                paddingX: 2,
                color: colors.chalk,
                textShadow: "2px 2px 2px #000",
              }}
            >
              <Stack direction="row" spacing={4}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  {name}
                </Typography>
                <Typography variant="overline" sx={{ paddingTop: 2 }}>
                  {date}
                </Typography>
              </Stack>
              <Typography variant="body2">{description}</Typography>
              <Typography variant="body2">{technologies}</Typography>
            </Stack>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
};
