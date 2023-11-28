import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
const AddCategory = () => (
  <div>
    <h1>My Form</h1>
    <Formik 
      initialValues={{ name: '', description:''}}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
        axios.post("https://6554d83163cafc694fe7163f.mockapi.io/category", 
         
         )

      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          />
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.description}
            name="description"
          />
          {props.errors.description && <div id="feedback">{props.errors.description}</div>}
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  </div>
);

export default AddCategory