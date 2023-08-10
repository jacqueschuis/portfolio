import Trail from "./Trail";
import Link from "next/link";

const Nav = ({ dark, active }) => {
  return (
    <nav
      className={`flex w-full md:text-lg text-sm justify-between items-baseline mb-3 xl:mb-0 md:pt-6 pt-4 ${
        dark ? "text-blue-700" : "text-white"
      }`}
    >
      <Link
        href="/"
        className={`font-bold md:text-2xl text-lg ${
          dark ? "logo-dark" : "logo"
        }`}
      >
        JP
      </Link>
      <div className="flex md:gap-16 gap-4">
        <Trail>
          <Link
            href="/projects"
            className={`${
              dark
                ? "hover-underline-animation-dark nav-link-dark"
                : "hover-underline-animation nav-link"
            } ${active === "projects" ? "font-bold" : ""}`}
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className={`${
              dark
                ? "hover-underline-animation-dark nav-link-dark"
                : "hover-underline-animation nav-link"
            } ${active === "blog" ? "font-bold" : ""}`}
          >
            Blog
          </Link>
          <Link
            href="/cv"
            className={`${
              dark
                ? "hover-underline-animation-dark nav-link-dark"
                : "hover-underline-animation nav-link"
            } ${active === "cv" ? "font-bold" : ""}`}
          >
            CV
          </Link>
          <Link
            href="/contact"
            className={`${
              dark
                ? "hover-underline-animation-dark nav-link-dark"
                : "hover-underline-animation nav-link"
            } ${active === "contact" ? "font-bold" : ""}`}
          >
            Contact
          </Link>
        </Trail>
      </div>
    </nav>
  );
};

export default Nav;
