import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import FeatureCard, { cardDiameter } from "./FeatureCard";
import { featureList } from "./featureList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Features() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const borderThickness = 10;

  function getOffset(index: number): number {
    return (selectedIndex - index) * -1;
  }

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
        flexDirection: "column",
        overflow: "hidden",
        paddingTop: "30px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: cardDiameter + borderThickness * 2,
          height: cardDiameter + borderThickness * 2,
          border: `${borderThickness}px solid gold`,
          borderRadius: "50%",
        }}
      >
        {featureList.map(({ link, alt, image }, index) => {
          const offset = getOffset(index);
          return (
            <Box
              sx={{
                position: "absolute",
                top: Math.abs(offset * 110),
                right: offset * -300,
                transition: "all 0.5s ease-out",
                zIndex: -1,
              }}
              key={index}
            >
              <FeatureCard link={link} alt={alt} image={image} />
            </Box>
          );
        })}
      </Box>
      <Stack direction="row">
        <IconButton
          aria-label="poprzedni"
          onClick={() => switchToOffsetItem(-1)}
        >
          <ArrowBackIcon />
        </IconButton>
        <IconButton aria-label="następny" onClick={() => switchToOffsetItem(1)}>
          <ArrowForwardIcon />
        </IconButton>
      </Stack>
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
    </Container>
  );
}
