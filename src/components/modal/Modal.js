import React from "react";
import "./modal.css";
import ModalCard from "./modalCard/ModalCard";

const Modal = ({ showModal, toggleModal }) => {
    return(
        <div className={showModal ? ("Modal isShown") : ("Modal isHidden")}>
            <ModalCard toggleModal={ toggleModal }/>
        </div>
    )
}

export default Modal;