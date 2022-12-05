import QRCode from "react-qr-code";

export default function About(props) {
  return (
    <div style={{ background: "white", padding: "5%" }}>
      <QRCode value={props.value} size={50} />
    </div>
  );
}
