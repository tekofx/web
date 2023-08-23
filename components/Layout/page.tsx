import Footer from "./Footer";
interface PageProps {
  children: React.ReactNode;
}
export default function Page({ children }: PageProps) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
