import "./App.css";

import StateExample from "./UseState/StateExample";
import ReducerExample from "./UseReducer/ReducerExample";
import EffectExample from "./UseEffect/EffectExample";
import RefExample from "./UseRef/refExample";
import LayoutEffectExample from "./UseLayoutEffect/LayoutEffectExample";
import ImperativeHandleExample from "./UseImperativeHandle/ImperativeHandleExample";
import ContextExample from "./UseContext/ContextExample";
import MemoExample from "./UseMemo/MemoExample";
import CallBackExample from "./UseCallback/CallbackExample";

function App() {
	return (
		<div className="App">
			<CallBackExample />
		</div>
	);
}

export default App;
