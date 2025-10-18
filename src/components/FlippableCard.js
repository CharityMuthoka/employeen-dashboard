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
}) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped((prev) => !prev);

  return (
    <div
      onClick={handleFlip}
      className={`relative w-full max-w-[400px] h-[220px] cursor-pointer perspective`}
      style={{ perspective: "1000px" }}
    >
      <div
        className={`relative w-full h-full rounded-xl shadow-lg transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.7s",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full backface-hidden bg-[#0B1E35] text-white rounded-xl p-4 flex flex-col sm:flex-row items-stretch justify-between"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Left Column: Logo + Profile */}
          <div className="flex flex-col justify-between flex-shrink-0 space-y-2 w-[110px]">
            {/* Logo */}
            <div>
              <div className="flex items-center space-x-1 mb-1">
                <img
                  src="/images/logo.png"
                  alt="ONTAP logo"
                  className="w-4 h-4 object-contain"
                />
                <h1 className="text-[13px] font-bold tracking-wide">ONTAP</h1>
              </div>
              <p className="text-[7px] text-gray-300 tracking-widest">
                GLOBAL WORKSPACE
              </p>
            </div>

            {/* Profile Image */}
            <div className="w-[80px] h-[80px] rounded-lg overflow-hidden border border-gray-500">
              <img
                src={profileUrl}
                alt={`${name} Profile`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name & Staff ID */}
            <div className="flex items-center justify-between mt-2 w-full space-x-2">
              <h3 className="font-semibold italic text-[10px] truncate max-w-[90px]">
                {signature}
              </h3>
              <div className="flex flex-col leading-tight min-w-0">
                <p className="text-[9px] text-gray-400 uppercase">Staff ID</p>
                <p className="text-[10px] font-semibold text-white break-all">
                  {staffId}
                </p>
              </div>
            </div>
          </div>

          {/* Middle Section: Staff Details */}
          <div className="flex flex-col justify-center flex-grow h-full px-2 mt-2 sm:mt-0 overflow-hidden">
            <div className="min-w-0">
              <h2 className="text-[14px] font-bold leading-tight truncate">
                {name}
              </h2>
              <p className="text-[11px] text-gray-200 truncate">{role}</p>
            </div>

            <div className="min-w-0 mt-2">
              <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                Department
              </p>
              <p className="text-[12px] font-semibold text-white truncate">
                {department}
              </p>
            </div>
          </div>

          {/* Right Section: QR + NFC + Menu */}
          <div className="flex flex-col items-center justify-around h-full gap-2 w-[80px] mt-4">
            {/* NFC Icons (just placeholders here) */}
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex items-center justify-center w-6 h-6 rounded-full border border-blue-400 bg-[#102A49]">
                <img
                  src="/images/nfc_card.png"
                  alt="NFC"
                  className="w-4 h-4 object-contain animate-pulse"
                />
              </div>
              <div className="flex items-center justify-center w-6 h-6 rounded-full border border-blue-400 bg-[#102A49]">
                <img
                  src="/images/nfc_card.png"
                  alt="NFC"
                  className="w-4 h-4 object-contain animate-pulse"
                />
              </div>
            </div>
          </div>

          {/* Valid Thru */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center w-full">
            <p className="text-[9px] text-gray-400 font-semibold uppercase leading-tight">
              Valid Thru
            </p>
            <p className="text-[9px] font-semibold text-white leading-tight">
              {validThru}
            </p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full backface-hidden bg-white rounded-xl p-4 flex flex-col items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <QRCodeCanvas
            value={`BEGIN:VCARD
VERSION:3.0
FN:${name}
TITLE:${role}
ORG:${org}
TEL:${phoneNumber}
EMAIL:${name.split(" ")[0].toLowerCase()}@ontapke.com
URL:https://ontapke.com
END:VCARD`}
            size={140}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
          />
          <p className="mt-4 text-gray-700 text-sm text-center">
            Scan this QR code to save contact info
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlippableCard;
