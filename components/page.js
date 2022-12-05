import Footer from "./Layout/Footer";
import { Box } from "@mui/material";
export default function Page({ children }) {
  return (
    <div>
      {children}
      <Footer />
      <Box
        height={100}
        sx={{
          display: { xs: "block", sm: "block", md: "none", lg: "none" },
        }}
      />
    </div>
  );
}
