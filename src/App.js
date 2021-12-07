import React, { Component } from 'react'

import { Container } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
//import { Container,Row } from "reactstrap";
// import {container,Row} from "reactstrap"
import { container, Row, Col } from 'reactstrap';
import alertify from "alertifyjs";
import {  Router } from "react-router-dom";
import NotFound from './NotFound';
import CartList from "./CartList"
import FormDemo1 from './FormDemo1';
import FormDemo2 from './FormDemo2';

export default class App extends Component {//class compenente çevirdim.
state={
  currentCategory:" ",products:[],cart:[]
};
componentDidMount(){
  this.getProducts();
}

changeCategory=(category)=>{
    this.setState({currentCategory:category.categoryName});
    
    this.getProducts(category.id);
  } ;//error function 
  
  getProducts=(categoryId)=>{//bu bir fonksiyondur.

    let url="http://localhost:3000/products";
    if(categoryId){//seoUrl tanımlandıysa
       url+="?categoryId"+categoryId;

    }
    fetch(url)
   .then(response=>response.json()).
    then(data=>this.setState({products:data}));;
  };
  
  addToCard=(product)=>{
    let newCart=this.state.cart;
  var addedItem=newCart.find(c=>c.product.id==product.id)
  if(addedItem){
    addedItem.quatity+=1;
  }else{  newCart.push({product:product,quatity:1});}

  this.setState({cart:newCart});
  alertify.success(product.productName+"     ürününüz eklendi.");

}

removeFromCart=(product)=>{
  //arraydaki elemanları verdiğin şarta göre filtreler.
  let newCart=this.state.cart.filter(c=>c.product.id!==product.id)
  this.setState({cart:newCart})
  alertify.error(product.productName+"     ürün silindi.");
}



render(){
  let productInfo={title:"ProductList"};
 let categoryInfo={title:"CategoryList"}
  return (
  <div>
    <Container>
     
    <Navi 
    removeFromCart={this.removeFromCart}
    cart={this.state.cart}/>
      
      <Row>
        {/* <Col xs="3">   <CategoryList title="Category lList"/> </Col>
      <Col xs="9"><ProductList title="Product List"/> </Col> */}
       <Col xs="3"> 
         <CategoryList currentCategory={
           this.state.currentCategory}
            changeCategory={this.changeCategory}
             info={categoryInfo}/> </Col>
      <Col xs="9">

{/* <Router path="/" component={NotFound}>  </Router> */}
{/* <Router path="/cart" component={CartList}>  </Router>  */}

<ProductList products={this.state.products} 
addToCard={this.addToCard}
currentCategory={this.state.currentCategory}
info={productInfo} />

<CartList cart={this.state.cart} 
removeFromCart={this.removeFromCart}

/>

<FormDemo1 />
<FormDemo2/>

         </Col>

      </Row>
      </Container>
  </div>

);
} }


