"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navlink from "./Navlink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const Navbar = () => {
    const [hamOpen, setHamOpen] = useState(false);
    const topVariants = {
      closed: {
        rotate: 0,
      },
      opened: {
        rotate: 45,
        backgroundColor: "rgb(255,255,255)",
      },
    };
    const centerVariants = {
      closed: {
        opacity: 1,
      },
      opened: {
        opacity: 0,
      },
    };
  
    const bottomVariants = {
      closed: {
        rotate: 0,
      },
      opened: {
        rotate: -45,
        backgroundColor: "rgb(255,255,255)",
      },
    };

    const listVariants = {
      closed: {
        x: "100vw",
      },
      opened: {
        x: 0,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.2,
        },
      },
    };
  
    const listItemVariants = {
      closed: {
        x: -10,
        opacity: 0,
      },
      opened: {
        x: 0,
        opacity: 1,
      },
    };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {
          links.map(link=>(
            <Navlink link={link} key={link.title}/>
          ))
        }
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:justify-center xl:w-1/3">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Himanshu</span>
          <span className="w-14 h-8 rounded bg-white text-black flex justify-center items-center">
            Digrase
          </span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="/">
          <Image src="/github.png" width={24} height={24}/>
        </Link>
        <Link href="/">
          <Image src="/linkedin.png" width={24} height={24}/>
        </Link>
        <Link href="/">
          <Image src="/leetcode.png" width={24} height={24}/>
        </Link>
        <Link href="/">
          <Image src="/email.png" width={28} height={28}/>
        </Link>
      </div>
      <div>
        {/* MENU Button*/}
        <div className="md:hidden">
          <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={()=>setHamOpen(!hamOpen)}>
            <motion.div variants = {topVariants} animate = {hamOpen? "opened" : "closed"} className="w-10 h-1 bg-white rounded origin-left"></motion.div>
            <motion.div variants = {centerVariants} animate = {hamOpen? "opened" : "closed"} className="w-10 h-1 bg-white rounded"></motion.div>
            <motion.div variants = {bottomVariants} animate = {hamOpen? "opened" : "closed"} className="w-10 h-1 bg-white rounded origin-left"></motion.div>
          </button>
          {/* MENU LIST */}
          {
            hamOpen && 
              <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
          {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title} >

            <Link href={link.url}>
              {link.title}
            </Link>
              </motion.div>
          ))}
          </motion.div>
         }
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
