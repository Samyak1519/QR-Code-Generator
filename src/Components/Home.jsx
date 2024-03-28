import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

import QRCode from "qrcode.react";

import "./styles.css";

function Home() {
  const [link, setLink] = useState("");
  const [qrCodeValue, setQRCodeValue] = useState(false);

  const download_QR_CODE = () => {
    console.log(" QR Downloaded");
  };

  const generateCode = () => {
    setQRCodeValue(link);
    console.log("Generate Code Clicked");
  };

  const handleQRCode = (event) => {
    setLink(event.target.value);
  };

  return (
    <>
      <div style={{ paddingLeft: "18%", paddingRight: "18%" }}>
        <div
          style={{
            paddingTop: "8px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <TextField
            value={link}
            label="Enter Link Here"
            multiline
            variant="standard"
            style={{ marginRight: "30px", width: "100%" }}
            onChange={handleQRCode}
          />

          <Button
            variant="outlined"
            color="success"
            onClick={generateCode}
            style={{ marginTop: "10px" }}
          >
            Generate QR
          </Button>
        </div>
        <br />
        {/**************************** QR CODE Area ****************************************/}

        <div
          style={{
            border: "5px double grey",
            height: "50%",
            width: "100%",
            padding: "25px",
            marginTop: "5%",
            borderRadius: "30px",
            textAlign: "center",
          }}
        >
          Your QR code is ready to use.
          <br />
          <QRCode value={qrCodeValue} style={{ marginTop: "20px" }} />
          <br />
          <Button
            className="btn btn-info"
            onClick={download_QR_CODE}
            style={{ marginTop: "20px" }}
          >
            Download
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
