import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar } from "flowbite-react";

export default function Nav() {
  return (
    <>
    <Navbar fluid>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
      <span className="self-center whitespace-nowrap text-xl font-extrabold text-blue-700 text-pretty p-2 rounded-lg">CPERepo</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className=' mr-10'>
        <Navbar.Link href="/" active >
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">
          About
        </Navbar.Link>
        <Navbar.Link href="/projects">
          Projects
        </Navbar.Link>
        <Navbar.Link href="/login">
          Login/Sign Up
        </Navbar.Link>
      </Navbar.Collapse>
      {/* <div className=' w-10'></div> */}
    </Navbar>
    </>
  )
}


