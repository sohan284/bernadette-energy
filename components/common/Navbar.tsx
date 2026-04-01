"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Contact us", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = targetId ? document.getElementById(targetId) : null;

      if (targetId === "") { // Home / Top
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-blue-800 border-b border-white/10">
      <div className="max-w-[1600px] mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            onClick={(e) => handleScroll(e as any, "#")}
            className="text-2xl font-(family-name:--font-satisfy) text-white hover:opacity-80 transition-opacity"
          >
            Bernadette Energy
          </Link>
        </div>

        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all text-white/90 hover:bg-white/10 hover:text-white"
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
