// Render Prop
import React from 'react';
import { Formik, Form, Field } from 'formik';

const Basic = () => {
    validationSchema = Yup.object().shape({
      email: Yup.string()
        .email('E-mail is not valid!')
        .required('E-mail is required!'),
      password: Yup.string()
        .min(6, 'Password has to be longer than 6 characters!')  
        .required('Password is required!')
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
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <Field type="email" name="email" />
              {errors.email && touched.email && errors.email}
              <Field type="password" name="password" />
              {errors.password && touched.password && errors.password}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
  );
}

export default Basic;
