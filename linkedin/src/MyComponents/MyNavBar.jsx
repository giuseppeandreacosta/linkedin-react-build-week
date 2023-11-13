import React from 'react';
import { Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserFriends, faBriefcase, faCommentDots, faBell, faCircleUser, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo/logo.png';

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="border navbarbg ">
    <Navbar.Toggle aria-controls="navbarSupportedContent" />
    <Navbar.Collapse id="navbarSupportedContent" className='d-flex justify-content-center'>
      <img src={Logo} alt="Logo" style={{ width: "35px" }} className='me-2' />
      <Form inline className="my-2 my-lg-0 mr-5">
        <FormControl type="search" placeholder="Cerca" className="searche" />
      </Form>
      <Nav className="mr-auto ml-4 d-flex align-items-center">
        <Nav.Link href="#" className="d-flex flex-column align-items-center" style={{ textDecoration: 'none', color: 'grey' }}>
          <FontAwesomeIcon icon={faHome}  />
          <div className="menutext">Home</div>
        </Nav.Link>
        <Nav.Link href="#" className="d-flex flex-column align-items-center" style={{ textDecoration: 'none', color: 'grey' }}>
          <FontAwesomeIcon icon={faUserFriends}  />
          <div className="menutext">Rete</div>
        </Nav.Link>
        <Nav.Link href="#" className="d-flex flex-column align-items-center" style={{ textDecoration: 'none', color: 'grey' }}>
          <FontAwesomeIcon icon={faBriefcase}  />
          <div className="menutext">Lavoro</div>
        </Nav.Link>
        <Nav.Link href="#" className="d-flex flex-column align-items-center" style={{ textDecoration: 'none', color: 'grey' }}>
          <FontAwesomeIcon icon={faCommentDots}  />
          <div className="menutext">Messaggistica</div>
        </Nav.Link>
        <Nav.Link href="#" className="d-flex flex-column align-items-center" style={{ textDecoration: 'none', color: 'grey' }}>
          <FontAwesomeIcon icon={faBell}  />
          <div className="menutext">Notifiche</div>
        </Nav.Link>
        <div className="d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faCircleUser}  style={{height:'20px',color:'grey'}}/>
          <div className="menutext">Tu
          <NavDropdown  id="navbarDropdownMenuLink">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
          </NavDropdown>
          </div>
        </div>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default MyNavbar;
