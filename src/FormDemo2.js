import React, { Component } from 'react'
import { Button,form,formGroup,Label,Input, Form, FormGroup } from 'reactstrap'
import alertify  from 'alertifyjs';


export default class FormDemo2 extends Component {
  state={email:"", password:"", description:"" }
  handleChange=(event)=>{
let name=event.target.name;
let value=event.target.value;
this.setState({[name]:value});
  };
  handleSubmit=(event)=>{
event.preventDefault();
alertify.success(this.state.email+"kaydedildi..");
  }
  
    render() {
        return (
            <div>
             <Form onSubmit={this.handleSubmit}>
                 <FormGroup> 
                 <Label for="email">Email</Label>
                 <Input type="email" name="email" id="email"
                  placeholder="Enter email" onChange={this.handleChange}
                 ></Input>

</FormGroup>
<FormGroup> 
                 <Label for="password">Şifre</Label>
                 <Input type="password" name="password" id="password"
                  placeholder="Enter password" onChange={this.handleChange}
                 ></Input>

</FormGroup>
<FormGroup> 
                 <Label for="description">Description</Label>
                 <Input type="textarea" name="description" id="description"
                  placeholder="Enter description" onChange={this.handleChange}
                 ></Input>

</FormGroup>


<FormGroup>
<Label for="city"> Şehir:  </Label>

 {/* açılır kutu. */}

<Input type="select" name="city" id="city" 
onChange={this.handleChange}>
<option> Ankara</option>
<option> İstanbul</option>
<option> İzmir</option>
<option> Adana</option>
<option> Bursa</option>
<option> Manisa</option>
<option> Yozgat</option>

</Input>

</FormGroup>
<Button type="submit" color="success" > Kaydet</Button>




                 </Form>            
                 
                 
                 </div>
        )
    }
}
