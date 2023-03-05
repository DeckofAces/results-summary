import React from 'react';

const Score = () => {
	return (
		<div className='mx-auto my-5 grid h-36 w-36 place-items-center rounded-full bg-gradient-to-b from-violet-blue to-persian-blue/0 text-center'>
			<div>
				<h1 className='text-6xl font-bold text-white'>76</h1>
				<p className='text-light-lavender/50'>of 100</p>
			</div>
		</div>
	);
};

const Result = () => {
	return (
		<div className='rounded-b-[2rem] bg-gradient-to-b from-light-slate-blue to-light-royal-blue p-5 px-10 text-center'>
			<header>
				<h1 className='font-semibold text-light-lavender'>Your Result</h1>
			</header>
			<Score />
			<h1 className='mb-3 text-2xl text-white'>Great</h1>
			<p className='mb-6 text-base text-light-lavender/80'>You scored higher than 65% of the people who have taken these tests.</p>
		</div>
	);
};

export default Result;
