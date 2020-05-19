import React, { Component } from "react";
import styled from "@emotion/styled";
//import './modal.css';

// const ModalContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     z-index: 100;
//     position: fixed;
//     top: 0;
//     left: 0;
//     width:100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.7);
// `;

// const ModalBox = styled.div`
//     position: absolute;
//     background: white;
// `;

class Modal extends Component {

    render() {
        return (
            <div className= "modal-container">
                <div className="modal-box">
                    <div>{this.props.children}</div>
                </div>
            </div>
        );
    }
}

export default Modal;
