// Render Prop
import React from 'react';
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
      <div>
        <h1>Drop Me A Line</h1>
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
            <Form>
            <div>
              { touched.name && errors.name && <p>{errors.name}</p> }
              <FastField type="name" name="name" placeholder="Your Name"/>
            </div>  
            <div>
              { touched.email && errors.email && <p>{errors.email}</p> }
              <FastField type="email" name="email" placeholder="Email"/>
            </div>
            <div>
              { touched.textarea && errors.textarea && <p>{errors.textarea}</p> }
              <FastField type="textarea" name="textarea" placeholder="textarea"/>
            </div>
            <button disabled={isSubmitting} >Submit</button>
          </Form>
          )}
        </Formik>
        <MessageModal clearModalState={this.clearModalState} modalState={this.state.modalState} /> 
      </div>
    );
  }
}

export default ContactForm;
