import React from "react";
import { useState } from "react";
import { Dialog } from "@mui/material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface ReferenceProps {
  img: string;
  width?: string;
}
export default function Reference({ img, width }: ReferenceProps) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <img src={img} alt="" width={width || "100%"} onClick={toggleOpen} />
      <Dialog
        // @ts-ignore
        TransitionComponent={Transition}
        open={open}
        PaperProps={{
          style: {
            backgroundColor: "transparent",
          },
        }}
      >
        <img
          src={img}
          style={{ maxHeight: "100vh", maxWidth: "100%", margin: "auto" }}
          alt=""
          onClick={toggleOpen}
        />
      </Dialog>
    </>
  );
}
