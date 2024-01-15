import React, { useEffect } from "react";
import "./sidenavbar.css";
import Body from "../Body";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  useEffect(() => {
    const toggle = document.getElementById("header-toggle");
    const nav = document.getElementById("nav-bar");
    const bodypd = document.getElementById("body-pd");
    const headerpd = document.getElementById("header");

    const showNavbar = () => {
      // show navbar
      nav.classList.toggle("show");
      // change icon
      toggle.classList.toggle("bx-x");
      // add padding to body
      bodypd.classList.toggle("body-pd");
      // add padding to header
      headerpd.classList.toggle("body-pd");
    };

    const linkColor = document.querySelectorAll(".nav_link");

    function colorLink() {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }

    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", showNavbar);
    }

    linkColor.forEach((l) => l.addEventListener("click", colorLink));

    // Remove event listeners when component is unmounted
    return () => {
      if (toggle) {
        toggle.removeEventListener("click", showNavbar);
      }

      linkColor.forEach((l) => l.removeEventListener("click", colorLink));
    };
  }, []);

  return (
    <main id="body-pd">
      <header className="header" id="header">
        <div className="header_toggle">
          <i className="bx bx-menu" id="header-toggle"></i>
        </div>
        <div className="header_img">
          <img src="https://i.imgur.com/hczKIze.jpg" alt="" />
        </div>
      </header>
      <div className="l-navbar" id="nav-bar">
        <nav className="nav container-with-scroll">
          <div>
            <Link to="/" className="nav_logo">
              <i className="bx bx-layer nav_logo-icon"></i>
              <span className="nav_logo-name">Construction</span>
            </Link>
            <div className="nav_list">
              <Link to="/" className="nav_link active">
                <i className="bx bx-grid-alt nav_icon"></i>
                <span className="nav_name">Dashboard</span>
              </Link>
              <Link to="/document" className="nav_link">
                <i className="bx bxs-file-doc nav_icon"></i>
                <span className="nav_name">Documents</span>
              </Link>
              <Link to="/schedule" className="nav_link">
                <i className="bx bx-calendar nav_icon"></i>
                <span className="nav_name">Schedule</span>
              </Link>
              <Link to="/cost" className="nav_link">
                <i className="bx bx-dollar nav_icon"></i>
                <span className="nav_name">Cost</span>
              </Link>
              <Link to="resource" className="nav_link">
                <i className="bx bx-hard-hat nav_icon"></i>
                <span className="nav_name">Resources</span>
              </Link>
              <Link to="procurement" className="nav_link">
                <i className="bx bx-purchase-tag-alt nav_icon"></i>
                <span className="nav_name">Procurement</span>
              </Link>
              <Link to="freeissuematerial" className="nav_link">
                <i className="bx bx-cart nav_icon"></i>
                <span className="nav_name">Free issue material</span>
              </Link>
              <Link to="materialstore" className="nav_link">
                <i className="bx bx-store nav_icon"></i>
                <span className="nav_name">Material Store</span>
              </Link>
              <Link to="prefabrication" className="nav_link">
                <i className="bx bx-bar-chart-alt-2 nav_icon"></i>
                <span className="nav_name">PreFabrication</span>
              </Link>
              <Link to="equipment" className="nav_link">
                <i className="bx bxs-component nav_icon"></i>
                <span className="nav_name">Equipment</span>
              </Link>
              <Link to="consignment" className="nav_link">
                <i className="bx bx-transfer nav_icon"></i>
                <span className="nav_name">Consignment</span>
              </Link>
              <Link to="scaffolding" className="nav_link">
                <i className="bx bx-objects-vertical-center nav_icon"></i>
                <span className="nav_name">Scaffolding</span>
              </Link>
              <Link to="siteinstallation" className="nav_link">
                <i className="bx bx-building-house nav_icon"></i>
                <span className="nav_name">Site Installation</span>
              </Link>
              <Link to="report" className="nav_link">
                <i className="bx bxs-pie-chart-alt nav_icon"></i>
                <span className="nav_name">Reports</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="body-container">
        <Body />
      </div>
    </main>
  );
};

export default SideNavbar;
