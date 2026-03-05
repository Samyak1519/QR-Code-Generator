function QRInput({ link, setLink, generateQR }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your URL..."
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="
        w-full
        border
        border-gray-300
        rounded-lg
        px-4
        py-3
        mb-4
        focus:outline-none
        focus:ring-2
        focus:ring-indigo-500
        "
      />

      <button
        onClick={generateQR}
        className="
        w-full
        bg-indigo-600
        text-white
        py-3
        rounded-lg
        font-semibold
        hover:bg-indigo-700
        transition
        "
      >
        Generate QR
      </button>
    </div>
  );
}

export default QRInput;
