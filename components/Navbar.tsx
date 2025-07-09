import Link from "next/link";

export default function Navbar() {
  // Theme state: 'light' or 'dark'
  // const [theme, setTheme] = useState<"light" | "dark">(
  //   typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
  //     ? "dark"
  //     : "light"
  // );

  // Sync theme with localStorage and document
  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.setAttribute("dark", "");
  //     document.documentElement.classList.add("dark-mode");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.documentElement.removeAttribute("dark");
  //     document.documentElement.classList.remove("dark-mode");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [theme]);



  return (
    <header className="header">
      <div className="container-big">
        <div className="row">
          <div className="header__inner col col-12">
            <div className="logo">
              <Link className="logo__link" href="/">
                Ahmad
              </Link>
            </div>
            <nav className="main-nav">
              <div className="main-nav__box">
                <ul className="nav__list list-reset">
                  <li className="nav__item">
                    <a href="#home" className="nav__link active-link">
                      Home
                    </a>
                  </li>
                  {/* <li className="nav__item">
                    <Link href="/about/index.html" className="nav__link">
                      About
                    </Link>
                  </li> */}
                  <li className="nav__item">
                    <a href="#work" className="nav__link">
                      Work
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="#client" className="nav__link">
                      Client
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="#writing" className="nav__link">
                      Writing
                    </a>
                  </li>
                  {/* <li className="nav__item dropdown">
                    <span className="nav__link dropdown-toggle">
                      Pages{" "}
                      <i className="ion ion-ios-arrow-down arrow-down"></i>
                    </span>
                    <div className="dropdown-menu">
                      <Link href="/contact/index.html" className="nav__link">
                        Contact
                      </Link>
                      <Link href="/elements/index.html" className="nav__link">
                        Elements
                      </Link>
                    </div>
                  </li> */}
                </ul>
              </div>
            </nav>
            {/* <div className="nav-button">
              <div className="hamburger">
                <div></div>
              </div>
              <div className="toggle-theme toggle-theme-js">
                <div
                  className="toggle-moon"
                  title="Enable dark mode"
                  style={{
                    display: theme === "light" ? "block" : "none",
                    cursor: "pointer",
                  }}
                  onClick={toggleTheme}
                >
                  <i className="ion ion-ios-moon"></i>
                </div>
                <div
                  className="toggle-sun"
                  title="Enable light mode"
                  style={{
                    display: theme === "dark" ? "block" : "none",
                    cursor: "pointer",
                  }}
                  onClick={toggleTheme}
                >
                  <i className="ion ion-ios-sunny"></i>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}
