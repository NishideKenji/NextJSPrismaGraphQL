import React from 'react'

interface Props {
  errors: any
}
export default function ValidationErrors({ errors }: Props) {
  return (
    <>
      {errors && (
        <ul>
          {errors.map((err: any, i: any) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
      )}
    </>
  )
}
