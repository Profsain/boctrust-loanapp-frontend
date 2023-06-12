import "./Navigation.css";

const DropNavbar = () => {
  document.addEventListener("DOMContentLoaded", function () {
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll(".dropdown-menu").forEach(function (element) {
      element.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    });

    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {
      // close all inner dropdowns when parent is closed
      document
        .querySelectorAll(".navbar .dropdown")
        .forEach(function (everydropdown) {
          everydropdown.addEventListener("hidden.bs.dropdown", function () {
            // after dropdown is hidden, then find all submenus
            this.querySelectorAll(".submenu").forEach(function (everysubmenu) {
              // hide every submenu as well
              everysubmenu.style.display = "none";
            });
          });
        });

      document.querySelectorAll(".dropdown-menu a").forEach(function (element) {
        element.addEventListener("click", function (e) {
          let nextEl = this.nextElementSibling;
          if (nextEl && nextEl.classList.contains("submenu")) {
            // prevent opening link if link needs to open dropdown
            e.preventDefault();
            console.log(nextEl);
            if (nextEl.style.display == "block") {
              nextEl.style.display = "none";
            } else {
              nextEl.style.display = "block";
            }
          }
        });
      });
    }
    // end if innerWidth
  });
  // DOMContentLoaded  end
    
  return (
    // ============= COMPONENT START// ==============
    <nav className="navbar navbar-expand-lg navbar-dark Nav">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main_nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              {" "}
              <a className="nav-link" href="#">
                Home{" "}
              </a>{" "}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {" "}
                About{" "}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                {" "}
                Treeview menu{" "}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    {" "}
                    Dropdown item 1{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {" "}
                    Dropdown item 2 &raquo;{" "}
                  </a>
                  <ul className="submenu dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Submenu item 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Submenu item 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Submenu item 3 &raquo;{" "}
                      </a>
                      <ul className="submenu dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Multi level 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Multi level 2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Submenu item 4
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Submenu item 5
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {" "}
                    Dropdown item 3{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {" "}
                    Dropdown item 4{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                {" "}
                More items{" "}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    {" "}
                    Dropdown item 1{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {" "}
                    Dropdown item 2 &raquo;{" "}
                  </a>
                  <ul className="submenu dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Submenu item 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Submenu item 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Submenu item 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {" "}
                    Dropdown item 3 &raquo;{" "}
                  </a>
                  <ul className="submenu dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Another submenu 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another submenu 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another submenu 3
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another submenu 4
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {" "}
                    Dropdown item 4 &raquo;
                  </a>
                  <ul className="submenu dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Another submenu 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another submenu 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another submenu 3
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another submenu 4
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {" "}
                    Dropdown item 5{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {" "}
                    Dropdown item 6{" "}
                  </a>
                </li>
              </ul>
            </li>
          </ul>                 
        </div>{" "}
        {/* navbar-collapse.// */}
      </div>{" "}
      {/* container// */}
    </nav>
    // ============= COMPONENT END// ==============
  );
};

export default DropNavbar;
