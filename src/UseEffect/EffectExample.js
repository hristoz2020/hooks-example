import { useEffect, useState } from "react";

const EffectExample = () => {
	const [data, setData] = useState("");
	const [count, setCount] = useState(0);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((res) => {
				setData(res[0].title);
				console.log("API was called");
			});
	}, []);

	return (
		<div>
			<h1>{data}</h1>
			<h2>{count}</h2>

            <button onClick={() => {setCount(count + 1)}}>
                Click Here
            </button>
		</div>
	);
};

export default EffectExample;
