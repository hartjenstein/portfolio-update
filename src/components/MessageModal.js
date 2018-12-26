/* import React from 'react';
import Modal from 'react-modal';
//!! converts string to boolean
const MessageModal = (props) => ( 
    <Modal 
        isOpen={!!props.modalState} 
        onRequestClose={props.clearModalState}
        className="modal"
        contentLabel='Selected Option'
        closeTimeoutMS={200}
        >
        <h3 className="modal__title">Thank you for your message.</h3>
         <p className="modal__body">I will get in touch with you as soon as possible.</p>
        <button className="button" onClick={props.clearModalState} >Okay</button>
    </Modal>
);

export default MessageModal; */

import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
//!! converts string to boolean
const MessageModal = (props) => ( 
  
    <Modal 
        isOpen={!!props.modalState} 
        onRequestClose={props.clearModalState}
        className="modal"
        contentLabel='Selected Option'
        closeTimeoutMS={200}
        >
        <h3 className="modal__title">Thank you for your message.</h3>
         <p className="modal__body">I will get in touch with you as soon as possible.</p>
        <button className="button" onClick={props.clearModalState} >Okay</button>
    </Modal>
);

const mapStateToProps = (state) => {
  return {
      modalState: state.formModal.modalState
  }
};

export default connect(mapStateToProps)(MessageModal);