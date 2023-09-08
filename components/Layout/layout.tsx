import { useMediaQuery } from "@mui/material";
import Appbar from "./Appbar";
import BottomAppBar from "./BottomAppbar";
import Theme from "../../src/theme";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const extraSmall = useMediaQuery(Theme.breakpoints.down("xs"));
  return (
    <>
      <Appbar />

      <main>{children}</main>
      {extraSmall && <BottomAppBar />}
    </>
  );
}
