import { useRef } from "react";
import Button from "./Button";

const ImperativeHandleExample = () => {
    const buttonRef = useRef(null);

    return(
        <div>
            <h1>UseImperativeHandle</h1>
            <button onClick={() => {
                buttonRef.current.alterToggle();
            }}>
                Button From Parent
            </button>
            <Button ref={buttonRef} />
        </div>
    )
}

export default ImperativeHandleExample;