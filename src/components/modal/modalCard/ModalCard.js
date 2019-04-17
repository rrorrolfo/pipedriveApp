import React from "react";
import "./modalCard.css";
import photo from "../../../assets/no_pic.jpg";
import {Consumer} from "../../Context/index";
import PropTypes from "prop-types";

const ModalCard = ({ toggleModal, status, selectedPerson }) => {
    return(
        <Consumer>
            { context => {

                // Finds clicked user in the people fetched from API
                const personInModal = context.filter( person => person.id === parseInt(selectedPerson))
                
                return (
                    <div className="person_card">
                        <div className="card_title">
                            <h3>Person Information</h3>
                            <p className="modal_cross" onClick={ () => toggleModal(status) }>X</p>
                        </div>

                        <div className="main_data">
                            <img src={ photo } alt="Persons name"/>
                            <p className="name">{personInModal[0].name}</p>
                            <p className="mobile">{personInModal[0].phone[0].value}</p>
                        </div>
                        {console.log(context)}
                        <div className="more_data_container">

                            <div className="more_data">
                                <div className="data_name">
                                    <p>Email</p>
                                </div>
                                <div className="data_value">
                                    <p>{personInModal[0].email[0].value}</p>
                                </div>
                            </div>

                            <div className="more_data">
                                <div className="data_name">
                                    <p>Organization</p>
                                </div>
                                <div className="data_value">
                                    <p>{personInModal[0].org_name}</p>
                                </div>
                            </div>

                            <div className="more_data">
                                <div className="data_name">
                                    <p>Location</p>
                                </div>
                                <div className="data_value">
                                    <p>{personInModal[0].org_id.address}</p>
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

ModalCard.propTypes = {
    toggleModal: PropTypes.func,
    status: PropTypes.bool,
    selectedPerson: PropTypes.string
}

export default ModalCard;