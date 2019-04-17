import React from "react";
import "./modal.css";
import ModalCard from "./modalCard/ModalCard";

const Modal = ({ showModal, toggleModal, selectedPerson }) => {
    return(
        <div className={showModal ? ("Modal isShown") : ("Modal isHidden")}>
            <ModalCard toggleModal={ toggleModal } status={ showModal } selectedPerson={ selectedPerson }/>
        </div>
    )
}

export default Modal;