import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Layout() {
  return (
    <>
    <div className="bgImage">
      <Navbar style={{ background: 'transparent', boxShadow: 'none'}}>
        <Container>
          <Navbar.Brand>Diaz Sifonte's</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
      </div>
      <Footer />
     
    </>
  );
}

export default Layout;