import Appbar from "./Appbar";
export default function Layout({ children }) {
  return (
    <>
      <Appbar />
      <main>{children}</main>
    </>
  );
}
