import React from "react";
import "./modalCard.css";
import photo from "../../../assets/no_pic.jpg";
import {Consumer} from "../../Context/index";

const ModalCard = ({ toggleModal, status, selectedPerson }) => {
    return(
        <Consumer>
            { context => {

                const personInModal = context[parseInt(selectedPerson) - 1]
                
                return (
                    <div className="person_card">
                        <div className="card_title">
                            <h3>Person Information</h3>
                            <p className="modal_cross" onClick={ () => toggleModal(status) }>X</p>
                        </div>

                        <div className="main_data">
                            <img src={ photo } alt="Persons name"/>
                            <p className="name">{personInModal.name}</p>
                            <p className="mobile">{personInModal.phone[0].value}</p>
                        </div>
                        {console.log(context)}
                        <div className="more_data_container">

                            <div className="more_data">
                                <div className="data_name">
                                    <p>Email</p>
                                </div>
                                <div className="data_value">
                                    <p>{personInModal.email[0].value}</p>
                                </div>
                            </div>

                            <div className="more_data">
                                <div className="data_name">
                                    <p>Organization</p>
                                </div>
                                <div className="data_value">
                                    <p>{personInModal.org_name}</p>
                                </div>
                            </div>

                            <div className="more_data">
                                <div className="data_name">
                                    <p>Location</p>
                                </div>
                                <div className="data_value">
                                    <p>{personInModal.org_id.address}</p>
                                </div>
                            </div>

                        </div>

                        <div className="back_container">
                            <button className="back_button" onClick={ () => toggleModal(status) }>Back</button>
                        </div>

                    </div>
                            );

                    }}
        </Consumer>

    )
}

export default ModalCard;