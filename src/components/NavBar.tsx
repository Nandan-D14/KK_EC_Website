import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/", hash: "home" },
    { name: "Team", href: "/team" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blogs" },
    { name: "About", href: "/", hash: "about" },
    { name: "Contact", href: "/", hash: "contact" },
  ];

  const handleNavigation = (item: { href: string; hash?: string }) => {
    if (item.hash && item.href === location.pathname) {
      const element = document.querySelector(`#${item.hash}`);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (item: { href: string; hash?: string }) => {
    if (location.pathname === "/") {
      return item.href === "/";
    }
    return item.href !== "/" && location.pathname.startsWith(item.href);
  };

  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {navItems.map((item) => {
        const navLink = (
          <Link
            key={item.name}
            to={item.href}
            onClick={() => handleNavigation(item)}
            className={isMobile ? "w-full" : ""}
          >
            <Button
              variant="ghost"
              className={
                isMobile
                  ? `w-full justify-start text-black ${
                      isActive(item) ? "bg-yellow-50" : "hover:bg-yellow-50"
                    }`
                  : `bg-transparent bold text-black hover:bg-transparent border-0 border-b-2 transition-colors duration-300 ${
                      isActive(item)
                        ? "border-yellow-500"
                        : "border-transparent"
                    } hover:border-yellow-500`
              }
            >
              {item.name}
            </Button>
          </Link>
        );

        if (isMobile) {
          return <SheetClose asChild>{navLink}</SheetClose>;
        }
        return navLink;
      })}
    </>
  );

  const JoinUsButton = ({ isMobile = false }) => (
    <Button
      className={`text-sm bg-yellow-400 text-muted-foreground group flex items-center ${
        isMobile ? "w-full mt-4" : "hidden sm:flex"
      }`}
    >
      Join Us
      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Button>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 md:p-2">
      
      <header className="w-full max-w-screen-xl mx-auto bg-blue-200/40 backdrop-blur-lg border-accent/20 shadow-lg rounded-none md:rounded-2xl border-b sm:border">
        
        <div className="flex items-center justify-between p-3">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-festival rounded-full flex items-center justify-center shadow-festival">
              <span className="text-primary-foreground font-bold text-lg font-kannada">
                ಕ
              </span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-primary">
                ಕನ್ನಡ ಕುಟ್ಟ ಇಸಿ
              </h1>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLinks />
          </nav>

          {/* Join Button & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <JoinUsButton />

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="flex flex-col space-y-2 mt-8">
                    <NavLinks isMobile />
                    <JoinUsButton isMobile />
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;

