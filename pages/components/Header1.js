import Image from "next/image";
import React from "react";

const Header1 = () => {
  return (
    <div className="flex h-20">
      <Image src={"/logo.png"} alt="logo" width={200} height={200} />
    </div>
  );
};

export default Header1;
