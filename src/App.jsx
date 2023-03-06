import './App.css';
import Result from './components/Result';
import Summary from './components/Summary';

function App() {
	return (
		<main className='h-screen w-full md:grid md:place-items-center'>
			<div className='m-auto overflow-clip md:flex md:w-1/2 md:rounded-[2rem] md:shadow-xl 2xl:w-2/5'>
				<div className='md:w-1/2'>
					<Result />
				</div>
				<div className='md:w-1/2'>
					<Summary />
				</div>
			</div>
		</main>
	);
}

export default App;
