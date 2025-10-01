"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Kisah Tasty",
    href: "/kisah-tasty",
  },
  {
    label: "Produk",
    href: "/produk",
  },
  {
    label: "Komitmen Tasty",
    href: "/komitmen-tasty",
  },
  {
    label: "Artikel",
    href: "/artikel",
  },
  {
    label: "Tasty Universe",
    href: "/tasty-universe",
  },
  // {
  //   label: "Blog",
  //   href: "/blog",
  // },
  {
    label: "Hubungi Tasty",
    href: "/hubungi-tasty",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Fungsi untuk menentukan apakah link aktif
  const isActiveLink = (href: string) => {
    // Untuk home page, hanya cocok jika pathname persis "/"
    if (href === "/") {
      return pathname === "/";
    }
    // Untuk route lainnya, cocok jika pathname dimulai dengan href
    return pathname.startsWith(href);
  };

  return (
    <div className="flex justify-center w-full h-auto sticky top-0 z-50">
      <div className="w-full max-w-full bg-[#003BE2] font-nunito text-white">
        {/* Main Header Container */}
        <div className="mx-auto px-6 lg:px-20 2xl:max-w-[1440px]">
          <div className="flex justify-between items-center h-auto py-2">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/assets/tasty-fruit-logo.svg"
                  alt="Tasty Fruit Logo"
                  width={70}
                  height={70}
                  className="sm:w-12 sm:h-12 lg:w-16 lg:h-16"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors whitespace-nowrap ${
                    isActiveLink(item.href)
                      ? "text-[#B5FE28]" // Active link color
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="py-2 rounded-md text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-6 py-4 bg-[#003BE2] border-t border-white/10">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-3 rounded-lg text-sm font-semibold transition-colors ${
                    isActiveLink(item.href)
                      ? "bg-white/10 text-[#B5FE28]" // Active link color
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
