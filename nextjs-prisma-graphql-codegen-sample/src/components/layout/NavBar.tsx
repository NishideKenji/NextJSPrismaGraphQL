import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap'

export default function NavBar() {
  const { data: session } = useSession()

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="sm"
      className="border-bottom box-shadow mb-3"
    >
      <Container>
        {
          //@ts-ignore
          <Navbar.Brand as={NavLink} href="/">
            SatelliTrack
          </Navbar.Brand>
        }
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {true && (
              <>
                <Nav.Link as={NavLink} href="/batchlog">
                  Batchlog
                </Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} href="/privacy">
              PrivacyPolicy
            </Nav.Link>
            {session ? (
              <>
                <NavDropdown
                  title={session?.user?.email}
                  id="collasible-nav-dropdown-user"
                >
                  <NavDropdown.Item href="/register">register</NavDropdown.Item>
                  <NavDropdown.Item href="/websitesettings">
                    WebsiteSettings
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/batchlog">batchlog</NavDropdown.Item>
                  {process.env.NODE_ENV === 'development' && (
                    <NavDropdown.Item href="/errors">Errors</NavDropdown.Item>
                  )}
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => signOut()}>
                    signOut
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                {process.env.NODE_ENV === 'development' && (
                  <Nav.Link onClick={() => signIn()}>Login</Nav.Link>
                )}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
