import Appbar from "./Appbar";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <>
      <Appbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
