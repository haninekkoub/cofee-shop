import React from "react";

export default function Banner({ children, align }: any) {
  return (
    <div
      className="w-full text-7xl my-20 font-din tracking-wider"
      style={{
        textAlign:
          align === "center" ? "center" : align === "right" ? "right" : "left",
      }}
    >
      {children}
    </div>
  );
}
