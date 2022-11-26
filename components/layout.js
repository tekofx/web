import Appbar from "./Appbar";
import Footer from "./Footer";
import BottomAppBar from "./BottomAppbar";
import { Box } from "@mui/material";
import Page from "./page";
export default function Layout({ children }) {
  return (
    <>
      <Appbar />

      <main>{children}</main>
      <BottomAppBar />
    </>
  );
}
