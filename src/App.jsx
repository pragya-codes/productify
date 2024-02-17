import { useState, useEffect } from 'react';

function App() {
	const [theme, setTheme] = useState(false);
	console.log(theme);
	return (
		<main
			className={
				theme
					? 'bg-black h-screen text-gray-200'
					: 'bg-lime-400 h-screen '
			}
		>
			<Navbar />
			<Pomodoro />
			<Menu theme={theme} setTheme={setTheme} />
			<Footer />
		</main>
	);
}

function Navbar() {
	return (
		<nav className="container p-2 place-items-center grid grid-rows-2 grid-cols-2 sm:flex justify-between">
			<h1 className="font-bold col-span-2 my-3">productify</h1>

			<p>P</p>
			{/* <i className="fa-solid fa-user"></i>
			<i className="fa-regular fa-user"></i> */}
		</nav>
	);
}

function Pomodoro() {
	const [isActive, setActive] = useState(false);
	const [sec, setSec] = useState(0);
	const [min, setMin] = useState(25);

	/*I have replaced normal function with a useeffect hook 
	Earlier I was doing -
	function handleClick() {
		const id = setInterval(() => {
			if (min === 0 && sec === 0) {
			clearInterval(id);
			} 
			else if (sec === 0) 
					{
						setMin((prevmin) => prevmin - 1);
						console.log(min);
						setSec(59);
					} 
					else {
						setSec((prevsec) => prevsec - 1);
						console.log(sec);
						}
			, 1000);
		}
 This is completely wrong because 
 1. whenever the start button will be clicked it will start an interval.
 2. previous interval will not end
 3. inisde logic is run after each sec without previous cleanup.
 4. same states are updated by multiple callbacks if START button is clicked or by running 
 logic after each second - which leads to unexpected beahaviou/ negative numbers in min or sec

 So for counters we need to use hook - useEffect (recommended to handle side effects)
benefit: 1. initial render
2. when isActive is changed - it hits the sideeffect.
3. 
*/
	useEffect(() => {
		let id;

		if (isActive) {
			if (min === 0 && sec === 0) {
				clearInterval(id);
			} else {
				if (sec === 0) {
					setMin((min) => min - 1);
					setSec(59);
				} else
					id = setInterval(() => {
						setSec((sec) => sec - 1);
					}, 1000);
			}
		}

		return () => {
			clearInterval(id);
		};
	}, [isActive, min, sec]);

	function handleClick() {
		setActive(!isActive);
	}

	function handleReset() {
		setActive(false);
		setMin(25);
		setSec(0);
	}
	return (
		<>
			<div className="container mx-auto w-3/5 rounded-xl flex flex-col my-10 p-10 bg-lime-600  dark:bg-black">
				<div className="text-center px-12 py-2 text-4xl font-bold">
					{min}:{sec <= 9 ? `0${sec}` : sec}
				</div>
				<div className=" flex flex-col gap-2 justify-center p-3 pt-8 font-semibold sm:flex-row">
					<button
						className="px-16 py-2 border rounded-md border-black hover:bg-lime-700"
						onClick={handleClick}
					>
						{isActive ? `STOP` : `START`}
					</button>

					<button
						className="px-16 py-2 border rounded-md border-black hover:bg-lime-700"
						onClick={handleReset}
					>
						RESET
					</button>
				</div>
			</div>
		</>
	);
}

function Menu({ theme, setTheme }) {
	return (
		<>
			<section className="container w-1/3 text-center space-x-12">
				<i className="fa-solid fa-list fa-lg"></i>

				<i
					className={
						theme
							? 'fa-regular fa-sun fa-lg'
							: 'fa-solid fa-moon fa-lg'
					}
					onClick={() => setTheme(!theme)}
				></i>

				<i className="fa-solid fa-chart-line fa-lg"></i>
			</section>
		</>
	);
}

function Footer() {
	const [quotes, setQuotes] = useState('');
	const url =
		'https://api.quotable.io/quotes/random?tags=inspirational|motivational&maxLength=50';
	async function quote(url) {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		setQuotes(data[0].content);
	}
	useEffect(() => {
		quote(url);
	}, []);

	return (
		<>
			<p className="container text-sm text-center pt-10">{quotes}</p>
		</>
	);
}
export default App;
