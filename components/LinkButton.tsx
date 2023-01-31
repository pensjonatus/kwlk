import Button, { ButtonProps } from "@mui/material/Button";
import Link from "next/link";

export default function LinkButton({ children, ...otherProps }: ButtonProps) {
  return (
    <Button LinkComponent={Link} {...otherProps}>
      {children}
    </Button>
  );
}
