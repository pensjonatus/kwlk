import { useState } from "react";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { cardDiameter } from "./CircleCard";
import { featureList } from "./featureList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CircleNav from "./CircleNav";

export default function Features() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const circleRadius = 400;

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
      }}
    >
      <CircleNav
        circleRadius={circleRadius}
        selectedIndex={selectedIndex}
        borderThickness={10}
      >
        <Link
          href={featureList[selectedIndex].link}
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          <Stack
            sx={{
              position: "relative",
              width: cardDiameter,
              height: cardDiameter,
              border: `2px solid black`,
              borderRadius: "50%",
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
        </Link>
      </CircleNav>
      <Stack direction="row">
        <IconButton
          aria-label="poprzedni"
          onClick={() => switchToOffsetItem(-1)}
        >
          <ArrowBackIcon style={{ color: "white" }} />
        </IconButton>
        <IconButton aria-label="następny" onClick={() => switchToOffsetItem(1)}>
          <ArrowForwardIcon style={{ color: "white" }} />
        </IconButton>
      </Stack>
    </Container>
  );
}
