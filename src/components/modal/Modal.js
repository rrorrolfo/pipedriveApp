import React from "react";
import "./modal.css";
import ModalCard from "./modalCard/ModalCard";

const Modal = ({ showModal }) => {
    return(
        <div className={showModal ? ("Modal isShown") : ("Modal isHidden")}>
            <ModalCard />
        </div>
    )
}

export default Modal;