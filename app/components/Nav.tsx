"use client";
import React, { useState, useEffect } from "react";

import NavMobile from "./Nav/NavMobile";
import NavDesktop from "./Nav/NavDesktop";

type NavProps = {
  navVisible: boolean;
  isDesktop: boolean;
};

const Nav: React.FC<NavProps> = ({ navVisible, isDesktop }) => {
  return (
    <>
      {navVisible && !isDesktop ? (
        <div className="h-14 w-25 fixed top-29 left-24 flex flex-col justify-around z-20">
          <div className="w-full h-2 bg-blackLighter rounded-182"></div>
          <div className="w-full h-2 bg-blackLighter rounded-182"></div>
          <div className="w-full h-2 bg-blackLighter rounded-182"></div>
        </div>
      ) : (
        ""
      )}
      {isDesktop ? <NavDesktop position={"fixed"} color={"text-blackLighter"} /> : ""}
    </>
  );
};

export default Nav;
