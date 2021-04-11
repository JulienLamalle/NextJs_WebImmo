import React from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
} from "mdbreact";
import Link from "next/link";

const Header = () => {
  return (
    <MDBNavbar className="text-white bg-night py-4" expand="md">
      <MDBNavbarToggler />
      <MDBCollapse id="navbarCollapse" navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
            <Link href="/">
              <a className="nav-link">
                <MDBIcon icon="home" className="mr-1" />
                Accueil
              </a>
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link href="/properties" passHref>
              <a className="nav-link">
                <MDBIcon icon="building" className="mr-1" />
                Liste des biens
              </a>
            </Link>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <Link href="/contact">
              <a className="nav-link">
                <MDBIcon icon="address-book" className="mr-1" />
                Contact
              </a>
            </Link>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Header;
