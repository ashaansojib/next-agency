import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaLocationPin,
} from "react-icons/fa6";

const TopHeader = () => {
  return (
    <div className="bg-primary p-2 text-accent">
      <div className="my-container flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Link href="/">About Us</Link> |<Link href="/">FAQ</Link>|
          <Link href="/">
            <FaLinkedinIn />
          </Link>
          |
          <Link href="/">
            <FaFacebookF />
          </Link>
          |
          <Link href="/">
            <FaTwitter />
          </Link>
        </div>
        <div className="flex gap-3">
          <p className="border-r pr-3">
            <FaLocationPin className="text-primary inline" /> Dhaka 1209,
            Bangladesh
          </p>
          <Link href="mailto:ashaduzzamansojib67@gmail.com">
            <FaEnvelope className="text-primary inline" /> F2Developer@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
