import React, { Component } from "react";
import "./createPerson.css";

class CreatePerson extends Component {

    state={
        name:"",
        email: "",
        phone:""
    }

    // Handles change in an input, updates state to the value of the correspondant input
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = event => {

        event.preventDefault();
    
        const data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone

        }
        
        fetch("https://api.pipedrive.com/v1/persons?api_token=479f2bc15058867bb7dcfdaade60fe25d27c55f4", {
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(data => console.log(data))
    }
    
    render(){
        return(
            <form onSubmit={ this.handleSubmit }>

                <div className="input_container">
                    <input type="text" id="nombre" name="name" placeholder="Name" onChange={ this.handleChange }/>
                </div>

                <div className="input_container">
                    <input type="email" id="email" name="email" placeholder="Email - e.g.(email@example.com)" onChange={ this.handleChange }/>
                </div>

                <div className="input_container">
                    <input type="tel" id="phone_number" name="phone" placeholder="Phone Number" onChange={ this.handleChange }/>
                </div>

                <button type="submit" id="submit">Add Person</button>

            </form>
        )
    }
}

export default CreatePerson;