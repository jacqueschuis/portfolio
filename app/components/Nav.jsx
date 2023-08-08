import Trail from "./Trail";
import Link from "next/link";

const Nav = ({ dark, active }) => {
  return (
    <div
      className={`flex w-full md:text-lg text-sm justify-between items-baseline md:pt-6 pt-4 ${
        dark ? "text-blue-dark" : "text-white"
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
      <div className="flex md:gap-16 gap-8">
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
            href="/home"
            className={`${
              dark
                ? "hover-underline-animation-dark nav-link-dark"
                : "hover-underline-animation nav-link"
            } ${active === "blog" ? "font-bold" : ""}`}
          >
            Blog
          </Link>
          <Link
            href="/home"
            className={`${
              dark
                ? "hover-underline-animation-dark nav-link-dark"
                : "hover-underline-animation nav-link"
            } ${active === "cv" ? "font-bold" : ""}`}
          >
            CV
          </Link>
          <Link
            href="/home"
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
    </div>
  );
};

export default Nav;
