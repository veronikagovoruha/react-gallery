import {createPortal} from "react-dom"
import PropTypes from 'prop-types';
import styles from "./modal.module.css"
import { Component } from "react";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
    componentDidMount(){
        document.addEventListener("keydown",this.handleClose )
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleClose)
    }

    handleClose = (e) => {
        if(e.target === e.currentTarget){
            this.props.close();
            return
        }
        if(e.code === "Escape"){
            this.props.close();
        }
    }

    render(){
        const{ children } = this.props;
        const {handleClose} = this;
        return (
            createPortal(
                (
                
                <div className={styles.Overlay} onClick={handleClose}>
                    <div className={styles.Modal}>
                        {children}
                    </div>
                </div>
                ),
                modalRoot
            )
        )
    }
}

Modal.defaultProps = {
    closeModal: ()=>{},
  }
Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.node,
}

export default Modal;