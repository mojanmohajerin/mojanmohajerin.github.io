import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";

import { colors } from "@/styles/colors";

interface CardUnitProps {
  image: StaticImageData;
  name: string;
  description: string;
  date: string;
  technologies: string[];
}

export const CardUnit = ({
  image,
  name,
  description,
  date,
  technologies,
}: CardUnitProps) => {
  return (
    <Card
      raised
      sx={{
        width: 400,
        height: 400,
        backgroundColor: "transparent",
        boxShadow: "0 0 0 0",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: 250,
          }}
        >
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: 5, border: "1px solid black" }}
          />
        </Box>
        <CardContent>
          <Stack direction="column" spacing={0}>
            <Typography
              variant="h5"
              sx={{
                textShadow: `1px 1px 1px ${colors.chalk}`,
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="overline"
              sx={{
                color: "text.secondary",
                textShadow: `1px 1px 1px ${colors.chalk}`,
              }}
            >
              {date}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              textShadow: `1px 1px 1px ${colors.chalk}`,
            }}
          >
            {description}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              textShadow: `1px 1px 1px ${colors.chalk}`,
            }}
          >
            {technologies.join(", ")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
