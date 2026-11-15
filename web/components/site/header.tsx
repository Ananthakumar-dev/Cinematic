import { Menu, Popcorn, Search } from "lucide-react";
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

const Header = ({ showSearch = true }: { showSearch?: boolean }) => {
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
          <Button>Sign in</Button>

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
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Bookings</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
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
