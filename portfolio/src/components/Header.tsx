import { NavLink } from "react-router";

const navBase = "text-white font-normal hover:text-blue-900 transition-colors";
const navActive = "text-blue-900";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
      <nav>
        <ul className="flex items-center gap-6">
          {[
            { to: "/", label: "KEVIN NGUYEN", extraClass: "sgeo" },
            { to: "/about", label: "About" },
            { to: "/projects", label: "Projects" },
            { to: "/experience", label: "Experience" },
            { to: "/resume", label: "Resume" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label, extraClass }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `${navBase} ${extraClass ?? ""} ${isActive ? navActive : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <a
          href="https://github.com/keviniannn"
          target="_blank"
          rel="noreferrer"
          className={navBase}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/keviniann/"
          target="_blank"
          rel="noreferrer"
          className={navBase}
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
};

export default Header;
