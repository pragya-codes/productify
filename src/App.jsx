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
	return (
		<>
			<div className="container">POMODORO</div>
		</>
	);
}
export default App;
