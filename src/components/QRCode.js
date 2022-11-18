import { QRCode } from "react-qrcode-logo";

export default function About(props) {
  return (
    <QRCode
      value={window.location.href}
      logoImage="/logo.png"
      size={props.size}
    />
  );
}
