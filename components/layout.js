import Appbar from "./Appbar";
import Footer from "./Footer";
import BottomAppBar from "./BottomAppbar";
export default function Layout({ children }) {
  return (
    <>
      <Appbar />
      <main>{children}</main>
      <BottomAppBar />
      <Footer />
    </>
  );
}
