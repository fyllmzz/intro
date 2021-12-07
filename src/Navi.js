import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar,NavbarBrand,
    NavbarToggler,NavItem,NavLink,NavbarText,Collapse,
    Nav,


} from "reactstrap"
import CartSummary from './CartSummary';
export default class Navi extends Component {
    

    render() {
        return (
            <div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      Northwind App
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          {/* <NavLink href="/components/">
            Components
          </NavLink>
          <NavLink to="/form1/">
            Form Demo 1
          </NavLink> */}
<NavLink>
<Link to="/form1">
            Form Demo 1
          </Link> </NavLink>
        </NavItem>
<NavItem>
<Link to="/form2">
            Form Demo 2
          </Link> 
  
  
   </NavItem>

        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            GitHub
          </NavLink>
        </NavItem>
        

<CartSummary 

removeFromCart={this.props.removeFromCart}
cart={this.props.cart}/>




      </Nav>
     
    </Collapse>
  </Navbar>
</div>
        )
    }
}
