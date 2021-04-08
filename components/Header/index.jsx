import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';

const Header = () => {
  return (
    <MDBNavbar className="text-white bg-night py-5" expand="md">
      <MDBNavbarToggler />
      <MDBCollapse id="navbarCollapse" navbar>
        <MDBNavbarNav left>
          <div className="nav-link">
            <MDBIcon icon="home" className="mr-1" />
            Home
          </div>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Header;
