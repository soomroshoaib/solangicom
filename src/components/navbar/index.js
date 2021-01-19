import React,{Component} from 'react'
// import {Container} from '@material-ui/core'
import {Navbar,Nav,FormControl,Form,Button,NavDropdown,Container} from 'react-bootstrap'
import './assets/css/app.css'

export default class MyNavbar extends Component{
render(){
    return(
        // <Container fluid>         
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
            <div className='navbar-logo-div'>
                <img src={require('./assets/images/stech.jpeg')} style={{marginLeft: '70px'}}/>
                
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav" style={{marginRight: '70px'}}> 
          <Nav className="ml-auto">
            <NavDropdown title="Our Services" id="basic-nav-dropdown">
              <NavDropdown.Item  onClick={()=>this.props.reRoute('/services')} href="#">Services</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>this.props.reRoute('/web-development')} href="#">Web Development</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>this.props.reRoute('/app-development')} href="#">Mobile App Development</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>this.props.reRoute('/custom-software-development')} href="#">Custom Software Development</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>this.props.reRoute('/off-shore-management')} href="#">Off Shore Management</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>this.props.reRoute('/digital-marketing')} href="#">Digital Marketing</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link  onClick={()=>this.props.reRoute('/aboutus')} href="#">About Us</Nav.Link>
            <Nav.Link  onClick={()=>this.props.reRoute('/contactus')} href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>     
      // </Container>
    )
}



}