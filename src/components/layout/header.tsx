import Sakana from "../icons/sakana";

export default function Header() {
  return (
    <header className="page-container sticky top-0 z-50 bg-neutral-900">
      <div className="flex flex-row justify-between">
        <div className="">
          <Sakana size={48} />
        </div>
        <div className="flex flex-row gap-6 sm:gap-12 text-xs sm:text-sm justify-center items-center pr-2">
          {/*<Link
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
      </div>
    </header>
  );
}
