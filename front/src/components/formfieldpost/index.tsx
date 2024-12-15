import './index.scss'

import {FormFieldPostProps} from "../../models/type"
import { useState } from 'react';
import Button from 'components/button';





export default function FormFieldPost({ onSubmit, placeholder, button  }: FormFieldPostProps) {
  //
  const [value, setValue] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value);
  
  const handleSubmit = () => {
    
    if (value.length === 0) return null; 

    
    if (onSubmit) {
      onSubmit(value);
    } else {
      throw new Error("onSubmit props is undefined");
    }

    setValue(""); 
  };

  const isDisabled = value.length === 0;


  return (
    <div className="formpost">
      <textarea
        onChange={handleChange}
        value={value}
        rows={4} 
        placeholder={placeholder}
        className="formpost__field"
      ></textarea>

      <Button onClick={handleSubmit} disabled={isDisabled} className="button button--primary">
              {button}
            </Button>


    </div>
  )
}
