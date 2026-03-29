import { useCounter } from "../hooks/useCounter";

export const MyCounterApp = () => {

    const { count, handleIncrement, handleDecrement, handleReset } = useCounter(5);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>My Counter App</h1>
            <p>{count}</p>

            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}