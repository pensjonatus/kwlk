import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useEffect, useState } from "react";
import eveningImage from "./evening.png";

export default function Evening() {
  const [showText, setShowText] = useState(false);

  useEffect(function () {
    setTimeout(() => {
      setShowText(true);
    }, 1000 * 60 * 12);
  }, []);

  return (
    <Stack alignItems="center" paddingTop={6}>
      <Image
        width={507}
        height={731}
        src={eveningImage}
        alt="Wieczorem, postać wygląda z okna na tle ciepłego światła. Nie widzimy jej twarzy, ale jesteśmy spokojni. To nie potwór."
        priority
      />
      <Typography
        component="div"
        color="white"
        sx={{ textShadow: "#FC0 1px 0 10px", opacity: showText ? 1 : 0 }}
      >
        Pomimo wojny nuklearnej, niewiele się zmieniło.
      </Typography>
    </Stack>
  );
}
