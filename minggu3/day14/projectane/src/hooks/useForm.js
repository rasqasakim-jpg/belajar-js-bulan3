import { useState } from "react";

export default function useForm(unitialvalues) {
    const [values, setValues] = useState(unitialvalues);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
        ...values, 
        [name]: value
    });
  };

  return [values, handleChange];
}