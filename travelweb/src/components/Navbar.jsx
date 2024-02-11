import React from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
const Navabar = (props) => {
  const backgroundColor = `bg-white`;
  return (
    <div>
      <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-darkBackground text-white">
        <div className="flex items-center">
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <h1 className="font-semibold text-xl cursor-pointer">Tripxie</h1>
          </Link>
        </div>

        <nav className="flex flex-row items-center gap-6">
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Features
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Destination
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Contact
          </Link>
        </nav>

        <div className="flex flex-row items-center gap-6">
          <h1 className="hover:text-brightColor transition-all cursor-pointer">
            Register
          </h1>
          <Button title="Login" backgroundColor={backgroundColor} />
        </div>
      </div>
    </div>
  );
};

export default Navabar;
