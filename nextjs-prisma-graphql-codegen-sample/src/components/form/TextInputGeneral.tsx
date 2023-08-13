import { useField } from 'formik'
import React from 'react'

interface Props {
  placeholder: string
  name: string
  type?: string
  label?: string
  disabled?: boolean
}

export default function TextInputGeneral(props: Props) {
  const [field, meta] = useField(props.name)
  return (
    <>
      <div>
        {props.label && <label>{props.label}</label>}
        <input {...field} {...props} />
        {meta.touched && meta.error ? <label>{meta.error}</label> : null}
      </div>
    </>
  )
}
