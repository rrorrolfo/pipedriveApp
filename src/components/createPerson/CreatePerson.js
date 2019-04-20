import React, { Component } from "react";
import "./createPerson.css";

class CreatePerson extends Component {

    
    render(){
        return(
            <form>

                <div className="input_container">
                    <input type="text" id="nombre" name="name" placeholder="Name"/>
                </div>

                <div className="input_container">
                    <input type="email" id="email" name="email" placeholder="Email - e.g.(email@example.com)"/>
                </div>

                <div className="input_container">
                    <input type="tel" id="phone_number" name="phone" placeholder="Phone Number"/>
                </div>

                <button type="submit" id="submit">Add Person</button>

            </form>
        )
    }
}

export default CreatePerson;