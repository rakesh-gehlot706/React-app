import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) { 
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar- bg-${props.mode}`}>
        <div className={`container-fluid text-dark ${props.mode}` }>
          <a className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mx-5 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" href="/">
                  {props.aboutText}
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" href="/">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className={`btn btn-outline-success text-${props.mode === 'light' ? 'dark' : 'light'}`} type="submit">
                Search
              </button>
              <div className={`form-check form-switch text-{props.mode ==='light'? 'dark :'light'}`}>
  <input className="form-check-input my-3  " onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label my-2   text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Mode</label>
</div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

//  defaultprops

Navbar.defaultProps = { title: "set time here", aboutText: "About text here" };
