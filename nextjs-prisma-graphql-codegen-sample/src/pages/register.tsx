import axios from 'axios'
import { ErrorMessage, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

import ValidationErrors from './erros/ValidationErrors'
import TextInputGeneral from './form/TextInputGeneral'

export default function RegisterForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '', error: null }}
      onSubmit={(values, { setErrors }) =>
        axios
          .post('/api/register', values)
          .catch((error) => setErrors({ error }))
      }
      validationSchema={Yup.object({
        username: Yup.string().required(),
        email: Yup.string().required().email(),
        password: Yup.string().required(),
      })}
    >
      {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
        <Form
          className="ui form error"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <h3>Sigh up</h3>
          <TextInputGeneral name="username" placeholder="User Name" />
          <TextInputGeneral name="email" placeholder="Email" />
          <TextInputGeneral
            name="password"
            placeholder="Password"
            type="password"
          />
          <ErrorMessage
            name="error"
            render={() => <ValidationErrors errors={errors.error} />}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}
