import { useLayoutEffect, useEffect, useRef } from "react";

const LayoutEffectExample = () => {
    const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div className="App">
      <input ref={inputRef} value="EXAMPLE" style={{ width: 400, height: 60 }} />
    </div>
  );
}

export default LayoutEffectExample;