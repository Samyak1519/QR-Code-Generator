import QRCode from "qrcode.react";

function QRPreview({ qrValue, downloadQR }) {
  if (!qrValue) return null;

  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="bg-gray-100 p-4 rounded-lg">
        <QRCode id="qrCodeCanvas" value={qrValue} size={200} includeMargin />
      </div>

      <button
        onClick={downloadQR}
        className="
        mt-6
        bg-black
        text-white
        px-6
        py-2
        rounded-lg
        hover:bg-gray-800
        transition
        "
      >
        Download QR
      </button>
    </div>
  );
}

export default QRPreview;
