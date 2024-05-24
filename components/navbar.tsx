"use client"
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import {
  Logo,
  ResumeIcon,
  SearchIcon,
} from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";



export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleValueChange = (query: string) => {
    const params = new URLSearchParams(window.location.search);
    if (query) {
      params.set('query', query);
    } else {
      params.delete('query');
    }
    const queryString = params.toString();
    const updatedPath = `${pathname}${queryString ? `?${queryString}` : ''}`
    router.push(updatedPath);
  };


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
      onValueChange={handleValueChange}
      className= {pathname==="/blog"?"visible":"hidden"}
    />
  );
  console.log(pathname)

  return (
    <NextUINavbar position="sticky" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>


      <NavbarContent className="basis-1/5 lg:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">Poshan Peeroo</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden md:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>



      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.resume}
            startContent={<ResumeIcon className="size 6" />}
            variant="flat"
          >
            Resume
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem
              onClick={toggleMenu}
              key={`${item}-${index}`}
              isActive={item.href === pathname}>
              <NextLink href={item.href}>
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>

        <NavbarMenuItem>
          <Button
            onClick={toggleMenu}
            isExternal
            as={Link}
            className="w-full text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.resume}
            startContent={<ResumeIcon className="size 6" />}
            variant="flat"
          >
            Resume
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>

    </NextUINavbar>
  );
};
















// export const Navbar = () => {
//   const pathname = usePathname();
//   const router = useRouter();

//   const handleValueChange = (query: string) => {
//     const params = new URLSearchParams(window.location.search);
//     if (query) {
//       params.set('query', query);
//     } else {
//       params.delete('query');
//     }
//     const queryString = params.toString();
//     const updatedPath = `${pathname}${queryString ? `?${queryString}` : ''}`
//     router.push(updatedPath);
//   };


//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  
//   const searchInput = (
//     <Input
//       aria-label="Search"
//       classNames={{
//         inputWrapper: "bg-default-100",
//         input: "text-sm",
//       }}
//       labelPlacement="outside"
//       placeholder="Search..."
//       startContent={
//         <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
//       }
//       type="search"
//       onValueChange={handleValueChange}
//       className= {pathname==="/blog"?"visible":"hidden"}
//     />
//   );
//   console.log(pathname)

//   return (
//     <NextUINavbar maxWidth="xl" position="sticky" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
//       <NavbarContent className="basis-1/5 lg:basis-full" justify="start">
//         <NavbarBrand as="li" className="gap-3 max-w-fit">
//           <NextLink className="flex justify-start items-center gap-1" href="/">
//             <Logo />
//             <p className="font-bold text-inherit">Poshan Peeroo</p>
//           </NextLink>
//         </NavbarBrand>
//         <ul className="hidden md:flex gap-4 justify-start ml-2">
//           {siteConfig.navItems.map((item) => (
//             <NavbarItem key={item.href}>
//               <NextLink
//                 className={clsx(
//                   linkStyles({ color: "foreground" }),
//                   "data-[active=true]:text-primary data-[active=true]:font-medium",
//                 )}
//                 color="foreground"
//                 href={item.href}
//               >
//                 {item.label}
//               </NextLink>
//             </NavbarItem>
//           ))}
//         </ul>
//       </NavbarContent>

//       <NavbarContent
//         className="hidden sm:flex basis-1/5 sm:basis-full"
//         justify="end"
//       >
//         <NavbarItem className="hidden sm:flex gap-2">
//           <ThemeSwitch />
//         </NavbarItem>
//         <NavbarItem className="lg:flex">{searchInput}</NavbarItem>
//         <NavbarItem className="hidden md:flex">
//           <Button
//             isExternal
//             as={Link}
//             className="text-sm font-normal text-default-600 bg-default-100"
//             href={siteConfig.links.resume}
//             startContent={<ResumeIcon className="size 6" />}
//             variant="flat"
//           >
//             Resume
//           </Button>
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
//         <ThemeSwitch />
//         <NavbarMenuToggle />
//       </NavbarContent>

//       <NavbarMenu>
//         {searchInput}
//         <div className="mx-4 mt-2 flex flex-col gap-2">
//           {siteConfig.navItems.map((item, index) => (
//             <NavbarMenuItem
//               onClick={toggleMenu}
//               key={`${item}-${index}`}
//               isActive={item.href === pathname}>
//               <NextLink href={item.href}>
//                 {item.label}
//               </NextLink>
//             </NavbarMenuItem>
//           ))}
//         </div>
        
//         <NavbarMenuItem>
//           <Button
//             onClick={toggleMenu}
//             isExternal
//             as={Link}
//             className="w-full text-sm font-normal text-default-600 bg-default-100"
//             href={siteConfig.links.resume}
//             startContent={<ResumeIcon className="size 6" />}
//             variant="flat"
//           >
//             Resume
//           </Button>
//         </NavbarMenuItem>
//       </NavbarMenu>
//     </NextUINavbar>
//   );
// };
