import * as React from "react";
import { FaGithub } from "react-icons/fa";
import AnimatedIcon from "./AnimatedIcon";

export default function Github() {
  return (
    <AnimatedIcon
      icon={<FaGithub />}
      url="https://github.com/tekofx"
      color1="#e3e3e3"
    />
  );
}
