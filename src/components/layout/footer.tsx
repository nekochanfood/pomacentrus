import Link from "next/link";
import Github from "@/components/icons/github";
import Bsky from "@/components/icons//bsky";
import Twitter from "../icons/twitter";
import Sakana from "../icons/sakana";

export default function Footer() {
  return (
    <footer className="page-container sm:px-auto  bg-neutral-950">
      <div className=" flex flex-col gap-12 justify-between text-neutral-500">
        <div className="flex flex-row w-full justify-between">
          {/* Pages */}
          <div className="flex flex-col gap-3 text-sm">
            {/*<h2 className="text-xl font-bold text-neutral-300">Menu</h2>
            <Link
              href="/"
              className="hover:text-neutral-300 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-neutral-300 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="hover:text-neutral-300 transition-colors duration-300"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="hover:text-neutral-300 transition-colors duration-300"
            >
              Contact
            </Link>*/}
          </div>
          {/* Logo */}
          <div className="text-neutral-300">
            <Sakana size={48} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full flex-wrap gap-6">
          {/* Copyrights */}
          <div className="flex flex-col justify-center items-centerwhitespace-pre leading-none">
            <h1 className="text-2xl font-bold">bettaworx</h1>
            <span className="text-sm">Copyright © 2026 bettaworx</span>
          </div>
          {/* Socials */}
          <div className="flex flex-row gap-3">
            <Link
              href="https://bsky.app/profile/bettaworx.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-neutral-800 hover:text-neutral-300 p-1.5 rounded-xl transition-colors duration-300"
            >
              <Bsky size={20} />
            </Link>
            <Link
              href="https://x.com/bettaworx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-neutral-800 hover:text-neutral-300 p-1.5 rounded-xl transition-colors duration-300"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="https://github.com/bettaworx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-neutral-800 hover:text-neutral-300 p-1.5 rounded-xl transition-colors duration-300"
            >
              <Github size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
