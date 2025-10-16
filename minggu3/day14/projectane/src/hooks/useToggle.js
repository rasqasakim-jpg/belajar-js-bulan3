import { useState } from "react";

export default function useToggle(intialValue = false) {
    const [value, setValue] = useState(intialValue);

    const toggle = () => {
      setValue((prev) => !prev);
    };

    return [value, toggle];
}