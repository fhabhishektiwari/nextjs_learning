"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [inputState, setInputState] = useState("");
  const pathName = usePathname();
  console.log("pathName", pathName);
  return (
    <div>
      <h2>Inner layout</h2>
      <input
        value={inputState}
        onChange={(e) => setInputState(e.target.value)}
      />
      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={
              isActive ? "font-bold text-orange-500 mr-4" : "text-blue-500 mr-4"
            }
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
