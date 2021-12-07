import React, { Component } from 'react'
import { Table } from 'reactstrap'
import {Button} from "reactstrap"

export default class ProductList extends Component {
   
    render() {
        return (
            <div>
                <h2>{this.props.info.title}-
                {this.props.currentCategory}</h2>
                <Table bordered>
  <thead> <tr>
      <td>#</td>
      <td>Product Name</td>
      <td>Unit Price</td>
      <td>Unit In Stock</td>
      <th></th>
      
      </tr> 
      </thead>
  <tbody>
      {this.props.products.map(product=>(
            <tr key={product.id}>
                  
                  
      <th scope="row">{product.id}</th>
      <td>{product.productName} </td>
      <td>{product.unitPrice} </td>
      <td> {product.unitsInStok} </td>
      <td><Button onClick={()=>this.props.addToCard(product)} color="info"outline>
    Ekle
  </Button></td>
                 </tr>
            
          )) //döngüyle gezme
}
   
    
  </tbody>
</Table>



              
                
            </div>
        )
    }
}
