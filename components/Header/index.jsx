import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';
import Link from 'next/link';

const Header = () => {
  return (
    <MDBNavbar className="text-white bg-night py-4" expand="md">
      <MDBNavbarToggler />
      <MDBCollapse id="navbarCollapse" navbar>
        <MDBNavbarNav left>
          <MDBNavbarItem>
            <div className="nav-link">
              <MDBIcon icon="home" className="mr-1" />
              Accueil
            </div>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <Link href="/properties" passHref>
              <a className="nav-link">
                <MDBIcon icon="building" className="mr-1" />
                Liste des biens
              </a>
            </Link>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Header;
