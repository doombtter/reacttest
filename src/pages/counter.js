import { useState } from "react";

function Counter() {
    let [data, setNumber] = useState(0)
    const increase = () => {
        setNumber(data + 1)
    }
    const decrease = () => {
        setNumber(data - 1)
    }
    const reset = () => {
        setNumber(0)
    }
    return (
        <div>
            <h1>메인 {data}</h1>
            <button onClick={increase}>+ 버튼</button>
            <button onClick={decrease}>- 버튼</button>
            <button onClick={reset}>초기화</button>
        </div>
    );
}

export default Counter;