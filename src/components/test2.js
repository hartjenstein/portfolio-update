// Render Prop
import React from 'react';
import { Formik, Form, Field } from 'formik';

const Basic = () => {

  const validationSchema = Yup.object().shape({
      email: Yup.string().email('Email not valid').required('Email is required'),
      name: Yup.string().min(2, 'Please enter your name').required('Name is required'),
      name: Yup.string().min(2, 'Your Messsage to me').required('Name is required')
  })

    return (
      <div>
        <h1>Any place in your app!</h1>
        <Formik
          initialValues={{ 
          name: '',
          email: '', 
          textField: '' 
          }}
          validate={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values)
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
            <div>
              { touched.name && errors.name && <p>{errors.name}</p> }
              <Field type="name" name="name" placeholder="Your Name"/>
            </div>  
            <div>
              { touched.email && errors.email && <p>{errors.email}</p> }
              <Field type="email" name="email" placeholder="Email"/>
            </div>
            <div>
              { touched.textarea && errors.textarea && <p>{errors.textarea}</p> }
              <Field type="textfield" name="textfield" placeholder="textfield"/>
            </div>
            <button disabled={isSubmitting}>Submit</button>
          </Form>
          )}
          </Formik>
          <MessageModal clearModalState={clearModalState} />
        </div>
    );
}

export default Basic;
