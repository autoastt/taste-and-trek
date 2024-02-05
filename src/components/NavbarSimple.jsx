import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ToggleMode from "./ToggleMode";
 
function NavList({ openNav, setOpenNav }) {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors" onClick={() => (openNav ? setOpenNav(!openNav) : setOpenNav(openNav))}>
        <Button variant="text" className="rounded-full normal-case font-medium py-2 px-4 dark:text-darky4">Demo Video</Button>
        </a>
      </Typography>
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors" onClick={() => (openNav ? setOpenNav(!openNav) : setOpenNav(openNav))}>
        <Button variant="text" className="rounded-full normal-case font-medium py-2 px-4">About Us</Button>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors" onClick={() => (openNav ? setOpenNav(!openNav) : setOpenNav(openNav))}>
        <Button variant="text" className="rounded-full normal-case font-medium py-2 px-4">About Us</Button>
        </a>
      </Typography> */}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#about-us" className="flex items-center hover:text-blue-500 transition-colors" onClick={() => (openNav ? setOpenNav(!openNav) : setOpenNav(openNav))}>
          <Button variant="text" className="rounded-full normal-case font-medium py-2 px-4 dark:text-darky4">About Us</Button>
          
        </a>
      </Typography>
      <div className="hidden lg:block"><ToggleMode/></div>
    </ul>
  );
}
 
export default function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="border-none bg-gray-50 dark:bg-darky1 sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between">
        {/* <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Taste and Trek (LOGO)
        </Typography> */}
        <img src="/src/assets/logo.png" className="mr-4 size-12 rounded-full"/>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="ml-auto mr-4 lg:hidden shrink"><ToggleMode/></div>
        <IconButton
          variant="text"
          className="lg:ml-auto dark:text-white mr-4 h-6 w-6 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList openNav={openNav} setOpenNav={setOpenNav}/>
      </Collapse>
    </Navbar>
  );
}