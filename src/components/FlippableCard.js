import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const FlippableCard = ({
  name,
  role,
  department,
  staffId,
  validThru,
  profileUrl,
  org,
  phoneNumber,
  signature,
  websiteUrl,
}) => {
  const [flipped, setFlipped] = useState(false);
  const handleFlip = () => setFlipped((prev) => !prev);

  return (
    <div
      onClick={handleFlip}
      className="relative w-full max-w-[400px] cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      {/* === Flip Container === */}
      <div
        className={`relative w-full h-[220px] rounded-3xl transition-transform duration-500`}
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ================= FRONT SIDE ================= */}
        <div
          className="absolute inset-0 backface-hidden bg-transparent rounded-3xl p-0"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* === Card Wrapper === */}
          <div className="flex flex-col w-full rounded-3xl shadow bg-transparent p-0 hover:shadow-lg transition-shadow duration-200">

            {/* === Main Card === */}
            <div className="relative flex flex-col sm:flex-row items-stretch justify-between p-3 sm:p-4 rounded-xl shadow-lg bg-[#0B1E35] text-white 
            transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl overflow-hidden min-h-[160px] max-h-[220px] w-full">

              {/* === Left Column: Logo and Profile === */}
              <div className="flex flex-col justify-between h-full flex-shrink-0 space-y-1 sm:space-y-2">
                {/* Logo Section */}
                <div className="flex flex-col items-start -mt-1 sm:-mt-2 w-[90px] sm:w-[100px] overflow-hidden">
                  <div className="flex items-center space-x-1 truncate">
                    <img 
                      src="/images/logo.png" 
                      alt={`${org} logo`} 
                      className="w-3.5 h-3.5 object-contain sm:w-4 sm:h-4"
                    />        
                    <h1 className="text-[12px] sm:text-[13px] font-bold tracking-wide leading-tight truncate max-w-[70px] sm:max-w-[80px]">
                      {org.split(" ")[0].toUpperCase()}
                    </h1>
                  </div>
                  <p className="text-[6.5px] sm:text-[7px] text-gray-300 tracking-widest uppercase leading-tight truncate max-w-[90px] sm:max-w-[100px]">
                    {org.split(" ").slice(1).join(" ")}
                  </p>
                </div>

                {/* Profile Image */}
                <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] rounded-lg overflow-hidden border border-gray-500">
                  <img
                    src={profileUrl}
                    alt={`${name} Profile`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Signature & Staff ID */}
                <div className="flex items-center justify-between mt-2 w-full space-x-2">
                  <h3 className="font-semibold italic text-[9px] sm:text-[10px] truncate max-w-[80px] sm:max-w-[90px]">
                    {signature}
                  </h3>
                  <div className="flex flex-col leading-tight min-w-0">
                    <p className="text-[8px] sm:text-[9px] text-gray-400 uppercase">Staff ID</p>
                    <p className="text-[9px] sm:text-[10px] font-semibold text-white break-all">{staffId}</p>
                  </div>
                </div>
              </div>

              {/* === Middle Section === */}
              <div className="flex flex-col justify-center flex-grow h-full px-1 sm:px-2 mt-6 sm:mt-8 overflow-hidden">
              <div className="min-w-0">
                  <h2 className="text-[13px] sm:text-[14px] font-bold leading-tight truncate">{name}</h2>
                  <p className="text-[10px] sm:text-[11px] text-gray-200 truncate">{role}</p>
                </div>
                <div className="min-w-0 mt-2 sm:mt-2.5">
                  <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wide">Department</p>
                  <p className="text-[11px] sm:text-[12px] font-semibold text-white truncate">{department}</p>
                </div>
              </div>

              {/* === Right Section - NFC icons === */}
              <div className="flex sm:flex-col items-center justify-center gap-2 sm:gap-1">
      <div className="flex items-center justify-center w-6 h-6 rounded-full border border-blue-400 bg-[#102A49] hover:bg-blue-900 transition">
        <img
          src="/images/nfc_card.png"
          alt="NFC"
          className="w-4 h-4 object-contain animate-pulse"
        />
      </div>
      <div className="relative flex items-center justify-center w-6 h-6 rounded-full border border-blue-400 bg-[#102A49] hover:bg-blue-900 transition">
        <img
          src="/images/nfc_card.png"
          alt="NFC"
          className="w-4 h-4 object-contain animate-pulse"
        />
      </div> 
    </div>

              {/* Valid Thru */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-[8px] sm:text-[9px] text-gray-400 font-semibold uppercase leading-tight">
                  Valid Thru
                </p>
                <p className="text-[8px] sm:text-[9px] font-semibold text-white leading-tight">
                  {validThru}
                </p>
              </div>
            </div>

            {/* === Below the Card Section === */}
            <div className="flex flex-col justify-start items-start gap-2.5 w-full mt-3">
              {/* Department & Access Level */}
              <div className="flex justify-center items-center rounded-lg w-full h-16 bg-gray-50">
                <div className="flex flex-row justify-between items-center w-full px-4">
                  <div className="flex flex-col justify-start items-center gap-0.5">
                    <div className="text-sm text-neutral-900 font-semibold">{role}</div>
                    <div className="text-xs text-gray-500 font-medium">{department}</div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-0.5">
                    <div className="text-sm text-neutral-900 font-semibold">Standard</div>
                    <div className="text-xs text-gray-500 font-medium">Access Level</div>
                  </div>
                </div>
              </div>

              {/* Expiry & Actions */}
              <div className="flex flex-col justify-start items-start gap-4 w-full">
                <div className="flex flex-row justify-start items-center gap-2">
                  <img width="16.3" height="16.3" src="/images/expiry.png" alt="Expiry icon" />
                  <div className="text-sm text-gray-600 font-medium">Expires: {validThru}</div>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-row justify-start items-center gap-4">
                    <img width="18.5" height="18.5" src="/images/pencil.png" alt="Edit" className="cursor-pointer hover:bg-gray-100 p-1 rounded transition" />
                    <img width="17.3" height="17.3" src="/images/download.png" alt="Download" className="cursor-pointer hover:bg-gray-100 p-1 rounded transition" />
                    <img width="16" height="18.5" src="/images/trash.png" alt="Delete" className="cursor-pointer hover:bg-gray-100 p-1 rounded transition" />
                  </div>

                  <div className="flex flex-row justify-center items-center gap-1 px-4 py-1.5 rounded-lg border border-teal-500 h-8 cursor-pointer hover:bg-teal-50 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md mr-3 mb-3">
                    <img width="16" height="16" src="/images/preview.png" alt="Preview" />
                    <div className="text-xs text-teal-500 font-medium">Preview</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BACK SIDE ================= */}
<div
  className="absolute inset-0 backface-hidden rounded-3xl flex flex-col items-center justify-center"
  style={{
    transform: "rotateY(180deg)",
    backfaceVisibility: "hidden",
  }}
>

  {/* === Corner Dotted sections === */}
    {/* Top-left */}
    <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-dotted border-[#3A4F6A] rounded-tl-xl"></div>
    {/* Top-right */}
    <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-dotted border-[#3A4F6A] rounded-tr-xl"></div>
    {/* Bottom-left */}
    <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-dotted border-[#3A4F6A] rounded-bl-xl"></div>
    {/* Bottom-right */}
    <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-dotted border-[#3A4F6A] rounded-br-xl"></div>

  {/* === Outer Frame section === */}
  <div className="relative bg-[#0B1E35] rounded-2xl p-3 shadow-lg flex items-center justify-center w-[190px] h-[190px]">
    <div className="bg-white rounded-xl p-[6px]">
      <QRCodeCanvas
        value={[
          "BEGIN:VCARD",
          "VERSION:3.0",
          `FN:${name}`,
          `TITLE:${role}`,
          `ORG:${org}`,
          `TEL:${phoneNumber}`,
          `EMAIL:${name.split(" ")[0].toLowerCase()}@${org.split(" ")[0].toLowerCase()}.com`,
          `URL:${websiteUrl}`,
          "END:VCARD",
        ].join("\r\n")}
        size={160}
        bgColor="#ffffff"
        fgColor="#000000"
        level="H"
        style={{ width: "160px", height: "160px" }}
      />
    </div>

    {/* ===  Logo at the center section === */}
<div className="absolute inset-0 flex items-center justify-center ">
  <div className="relative w-10 h-10 bg-[#0B1E35] rounded-lg flex items-center justify-center border-2 border-white shadow-md">
    <img
      src="/images/logo.png"
      alt="OnTap logo"
      className="w-6 h-6 object-contain"
    />

    {/* === Small dotted corners around the logo section === */}
    {/* Top-left */}
    <div className="absolute top-[2px] left-[2px] w-2 h-2 border-t-2 border-l-2 border-dotted border-white rounded-tl-[2px]"></div>
    {/* Top-right */}
    <div className="absolute top-[2px] right-[2px] w-2 h-2 border-t-2 border-r-2 border-dotted border-white rounded-tr-[2px]"></div>
    {/* Bottom-left */}
    <div className="absolute bottom-[2px] left-[2px] w-2 h-2 border-b-2 border-l-2 border-dotted border-white rounded-bl-[2px]"></div>
    {/* Bottom-right */}
    <div className="absolute bottom-[2px] right-[2px] w-2 h-2 border-b-2 border-r-2 border-dotted border-white rounded-br-[2px]"></div>
  </div>
</div>

  </div>

{/* === Text Below the qr code section === */}
<p className=" text-xs font-semibold text-green uppercase tracking-widest">
    Scan to save contact
  </p>
  
          
        </div>
      </div>
    </div>
  );
};

export default FlippableCard;
