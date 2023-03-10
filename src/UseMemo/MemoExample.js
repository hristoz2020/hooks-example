import { useEffect, useState, useMemo } from "react";

const MemoExample = () => {
	const [data, setData] = useState(null);
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((res) => {
				setData(res);
				console.log("API was called");
			});
	}, []);

	const findLongestName = (data) => {
		if (!data) return null;

		let longestName = "";
		for (let i = 0; i < data.length; i++) {
			let currentName = data[i].title;
			if (currentName.length > longestName.length) {
				longestName = currentName;
			}
		}

		console.log("THIS WAS COMPUTED");
		return longestName;
	};

	const getLongestName = useMemo(() => findLongestName(data), [data]);

	return (
		<div className="App">
			<div> {getLongestName} </div>

			<button
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				{" "}
				Toggle
			</button>
			{toggle && <h1> toggle </h1>}
		</div>
	);
}

export default MemoExample;