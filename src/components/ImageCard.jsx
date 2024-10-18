import React from "react";

export default function ImageCard({ children, imgSrc, ...props }) {
  return (
    <div
      {...props}
      className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group"
    >
      <img
        src={imgSrc}
        alt="Image"
        className="transition-transform group-hover:scale-110 duration-200"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/40 to-transparent">
        <div className="p-4 text-white  ">{children}</div>
      </div>
    </div>
  );
}
