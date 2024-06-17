"use client";
import React, { useState, useEffect } from "react";
import { CombinedNav } from "./ui/convined-navbar"; // Cambia esta ruta según sea necesario
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export function FloatingNavbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    }
  ];

  return (
    <div className="relative w-full">
      <CombinedNav navItems={navItems} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  );
}
