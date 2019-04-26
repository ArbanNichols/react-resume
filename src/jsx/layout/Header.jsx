import React from 'react';

import { Navbar, Nav, Modal } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';
import ContactForm from '../components/common/ContactForm';
import WordCarousel from '../components/common/WordCarousel';
import { tools } from '../../js/data'; // static data;

const Header = () => {
  let [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <>
      <Modal show={show} onHide={toggle}>
        <ContactForm />
      </Modal>
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <LinkContainer to="/" exact>
          <Navbar.Brand>{'Arban Nichols '}</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <LinkContainer to="/" exact>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/resume" exact>
              <Nav.Link>Resume</Nav.Link>
            </LinkContainer>
            {/*<Nav.Item>
              <Nav.Link onClick={toggle}>Contact</Nav.Link> // TODO: Add email service
            </Nav.Item>*/}
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="https://github.com/ArbanNichols/react-resume">
              <WordCarousel words={tools} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
