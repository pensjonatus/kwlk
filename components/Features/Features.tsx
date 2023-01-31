import Container from "@mui/material/Container";
import { featureList } from "./featureList";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinkButton from "../LinkButton";

export default function Features() {
  return (
    <Container sx={{ paddingTop: 4, paddingBottom: 4 }}>
      {featureList.map(({ title, description, link }) => (
        <Box sx={{ textAlign: "center", padding: 3 }} key={link}>
          <Typography variant="h2">{title}</Typography>
          <Typography>{description}</Typography>
          <LinkButton href={link}>odwiedź {title}</LinkButton>
        </Box>
      ))}
    </Container>
  );
}
