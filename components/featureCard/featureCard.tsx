import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

type FeatureCardProps = {
  title: string;
  description: string | React.ReactNode;
  link: string;
};

export default function FeatureCard({
  title,
  description,
  link,
}: FeatureCardProps) {
  return (
    <Paper
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "1rem",
        padding: "2rem 1.5rem",
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
      <Button href={link} variant="contained">
        Zobacz
      </Button>
    </Paper>
  );
}
