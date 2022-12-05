import Appbar from "../Layout/Appbar";
import BottomAppBar from "../Layout/BottomAppbar";
export default function Layout({ children }) {
  return (
    <>
      <Appbar />

      <main>{children}</main>
      <BottomAppBar />
    </>
  );
}
