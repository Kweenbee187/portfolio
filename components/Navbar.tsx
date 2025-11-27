"use client"
import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  return (
    <header className="flex justify-between items-center py-4 px-6">
      <Link href="/" className="text-xl font-bold">
        Sneha Chakraborty
      </Link>

      <nav className="hidden md:flex gap-4 text-lg">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <ThemeToggle />
    </header>
  )
}
