"use client";

import React, { useEffect, useState } from "react";
import style from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import {
  BsDiscord,
  BsFillPersonFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { HiFolderOpen, HiMail, HiMenuAlt3 } from "react-icons/hi";
import { ImCross } from "react-icons/im";

export default function Navbar() {
  interface ArrayInterface {
    title: string;
    icon: JSX.Element;
    link: string;
  }

  const [navBarclicked, setnavBarclicked] = useState(false);

  useEffect(() => {
    const Items = document.getElementById("Items");
    if (Items) {
      if (!navBarclicked) {
        Items.style.height = "0px";
      } else {
        Items.style.height = "264px";
      }
    }
  });

  const pages: ArrayInterface[] = [
    { title: "Home", icon: <AiFillHome />, link: "/" },
    { title: "Projects", icon: <HiFolderOpen />, link: "/projects" },
    { title: "Skills", icon: <BsFillPersonFill />, link: "/skillbar" },
    { title: "Contact", icon: <HiMail />, link: "/contact" },
  ];

  const navBarclick = () => {
    if (!navBarclicked) {
      setnavBarclicked(true);
    } else {
      setnavBarclicked(false);
    }
  };

  return (
    <>
      <div className={style.navbar}>
        <div className="flex items-center gap-16 pr-7">
          <Link className={style.navelement} href="/">
            <div>
              <Image
                src="/home1.png"
                alt="..."
                width={30}
                height={7}
                className={style.img}
              />{" "}
              <p>Home</p>
            </div>
          </Link>
          <Link className={style.navelement} href="/projects">
            <div>
              <Image
                alt="..."
                src="/edit.png"
                width={30}
                height={7}
                className={style.img}
              />{" "}
              <p>Projects</p>
            </div>
          </Link>
          <Link className={style.navelement} href="/skillbar">
            <div>
              <Image
                src="/user1.png"
                alt="..."
                width={30}
                height={7}
                className={style.img}
              />{" "}
              <p>Skills</p>
            </div>
          </Link>
          <Link className={style.navelement} href="/contact">
            <div>
              <Image
                src="/contact1.png"
                alt="..."
                width={30}
                height={7}
                className={style.img}
              />{" "}
              <p>Contact</p>
            </div>
          </Link>
          <Link className={style.views} href={""}>
            <img
              alt="Hits"
              src="https://hits.sh/www.schurig.tech.svg?style=for-the-badge&label=views&extraCount=1000&color=a81a1a&labelColor=1b1b1b"
            />
          </Link>
        </div>
        <div className="flex gap-2">
          <Link href="https://github.com/Gamius00">
            <BsGithub className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/fabius-schurig-80713b284/">
            <BsLinkedin className="h-6 w-6" />
          </Link>
          <Link href="https://discord.gg/HanXgrKr8J">
            <BsDiscord className="h-6 w-6" />
          </Link>
        </div>
      </div>

      <div className={style.OverLay}>
        <div className={style.IconDiv}>
          <h1>FS</h1>
          <span onClick={navBarclick}>
            {navBarclicked ? (
              <ImCross className={style.Cross} />
            ) : (
              <HiMenuAlt3 className={style.Icon} />
            )}
          </span>
        </div>
        <div id="Items" className={style.menu}>
          <div>
            {pages.map((item) => {
              return (
                <div
                  key={item.title}
                  onClick={() => {
                    location.href = item.link;
                  }}
                  className={style.all}
                >
                  {" "}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ marginTop: "4px", marginRight: "5px" }}>
                      {item.icon}
                    </span>{" "}
                    <span>{item.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
