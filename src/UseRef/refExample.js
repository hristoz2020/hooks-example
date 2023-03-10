import { useRef } from "react";

const RefExample = () => {
    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.value = '';
    }

    return(
        <div>
            <h1>useRef-ex</h1>
            <input type="text" placeholder="...something" ref={inputRef} />
            <button onClick={onClick}>Clear Input</button>
        </div>
    )
}

export default RefExample;