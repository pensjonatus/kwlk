import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BoxProps } from "@mui/system";
import CircleCard, { cardDiameter } from "./CircleCard";
import { featureList } from "./featureList";

type CircleCoordinates = {
  posX: number;
  posY: number;
};

function getCircleArray(
  numberOfItems: number,
  radius: number
): CircleCoordinates[] {
  const numberOfSegments = 360 / numberOfItems;

  const angles = [];
  for (let i = 0; i <= numberOfItems; i++) {
    angles.push((numberOfSegments / 180) * i * Math.PI);
  }

  const circleArray = [];
  for (let i = 0; i < numberOfItems; i++) {
    const posX = Math.round(radius * Math.cos(angles[i]));
    const posY = Math.round(radius * Math.sin(angles[i]));
    circleArray.push({ posX, posY });
  }

  return circleArray;
}

type CircleNavProps = BoxProps & {
  selectedIndex: number;
  circleRadius: number;
  borderThickness: number;
};

export default function CircleNav({
  selectedIndex,
  circleRadius,
  borderThickness,
  children,
  ...otherProps
}: CircleNavProps) {
  const circleArray = getCircleArray(featureList.length, circleRadius);

  function getOffsetIndex(index: number, selectedIndex: number): number {
    const offset = (selectedIndex - index) * -1;
    const newIndex = selectedIndex + offset;
    if (newIndex > featureList.length - 1) {
      return newIndex - featureList.length;
    } else if (newIndex < 0) {
      return featureList.length + newIndex;
    } else {
      return newIndex;
    }
  }

  return (
    <Box
      id="centerHolder"
      sx={{
        position: "relative",
        height: cardDiameter,
        width: cardDiameter,
        borderRadius: "50%",
        backgroundColor: "mauve",
        zIndex: 300,
      }}
      {...otherProps}
    >
      {children}
      <Box
        id="falconer"
        sx={{
          position: "absolute",
          top: -1 * circleRadius + borderThickness,
          left: 0 - borderThickness,
          width: cardDiameter + borderThickness * 2,
          height: cardDiameter + borderThickness * 2,
          border: `${borderThickness}px solid gold`,
          borderRadius: "50%",
        }}
      />
      {featureList.map(({ link, alt, image }, index) => {
        const offsetIndex = getOffsetIndex(index, selectedIndex);
        const coordinates = circleArray[offsetIndex];
        return (
          <Box
            className="falcon"
            sx={{
              position: "absolute",
              right: coordinates.posX,
              top: coordinates.posY,
              transition: "all 0.5s ease-out",
              zIndex: -1 * offsetIndex,
            }}
            key={index}
          >
            <CircleCard link={link} alt={alt} image={image} />
            <Box
              className="falconLabel"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
              }}
            >
              <Typography sx={{ color: "red" }} fontSize="20px">
                {offsetIndex}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
