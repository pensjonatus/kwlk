import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

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
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button href={link} variant="contained">
          Zobacz
        </Button>
      </CardActions>
    </Card>
  );
}
