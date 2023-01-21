import Box from "@mui/material/Box";
import Image from "next/image";
import eveningImage from "./evening.png";

export default function Evening() {
  return (
    <Box display="flex" justifyContent="center" paddingTop={6}>
      <Image
        width={507}
        height={731}
        src={eveningImage}
        alt="Wieczorem, postać wygląda z okna na tle ciepłego światła. Nie widzimy jej twarzy, ale jesteśmy spokojni. To nie potwór."
      />
    </Box>
  );
}
