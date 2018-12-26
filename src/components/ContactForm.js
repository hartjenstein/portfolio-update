// Render Prop
/* import React from 'react';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';
import MessageModal from './MessageModal';

export class ContactForm extends React.Component {
  
  state = {
    modalState: undefined
  }

  validationSchema = Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    name: Yup.string().min(2, 'Please enter your name').required('Name is required'),
    textarea: Yup.string().min(2, 'Your Messsage to me').required('Message is required')
  })
  
  clearModalState = () => {
      setTimeout(() => {
        this.setState(() => ({modalState: undefined}));
        this.props.history.push('/');
      }, 200);
  }

  render() {
    return  (
      <div className="content-container">
        <h1 className="">GET IN TOUCH</h1>
        <h2 className="headline">Drop Me A Line</h2>
        <Formik
          initialValues={{ 
          name: '',
          email:'',
          textarea: '',
          }}
          validationSchema={this.validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            this.setState(() => ({modalState: 'on'}));
            console.log(this.state)
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form  className="contact__container">
            <div className="form__field form__field1">
              { touched.name && errors.name && <p>{errors.name}</p> }
              <FastField className="text-input" type="name" name="name" placeholder="Your Name"/>
            </div>  
            <div className="form__field form__field2">
              { touched.email && errors.email && <p>{errors.email}</p> }
              <FastField className="text-input" type="email" name="email" placeholder="Email"/>
            </div>
            <div className="form__field form__field3">
              { touched.textarea && errors.textarea && <p>{errors.textarea}</p> }
              <FastField className="textarea" type="textarea" name="textarea" placeholder="textarea"/>
            </div>
            <button className="form__field button button--form-button" disabled={isSubmitting} >Submit</button>
          </Form>
          )}
        </Formik>
        <MessageModal clearModalState={this.clearModalState} modalState={this.state.modalState} /> 
      </div>
    );
  }
}

export default ContactForm; */

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import MessageModal from './MessageModal';
import { connect } from 'react-redux';
import { activateModal, deactivateModal } from '../actions/formModal';
import { sendMessage } from '../firebase/firebase';
export class ContactForm extends React.Component {

  validationSchema = Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    name: Yup.string().min(2, 'Please enter your name').required('Name is required'),
    textarea: Yup.string().min(2, 'Your Messsage to me').required('Message is required')
  })
  
  clearModalState = () => {
      setTimeout(() => {
        this.props.deactivateModal();
        console.log( this.props.deactivateModal())
        this.props.history.push('/');
      }, 200);
  }

  render() {
    return  (
      <div className="content-container">
        <h1 className="">GET IN TOUCH</h1>
        <h2 className="headline">Drop Me A Line</h2>
        <Formik
          initialValues={{ 
          name: '',
          email:'',
          textarea: '',
          }}
          validationSchema={this.validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            this.props.activateModal()
            setTimeout(() => {
                sendMessage(values);
              setSubmitting(false);
            }, 200);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form  className="contact__container">
            <div className="form__field form__field1">
              { touched.name && errors.name && <p>{errors.name}</p> }
              <Field className="text-input" type="name" name="name" placeholder="Your Name"/>
            </div>  
            <div className="form__field form__field2">
              { touched.email && errors.email && <p>{errors.email}</p> }
              <Field className="text-input" type="email" name="email" placeholder="Email"/>
            </div>
            <div className="form__field form__field3">
              { touched.textarea && errors.textarea && <p>{errors.textarea}</p> }
              <Field className="textarea" component="textarea" type="textarea" name="textarea" placeholder="Your message to me"/>
            </div>
            <button type="submit" className="form__field button button--form-button" disabled={isSubmitting} >Submit</button>
          </Form>
          )}
        </Formik>
        <MessageModal clearModalState={this.clearModalState} /> 
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    modalState: state.formModal
  };
};

const mapDispatchToProps = (dispatch, props) => (
  { activateModal: () => dispatch(activateModal()),
    deactivateModal: () => dispatch(deactivateModal())
  });

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);