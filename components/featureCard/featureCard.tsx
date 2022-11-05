import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Feature } from "../featured/featured";
import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";
import { SxProps } from "@mui/system";

const typographyStyles: SxProps = {
  margin: "1rem",
};

export default function FeatureCard({
  title,
  description,
  link,
  alt,
  image,
}: Feature) {
  return (
    <Paper
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Tooltip title={alt} placement="top">
        <div>
          <Image src={image} alt={alt} />
        </div>
      </Tooltip>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={typographyStyles}
      >
        {title}
      </Typography>
      <Typography variant="body1" sx={typographyStyles}>
        {description}
      </Typography>
      <Button href={link} variant="contained">
        Zobacz
      </Button>
    </Paper>
  );
}
