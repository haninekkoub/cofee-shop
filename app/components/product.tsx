import React from "react";

export default function Product() {
  return (
    <div className="w-full border-y-2 border-border flex">
      <div className="flex-1">
        <h3 className="text-4xl font-din uppercase text-center py-6">
          PRODUCT NAME
          <br />-
        </h3>
        <div></div>
      </div>
      <div className="border-l-2 border-border flex-1">
        <div className="h-[300px] border-b-2 border-border"></div>
        <div className="text-left px-6 py-10">
          <h3 className="text-4xl font-din uppercase">
            ABOUT PRODUCT
            <br />-
          </h3>
          <p className="text-base font-windsor text-[#AEAEB0] leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
