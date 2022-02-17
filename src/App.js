import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './App.css';

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'
import Stay from './components/Stay'
import Culinary from './components/Culinary'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


function App() {
  
  const packages = ['Everest Base Camp Trek', 'Everest – Gokyo Lake Trek', 'Everest Gokyo Ri – Chola Pass Trek', 'Everest Kala Pattar Trek', 'Around Annapurna Trekh']
  const staylist = ['tent for Couples', 'tent for Singles', 'tent for Couples', 'tent for Kids', 'tent for Family']
  const culinarylist = ['steam rice and beans', 'fruits and veggies', 'Himalayan dal roti', 'Himachali makhaani', 'Pahadi daal']

  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Asian Mountain Trekking</h1>
          <Container>
            <Nav defaultActiveKey="/" variant="tabs" fill>
                <Nav.Item>
                    <Nav.Link href="/"> 
                        <Link to="/">Home</Link>
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item >
                    <Nav.Link eventKey={"aboutPage"}> 
                        <Link to="/about">About Us</Link>
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item >
                    <Nav.Link eventKey={"packagesPage"}> 
                        <Link to="/packages">Our Packages</Link> 
                    </Nav.Link>
                </Nav.Item>
                
                <Nav.Item >
                    <Nav.Link eventKey={"stay"}> 
                        <Link to="/stay">camp</Link> 
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item >
                    <Nav.Link eventKey={"culinary"}> 
                        <Link to="/culinary">Culinary</Link> 
                    </Nav.Link>
                </Nav.Item>

              </Nav>
          </Container>
                    
        </header>

        <div className="display">
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/packages" render={() => <Packages packages={packages}/>}  />
          <Route path="/stay" render={() => <Stay stay={staylist}/>}  />
          <Route path="/culinary" render={() => <Culinary culinary={culinarylist}/>}  />
          

        </div>

      </Router>

    </div>
  );
}

export default App;





