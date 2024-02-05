import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Button, IconButton } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import {motion} from 'framer-motion'
const ToggleMode = () => {
  const [theme, setTheme] = useState("light")
  // console.log(theme)
  
  const handleClick = () => {
    if (localStorage.getItem("theme") === "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      setTheme("dark")
    } else {
      localStorage.theme = "dark";
      setTheme("light")

    }
  }

  return (
  <motion.div whileHover={{ scale: 1.2, rotate: 360 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}>
    <IconButton variant="text" onClick={handleClick} className="rounded-full dark:hover:bg-darky3">
      {theme === "light" ? 
      <SunIcon className="size-5" strokeWidth={2} />
      :
      <MoonIcon className="size-4 fill-white text-white" strokeWidth={2} />
      }
    </IconButton>
  </motion.div>)
}

export default ToggleMode