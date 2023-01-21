import { useState } from "react";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { featureList } from "./featureList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CircleNav from "./CircleNav";
import CentralLink from "./CentralLink";

export default function Features() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const circleRadius = 420;
  const lineThickness = 5;
  const cardDiameter = 300;

  function switchToOffsetItem(offset: number) {
    const newIndex = selectedIndex + offset;
    if (newIndex > featureList.length - 1) {
      setSelectedIndex(newIndex - featureList.length);
    } else if (newIndex < 0) {
      setSelectedIndex(featureList.length + newIndex);
    } else {
      setSelectedIndex(newIndex);
    }
  }

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "hidden",
        paddingTop: "30px",
        border: `${lineThickness / 2}px solid black`,
      }}
    >
      <CircleNav
        circleRadius={circleRadius}
        selectedIndex={selectedIndex}
        borderThickness={lineThickness}
        cardDiameter={cardDiameter}
      >
        <Stack alignItems="center" padding={2}>
          <CentralLink
            cardDiameter={cardDiameter}
            selectedIndex={selectedIndex}
          />
          <Stack direction="row">
            <IconButton
              aria-label="poprzedni"
              onClick={() => switchToOffsetItem(-1)}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              aria-label="następny"
              onClick={() => switchToOffsetItem(1)}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Stack>
        </Stack>
      </CircleNav>
    </Container>
  );
}
