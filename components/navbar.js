"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="h-nav-height bg-amber-500">
        <div className="text-center space-x-2.5 text-purple-600 text-xl">
          <Link href="/about"> About </Link>
          <Link href="/projects"> Projects </Link>
          <Link href="/contact"> Contact </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
