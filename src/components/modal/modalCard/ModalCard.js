import React from "react";
import "./modalCard.css";
import photo from "../../../assets/no_pic.jpg";

const ModalCard = () => {
    return(

        <div className="person_card">

            <div className="card_title">
                <h3>Person Information</h3>
                <p className="modal_cross">X</p>
            </div>

            <div className="main_data">
                <img src={ photo } alt="Persons name"/>
                <p className="name">Anna Tamm</p>
                <p className="mobile">+372 56746453</p>
            </div>

            <div className="more_data_container">

                <div className="more_data">
                    <div className="data_name">
                        <p>Email</p>
                    </div>
                    <div className="data_value">
                        <p>example@email.com</p>
                    </div>
                </div>

                <div className="more_data">
                    <div className="data_name">
                        <p>Organization</p>
                    </div>
                    <div className="data_value">
                        <p>example@email.com</p>
                    </div>
                </div>

                <div className="more_data">
                    <div className="data_name">
                        <p>Assistant</p>
                    </div>
                    <div className="data_value">
                        <p>example@email.com</p>
                    </div>
                </div>

                <div className="more_data">
                    <div className="data_name">
                        <p>Groups</p>
                    </div>
                    <div className="data_value">
                        <p>example@email.com</p>
                    </div>
                </div>

                <div className="more_data">
                    <div className="data_name">
                        <p>Location</p>
                    </div>
                    <div className="data_value">
                        <p>example@email.com</p>
                    </div>
                </div>

            </div>

            <div className="back_container">
                <button className="back_button">Back</button>
            </div>

        </div>

    )
}

export default ModalCard;