"use client";

import { Menu, Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import Link from "next/link";

type headerProps = {
  showSearch?: boolean;
  showSignin?: boolean;
};

type userType = "admin" | "user";

type menuLinkItem = {
  label: string;
  link: string;
};

const accountMenuLinks: Record<userType, menuLinkItem[]> = {
  admin: [{ label: "Settings", link: "/admin/settings" }],
  user: [
    { label: "Profile", link: "/profile" },
    { label: "Bookings", link: "/bookings" },
    { label: "Settings", link: "/settings" },
  ],
};

const Header = ({ showSearch = true, showSignin = true }: headerProps) => {
  const pathname = usePathname();
  const userType: userType = pathname.startsWith("/admin") ? "admin" : "user";
  const currentMenuLink = accountMenuLinks[userType];

  return (
    <header className="w-full border-b bg-background">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Logo />

        {/* Search bar */}
        {showSearch && (
          <div className="flex items-center border px-2 py-1 rounded-md">
            <Search className="mr-2" />

            <Input
              className="border-0 pl-2 focus-visible:ring-0 focus-visible:border-0 focus-visible:outline-none"
              placeholder="Movies and Theaters"
            />
          </div>
        )}

        {/* Signin */}
        <div className="flex items-center">
          {showSignin && <Button>Sign in</Button>}

          <div>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant="outline">
                    <Menu />
                  </Button>
                }
              />
              <DropdownMenuContent className="w-40" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  {currentMenuLink.map((item, key) => {
                    return (
                      <DropdownMenuItem>
                        <Link href={item.link} key={key}>
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
