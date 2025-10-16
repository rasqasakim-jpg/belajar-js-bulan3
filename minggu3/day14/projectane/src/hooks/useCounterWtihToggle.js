import { useCounter } from "./useCounter";
import { useToggle } from "./useToggle1";

export function useCounterWithToggle(initialCount = 0, initialToggle = true) {
    const counter = useCounter(initialCount);
    const toggle = useToggle(initialToggle);

    return { ...counter, ...toggle };
}