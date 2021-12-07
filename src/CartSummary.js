import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import{ UncontrolledDropdown,
    DropdownToggle,DropdownMenu,
    DropdownItem,Badge, NavItem, Nav, NavLink
} from "reactstrap"


export default class CartSummary extends Component {

    renderSummary(){
       return( 
       
       <UncontrolledDropdown
        inNavbar
        nav
      >
        <DropdownToggle
          caret
          nav
        >
          Sepet: {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
            {
                this.props.cart.map(cartItem=>(
                  <DropdownItem
                  key={cartItem.product.id}>
                      <Badge
                      color="danger"
                       onClick={()=>this.props.removeFromCart(cartItem.product)}>
                           X

                      </Badge>

                      
                 {cartItem.product.productName}


              <Badge color="success">{cartItem.quatity} </Badge>


                </DropdownItem>

                ))

            }
       
     
          <DropdownItem divider />
          <DropdownItem>
            <Link to="cart">Karta Git</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>);

    }

    renderEmptyCart(){
        return(<NavItem>
            <NavLink> Boş Sepet</NavLink>



        </NavItem>);
        
    }



    render() {
     
        return (
            <div>
              {this.props.cart.length>0? this.renderSummary(): this.renderEmptyCart() }
            </div>
        )
    }
}
