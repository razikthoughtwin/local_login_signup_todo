import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {

let isauthenticated = localStorage.getItem("token");
  const handlelogout=()=>{
    localStorage.removeItem("token");
    window.location.href="/"
  }
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand >TODO</Navbar.Brand>
            <Nav className="me-auto">
              {!isauthenticated?
              
            (<><Nav><Link to="/"><button>Login</button></Link></Nav>
              <Nav><Link to="/signup"><button>Signup</button></Link></Nav></>)
            :(<>
            
            <Nav><Link to="/dasboard"><button>Dashboard</button></Link></Nav>
              <Nav><Link to="/dasboard"><button onClick={()=>{handlelogout()}}>logout</button></Link></Nav>
            
            </>)}
             
              
            </Nav>
          </Container>
        </Navbar>

        </>
  );
}

export default Header;