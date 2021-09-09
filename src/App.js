import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Nav, Navbar, NavDropdown, Carousel } from 'react-bootstrap'
import './custom.scss';



function App() {
  return (
    <div className="App">

      <div className="App">
        <Navbar bg="light-grey" variant="light" sticky="top" expand="lg" collapseOnSelect>
          <Navbar.Brand>
            <img src="triagle.png" alt="" width="41.1px" height="33px " />{' '}
            <img src="logo.png" alt="" width="124.45px" height="24.5px" />{' '}           
          </Navbar.Brand>

            <Navbar.Toggle/>
            <Navbar.Collapse>

            <Nav>

              <NavDropdown title="Market News">
                <NavDropdown.Item href="#overview">Market Overview</NavDropdown.Item>
                <NavDropdown.Item href="#realtime">Real-Time News</NavDropdown.Item>
                <NavDropdown.Item href="#forecasts">Forecasts</NavDropdown.Item>
                <NavDropdown.Item href="#outlook">Markets Outlook</NavDropdown.Item>
              
              </NavDropdown>
              <NavDropdown title="Market Strategies"></NavDropdown>
            </Nav>

            </Navbar.Collapse>
            
            
            <Button>Register</Button>

        </Navbar>
      <div>
          
        <span STYLE="font-weight:bold" className="text1">Trade Forex & Stocks Online</span>
        
        <img src="img/dollar-apple-phone.png" className="FirstImage" alt="" width="450px" height="500px" />{' '}
        <p><Button>Register</Button></p>
      </div>

      <div className="content">

        
      </div>

      </div>
      
    </div>
  );
}

export default App;
