import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
} from "mdbreact";
import Link from "next/link";
import useAuth from "../../auth/context";
import { useRouter } from "next/router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const { logout, user, isAuthenticated } = useAuth();

  return (
    <MDBNavbar className="text-white bg-night py-4" expand="md">
      <MDBNavbarToggler onClick={handleToggle} />
      <MDBCollapse id="navbarCollapse" navbar isOpen={isOpen}>
        <MDBNavbarNav left>
          <MDBNavItem active={router.pathname === "/"}>
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
          {isAuthenticated && user.role === "admin" && (
            <MDBNavItem>
              <Link href="/property/list">
                <a className="nav-link">Dashboard</a>
              </Link>
            </MDBNavItem>
          )}
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem active={router.pathname === "/contact"}>
            <Link href="/contact">
              <a className="nav-link">
                <MDBIcon icon="address-book" className="mr-1" />
                Contact
              </a>
            </Link>
          </MDBNavItem>
          {!isAuthenticated && (
            <MDBNavItem active={router.pathname === "/login"}>
              <Link href="/login">
                <a className="nav-link">
                  <MDBIcon icon="user-alt" className="mr-1" />
                  Connexion
                </a>
              </Link>
            </MDBNavItem>
          )}

          {isAuthenticated && (
            <>
              <MDBNavItem>
                <div className="nav-link">
                  <MDBIcon icon="user-alt" className="mr-1" />
                  Bonjour {user.username}
                </div>
              </MDBNavItem>

              <MDBNavItem>
                <a className="nav-link" onClick={logout}>
                  <MDBIcon icon="power-off" className="mr-1" />
                  Déconnexion
                </a>
              </MDBNavItem>
            </>
          )}
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Header;
