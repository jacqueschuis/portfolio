import Trail from "./Trail";
import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = ({ dark, active }) => {
  return (
    <div
      className={`flex w-full md:px-10 px-5 md:text-lg text-xl justify-between items-baseline absolute md:top-6 top-4 ${
        dark ? "text-black" : "text-white"
      }`}
    >
      <Link
        href="/"
        className={`font-bold text-2xl ${dark ? "logo-dark" : "logo"}`}
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
        </Trail>
      </div>
    </div>
  );
};

export default Nav;
