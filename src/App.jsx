import { useState } from 'react';

function App() {
	return (
		<>
			<Navbar />
			<Pomodoro />
		</>
	);
}

function Navbar() {
	return (
		<nav className="container p-2 place-items-center grid grid-rows-2 grid-cols-2 sm:flex justify-between">
			<h1 className="font-bold col-span-2 my-3">productify</h1>
			{/* <i class="fa-regular fa-sun"></i>
			<i class="fa-solid fa-moon"></i> */}
			<p>T</p>
			<p>P</p>
			{/* <i className="fa-solid fa-user"></i>
			<i className="fa-regular fa-user"></i> */}
		</nav>
	);
}

function Pomodoro() {
	const ms = 25;
	const [sec, setSec] = useState(0);
	const [min, setMin] = useState(ms);
	function handleClick() {
		const id = setInterval(() => {}, ms);
	}
	return (
		<>
			<div className="container flex flex-col p-10">
				<div className="text-center px-12 py-2 text-2xl font-bold">
					{min}:{sec}
				</div>
				<div className="text-center">
					<button className="px-12 py-2" onClick={handleClick}>
						START
					</button>
				</div>
			</div>
		</>
	);
}
export default App;
