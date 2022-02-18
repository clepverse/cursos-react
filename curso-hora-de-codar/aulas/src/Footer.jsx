import React from "react";
import { FaFacebook } from "react-icons/fa";
import { DiFirebase } from "react-icons/di";
import { SiAlpinedotjs, SiVite } from "react-icons/si";

export default function Footer() {
  return (
    <footer>
      <ul className="flex justify-center items-center">
        <li className="mx-2 ">
          <FaFacebook className="text-6xl" />
        </li>
        <li className="mx-2">
          <DiFirebase className="text-6xl" />
        </li>
        <li className="mx-2">
          <SiAlpinedotjs className="text-6xl" />
        </li>
        <li className="mx-2">
          <SiVite className="text-6xl" />
        </li>
      </ul>
    </footer>
  );
}
