import { useState } from "react";

export function useToggle(initial = true) {
    const [isOn, setIsOn] = useState(initial);
    const toggle = () => setIsOn((prev) => !prev);

    return {isOn, toggle};
}