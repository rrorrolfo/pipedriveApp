import React from "react";
import "./modal.css";
import ModalCard from "./modalCard/ModalCard";
import PropTypes from "prop-types";

const Modal = ({ showModal, toggleModal, selectedPerson, people }) => {
    return(
        <div className={showModal ? ("Modal isShown") : ("Modal isHidden")}>
            <ModalCard 
                toggleModal={ toggleModal } 
                status={ showModal } 
                selectedPerson={ selectedPerson }
                people={ people }
                />
        </div>
    )
}


ModalCard.propTypes = {
    toggleModal: PropTypes.func,
    showModal: PropTypes.bool,
    selectedPerson: PropTypes.string,
    people: PropTypes.arrayOf(PropTypes.object)
}

export default Modal;