import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { featureList } from "./featureList";
import Card from "@mui/material/Card";

type CentralLinkProps = {
  selectedIndex: number;
  cardDiameter: number;
};

export default function CentralLink({
  cardDiameter,
  selectedIndex,
}: CentralLinkProps) {
  return (
    <Link
      href={featureList[selectedIndex].link}
      style={{
        color: "black",
        textDecoration: "none",
      }}
    >
      <Card elevation={5} variant="outlined">
        <Stack
          sx={{
            position: "relative",
            width: cardDiameter,
            height: cardDiameter,
            border: `2px solid black`,
            textAlign: "center",
            padding: 5,
            backgroundColor: "white",
          }}
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          <Typography fontSize={16}>
            {featureList[selectedIndex].title}
          </Typography>
          <Typography fontSize={13}>
            {featureList[selectedIndex].description}
          </Typography>
        </Stack>
      </Card>
    </Link>
  );
}
