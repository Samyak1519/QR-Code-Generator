import { useState } from "react";
import Header from "../components/Header";
import QRInput from "../components/QRInput";
import QRPreview from "../components/QRPreview";

function Home() {
  const [link, setLink] = useState("");
  const [qrValue, setQrValue] = useState("");

  const generateQR = () => {
    if (!link) return;
    setQrValue(link);
  };

  const downloadQR = () => {
    const canvas = document.getElementById("qrCodeCanvas");

    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const downloadLink = document.createElement("a");

    downloadLink.href = pngUrl;
    downloadLink.download = "qr-code.png";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center">
      <Header />

      <div className="mt-20 bg-white rounded-2xl shadow-xl p-10 w-[420px]">
        <QRInput link={link} setLink={setLink} generateQR={generateQR} />

        <QRPreview qrValue={qrValue} downloadQR={downloadQR} />
      </div>
    </div>
  );
}

export default Home;
