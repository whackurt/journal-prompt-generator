import { useEffect } from 'react';
import './App.css';
import { journallingPrompts } from './data/prompts';
import { useState } from 'react';

function App() {
	const [filteredPrompts, setFilteredPrompts] = useState([]);
	const [selectedPrompt, setSelectedPrompt] = useState('');
	const [category, setCategory] = useState('');

	const getPrompts = (category) => {
		var prompts = journallingPrompts.filter(
			(prompts) => prompts.category === category
		);
		return prompts?.[0]?.prompts;
	};

	const generatePrompt = () => {
		setSelectedPrompt(
			filteredPrompts[Math.floor(Math.random() * filteredPrompts.length)]
		);
	};

	useEffect(() => {
		var res = getPrompts(category);
		setFilteredPrompts(res);
	}, [category]);

	return (
		<>
			<div className="flex flex-col items-center font-poppins gap-y-4 p-4 lg:p-8 w-full bg-slate-100 h-screen">
				<div className="flex flex-col items-center my-4 gap-y-2">
					<img
						width={50}
						src="https://static-00.iconduck.com/assets.00/journal-icon-2048x2048-erso1g62.png"
					/>
					<h1 className="font-bold text-2xl lg:text-3xl text-center">
						Journal Prompt Generator
					</h1>
					<p className="italic text-sm">Made with &#128150; by Kurt</p>
				</div>

				<div className="flex text-sm justify-center gap-x-4 my-2">
					<button
						onClick={() => setCategory('gratitude')}
						className={`shadow-md ${
							category == 'gratitude'
								? 'bg-white text-blue-600'
								: 'bg-blue-600 text-white'
						}  px-4 py-1 rounded-[50px] hover:bg-white border border-blue-500 hover:text-blue-500`}
					>
						Gratitude
					</button>
					<button
						onClick={() => setCategory('purpose')}
						className={`shadow-md ${
							category == 'purpose'
								? 'bg-white text-blue-600'
								: 'bg-blue-600 text-white'
						}  px-4 py-1 rounded-[50px] hover:bg-white border border-blue-500 hover:text-blue-500`}
					>
						Purpose
					</button>
					<button
						onClick={() => setCategory('personal')}
						className={`shadow-md ${
							category == 'personal'
								? 'bg-white text-blue-600'
								: 'bg-blue-600 text-white'
						}  px-4 py-1 rounded-[50px] hover:bg-white border border-blue-500 hover:text-blue-500`}
					>
						Personal
					</button>
				</div>

				<div className="flex items-center justify-center bg-white my-4 lg:min-w-[500px] min-h-[130px] max-w-[500px] mx-1 lg:mx-2 p-4 shadow-md text-center border border-blue-500 rounded-md">
					<p>
						{selectedPrompt.length
							? selectedPrompt
							: "Please select a category and click 'Generate'"}
					</p>
				</div>
				<div className="">
					<button
						onClick={() => generatePrompt()}
						className="shadow-md bg-blue-600 text-white px-4 py-2 rounded-[50px] hover:bg-white border border-blue-500 hover:text-blue-500"
					>
						Generate Prompt
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
