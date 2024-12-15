import { PostCreateProps } from 'models/type'
import React from 'react'
import FormFieldPost from "../../components/formfieldpost"

export default function PostCreate({onCreate, placeholder, button}:PostCreateProps) {

    const hundleSubmit = () => console.log("hundleSubmit")
  
    return (
    <div>
        <FormFieldPost
    placeholder={placeholder}
    button={button}
    onSubmit={hundleSubmit}
  />
  </div>
  )
}
