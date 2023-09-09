import Appbar from "./Appbar";
import BottomAppBar from "./BottomAppbar";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Appbar />
      <main>{children}</main>
      <BottomAppBar />
    </>
  );
}
