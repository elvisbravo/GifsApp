import { useState } from "react";

export const useCounter = (initialValue = 10) => {
    const [count, setCount] = useState(initialValue);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    const handleReset = () => {
        setCount(initialValue);
    }

    return {
        count,
        handleIncrement,
        handleDecrement,
        handleReset
    }
}